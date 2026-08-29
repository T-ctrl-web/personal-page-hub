import { useEffect, useMemo, useRef, useState } from 'react'
import { buildTemplateHtml } from './export.js'
import { sandboxHtml } from './sandboxRenderer.js'

function makeUrl(html) {
  try {
    return URL.createObjectURL(new Blob([html], { type: 'text/html' }))
  } catch {
    return ''
  }
}

/**
 * 统一 blob URL 生命周期：useState 初始同步生成（iframe 从渲染起就带 src）、
 * dataKey 变化时重建（revoke 旧值）、卸载时 revoke（防泄漏）。
 */
function useBlobPreview(contentFn, deps) {
  const urlRef = useRef(null)
  const prevKey = useRef(deps.join('|'))
  const [url, setUrl] = useState(() => {
    const u = makeUrl(contentFn())
    urlRef.current = u
    return u
  })

  useEffect(() => {
    const key = deps.join('|')
    if (prevKey.current === key) return
    prevKey.current = key
    const next = makeUrl(contentFn())
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    urlRef.current = next
    setUrl(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => () => { if (urlRef.current) URL.revokeObjectURL(urlRef.current) }, [])
  return url
}

/**
 * 模板预览 iframe（统一实现）
 * - 内置模板（可信）：父线程渲染成 HTML → Blob URL
 * - AI 模板：引导页（含内嵌数据 + 渲染脚本）→ Blob URL → sandbox iframe，
 *   AI 代码只在隔离 iframe 内执行（主线程永不 eval AI 代码）
 */
export default function PreviewFrame({ template, data, className, style, title }) {
  const dataKey = useMemo(() => JSON.stringify(data ?? null), [data])

  const url = template.ai
    ? useBlobPreview(() => sandboxHtml(template, data), [template, dataKey])
    : useBlobPreview(() => buildTemplateHtml(template, data), [template, dataKey])

  return <iframe className={className} style={style} title={title || '预览'} sandbox="allow-scripts" src={url} />
}
