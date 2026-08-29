/**
 * 模板引擎
 * 模板结构：{ id, name, tagline, category, style, description, cover, schema, defaults, render, css, js? }
 * - schema：字段定义，驱动通用编辑器自动生成表单
 * - render(data)：data → body HTML 字符串
 * - buildTemplateHtml(template, data)：data → 完整独立 HTML 文档
 */

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export function buildTemplateHtml(template, data) {
  const title = `${data?.name || data?.basic?.name || template.name || '我的主页'} · ${template.name}`
  // H-3：css/js 做标签转义，防止 </style> / </script> 打断注入
  const safeCss = String(template.css || '').replace(/<\/style/gi, '<\\/style')
  const safeJs = String(template.js || '').replace(/<\/script/gi, '<\\/script')
  const js = template.js ? `<script>${safeJs}</script>` : ''
  let body
  try {
    body = template.render(data)
  } catch (e) {
    // 渲染失败不白屏：iframe 内显示可读错误，便于定位 AI 输出问题
    body = `<div style="min-height:100vh;display:grid;place-items:center;padding:40px;font-family:system-ui,sans-serif;background:#0E1024;color:#fff">
      <div style="max-width:640px">
        <div style="font-size:20px;font-weight:700;margin-bottom:12px">⚠️ 模板渲染出错</div>
        <pre style="white-space:pre-wrap;background:rgba(255,255,255,.08);padding:16px;border-radius:12px;font-size:13px;color:#FBBFBF">${esc(e instanceof Error ? e.stack || e.message : String(e))}</pre>
        <div style="margin-top:12px;font-size:13px;color:rgba(255,255,255,.7)">请点击「重新生成」重试；若反复失败，把上面错误信息发给开发者。</div>
      </div>
    </div>`
  }
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${esc(title)}">
<title>${esc(title)}</title>
<style>${safeCss}</style>
</head>
<body>
${body}
${js}
</body>
</html>`
}

export function downloadHtml(template, data, filename) {
  const html = buildTemplateHtml(template, data)
  triggerDownload(html, filename || `${template.id}.html`)
}

/**
 * 下载模板：AI 模板下载沙箱引导页（打开自动渲染，AI 代码与 Hub 数据跨源隔离）；
 * 内置模板父线程渲染成静态 HTML。
 */
export async function downloadTemplate(template, data, filename) {
  const { renderTemplateStatic } = await import('./sandboxRenderer.js')
  const html = await renderTemplateStatic(template, data)
  triggerDownload(html, filename || `${template.id}.html`)
}

function triggerDownload(html, filename) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}

export function downloadJson(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json;charset=utf-8' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename || 'data.json'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}
