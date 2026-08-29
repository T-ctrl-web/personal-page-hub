/**
 * AI 模板沙箱渲染器（根治方案）
 *
 * AI 生成的 renderBody 代码**只在隔离 iframe 内执行**（sandbox="allow-scripts"，
 * 无 allow-same-origin → opaque origin，碰不到主页面任何数据）。
 *
 * 实现：把「引导脚本 + 内嵌数据（renderBody/css/data 序列化为 JSON，< 转义防
 * script 提前结束）」生成一个完整 HTML，用 Blob URL 喂给 sandbox iframe。
 * iframe 加载时同步执行渲染脚本（无需 postMessage，规避 sandbox 下
 * window.parent.postMessage 不可靠的问题），渲染结果直接写入自身文档显示。
 *
 * - sandboxHtml(template, data)：生成引导页 HTML（预览/下载共用）
 * - validateRenderBody(renderBody)：语法预检（仅编译不执行，安全）
 */
import { buildTemplateHtml } from './export.js'

/* 渲染器脚本（在 sandbox iframe 内运行；全单引号，避免与父页模板字符串冲突） */
const RENDERER_SCRIPT = `(function(){
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var DANGER={Object:1,Function:1,globalThis:1,constructor:1,eval:1,window:1,document:1,localStorage:1,sessionStorage:1,fetch:1,XMLHttpRequest:1,WebSocket:1,require:1,process:1,navigator:1,location:1,alert:1,open:1};
var safeGet=function(t,k){if(k==='constructor'||k==='__proto__'||k==='prototype')return undefined;if(k==='toString'||k==='valueOf'){var f=t[k];return typeof f==='function'?f.bind(t):f}return Reflect.get(t,k)};
try{
  var target=Object.create(null);
  target.esc=new Proxy(esc,{get:safeGet});
  target.css=new Proxy(new String(TASK.css||''),{get:safeGet});
  var sandbox=new Proxy(target,{
    has:function(t,k){if(k==='d')return false;if(k in t)return true;if(typeof k==='string'&&DANGER[k])return true;if(typeof k==='string'&&k in globalThis)return false;return true},
    get:function(t,k){if(typeof k==='symbol')return undefined;if(k in t)return t[k];if(typeof k==='string'&&DANGER[k])throw new Error('AI 模板代码使用了被禁止的全局对象：'+k);return ''},
    set:function(){return true}
  });
  var dataProxy=new Proxy(TASK.data||{}, {get:function(t,k){return (k==='constructor'||k==='__proto__'||k==='prototype')?undefined:t[k]},set:function(){return true}});
  var body=String(TASK.renderBody||'').trim();
  var code=/^return\\b/.test(body)?body:'return '+body;
  var render=new Function('d','with(this){'+code+'}').bind(sandbox);
  var out=render(dataProxy);
  document.body.style.margin='0';
  document.body.innerHTML='<style>'+String(TASK.css||'')+'</style>'+out;
}catch(e){
  document.body.style.cssText='margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;background:#0E1024;color:#fff;padding:40px';
  document.body.innerHTML='<div style="max-width:640px"><div style="font-size:20px;font-weight:700;margin-bottom:12px">⚠️ 模板渲染出错</div><pre style="white-space:pre-wrap;background:rgba(255,255,255,.08);padding:16px;border-radius:12px;font-size:13px;color:#FBBFBF">'+esc(String(e&&e.stack||e))+'</pre></div>';
}
})();`

/** JSON 内嵌安全化：< 转义为 \u003c，防止数据中的 </script> 提前结束脚本 */
function jsonSafe(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

/**
 * 生成引导页 HTML（含内嵌数据；iframe 加载时同步渲染）
 */
export function sandboxHtml(template, data) {
  const task = jsonSafe({ renderBody: template.renderBody, css: template.css, data: data ?? {} })
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>
<script>
var TASK = ${task};
${RENDERER_SCRIPT}
</script>
</body></html>`
}

/**
 * 语法预检：仅编译 renderBody（new Function 不执行），拦截最常见语法错误。
 * 运行时错误由沙箱 iframe 内 catch 显示。
 */
export function validateRenderBody(renderBody) {
  try {
    const body = String(renderBody || '').trim()
    const code = /^return\b/.test(body) ? body : 'return ' + body
    // 仅编译（不调用），安全；同时拦截明显危险调用（可选）
    new Function('d', 'with({}){' + code + '}')
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

/**
 * AI 模板的下载内容：引导页 HTML（用户在本地打开时自动渲染为成品页）。
 * 下载文件里的 AI 代码与 Hub 的 localStorage 跨源隔离（file:// vs http://），
 * 且为用户主动获取的文件（等同用户自行运行脚本），风险边界可接受。
 */
export function sandboxDownloadHtml(template, data) {
  return sandboxHtml(template, data)
}

/** 非 AI 模板仍走父线程渲染 */
export function renderTemplateStatic(template, data) {
  return Promise.resolve(template.ai ? sandboxDownloadHtml(template, data) : buildTemplateHtml(template, data))
}
