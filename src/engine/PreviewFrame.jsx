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
 * 模块级 blob URL 缓存：市场页大量缩略图 + 详情/编辑页来回切换时，
 * 同一模板同一份数据复用同一 URL，避免重复生成大 HTML 字符串。
 * cacheKey 为空时不缓存（编辑页数据频繁变化，不适用）。
 */
const blobCache = new Map()
const CACHE_MAX = 48
function cachedUrl(cacheKey, contentFn) {
  if (!cacheKey) return makeUrl(contentFn())
  const hit = blobCache.get(cacheKey)
  if (hit) return hit
  if (blobCache.size >= CACHE_MAX) {
    const oldest = blobCache.keys().next().value
    const oldUrl = blobCache.get(oldest)
    if (oldUrl) URL.revokeObjectURL(oldUrl)
    blobCache.delete(oldest)
  }
  const u = makeUrl(contentFn())
  blobCache.set(cacheKey, u)
  return u
}

/**
 * 统一 blob URL 生命周期：useState 初始同步生成（iframe 从渲染起就带 src）、
 * dataKey 变化时重建（revoke 旧值）、卸载时 revoke（防泄漏）。
 */
function useBlobPreview(contentFn, deps, cacheKey) {
  const urlRef = useRef(null)
  const prevKey = useRef(deps.join('|'))
  const [url, setUrl] = useState(() => {
    const u = cachedUrl(cacheKey, contentFn)
    urlRef.current = u
    return u
  })

  useEffect(() => {
    const key = deps.join('|')
    if (prevKey.current === key) return
    prevKey.current = key
    const u = cachedUrl(cacheKey, contentFn)
    if (urlRef.current && urlRef.current !== u) URL.revokeObjectURL(urlRef.current)
    urlRef.current = u
    setUrl(u)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => () => {
    // 缓存中的 URL 由缓存统一管理；仅回收未被缓存、由本实例创建的 URL
    if (urlRef.current && ![...blobCache.values()].includes(urlRef.current)) {
      URL.revokeObjectURL(urlRef.current)
    }
  }, [])
  return url
}

/**
 * 模板预览 iframe（统一实现）
 * - 内置模板（可信）：父线程渲染成 HTML → Blob URL
 * - AI 模板：引导页（含内嵌数据 + 渲染脚本）→ Blob URL → sandbox iframe，
 *   AI 代码只在隔离 iframe 内执行（主线程永不 eval AI 代码）
 */
export default function PreviewFrame({ template, data, className, style, title, cacheKey }) {
  const dataKey = useMemo(() => JSON.stringify(data ?? null), [data])

  const url = template.ai
    ? useBlobPreview(() => sandboxHtml(template, data), [template, dataKey], cacheKey)
    : useBlobPreview(() => buildTemplateHtml(template, data), [template, dataKey], cacheKey)

  return <iframe className={className} style={style} title={title || '预览'} sandbox="allow-scripts" src={url} />
}
