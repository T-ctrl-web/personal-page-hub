/**
 * 模板引擎
 * 模板结构：{ id, name, tagline, category, style, description, cover, schema, defaults, render, css, js? }
 * - schema：字段定义，驱动通用编辑器自动生成表单
 * - render(data)：data → body HTML 字符串
 * - buildTemplateHtml(template, data)：data → 完整独立 HTML 文档
 */
import { sharedHeadBlock } from '../templates/fonts.js'

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

/** 内联 favicon（data URI，导出 HTML 离线可用）——紫色渐变字母标 */
const FAVICON_SVG = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6D5BFF"/><stop offset="1" stop-color="#5B8DEF"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><path d="M20 45 V27 l7 9 7-9 v18" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`)}`

/**
 * 从模板数据中提取社交卡片信息（数据字段约定：name/role/desc/avatar/projects[].cover）
 * og:image 优先级：第一张项目封面 → 头像 → 无
 */
function extractSocialMeta(data) {
  const d = data || {}
  const name = d.name || d.basic?.name || ''
  const role = d.role || d.tagline || d.basic?.role || ''
  const desc = d.desc || d.intro || d.basic?.desc || (Array.isArray(d.about) ? d.about[0]?.text : '') || ''
  const cover = (Array.isArray(d.projects) ? d.projects.find((p) => p && p.cover && String(p.cover).trim())?.cover : null) || ''
  const avatar = d.avatar && String(d.avatar).trim() ? d.avatar : ''
  const ogImage = (cover && String(cover).trim()) || avatar || ''
  return { name, role, desc, ogImage }
}

/** 导出页社交卡片头部（og: + favicon）——用户作品页被分享时不再是一行裸标题 */
function socialMetaBlock(template, data) {
  const { name, role, desc, ogImage } = extractSocialMeta(data)
  const fullTitle = `${name || template.name || '我的主页'}${role ? ' · ' + role : ''}`
  const meta = [
    `<meta property="og:type" content="profile">`,
    `<meta property="og:site_name" content="PersonalPage Hub">`,
    `<meta property="og:title" content="${esc(fullTitle)}">`,
    desc && `<meta property="og:description" content="${esc(String(desc).slice(0, 140))}">`,
    ogImage && `<meta property="og:image" content="${esc(String(ogImage))}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<link rel="icon" href="${FAVICON_SVG}">`,
  ].filter(Boolean)
  return meta.join('\n')
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
${socialMetaBlock(template, data)}
${sharedHeadBlock()}
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
