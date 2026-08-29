import { useEffect, useRef } from 'react'
import PreviewFrame from './PreviewFrame.jsx'
import Icon from './Icon.jsx'
import { downloadTemplate } from './export.js'

/**
 * 全屏预览覆盖层：fixed 铺满视口、深色底、顶部工具栏（模板名 / 下载 / 关闭），
 * 预览 iframe 占满剩余空间。ESC 关闭，打开时焦点移入关闭按钮。
 * 不依赖浏览器 Fullscreen API（sandbox iframe 受限），用 fixed 层模拟全屏，兼容性最好。
 */
export default function FullscreenPreview({ template, data, onClose, title }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => closeRef.current?.focus(), 30)
    return () => { window.removeEventListener('keydown', onKey); clearTimeout(t) }
  }, [onClose])

  const dataForRender = data ?? structuredClone(template.defaults)

  return (
    <div className="fs-mask" role="dialog" aria-modal="true" aria-label={`全屏预览：${template.name}`}>
      <div className="fs-head">
        <div className="fs-title">
          <b>{title || template.name}</b>
          <span className="chip-btn" style={{ background: 'var(--info-soft)', color: '#C7CDFF', border: 'none', cursor: 'default', padding: '2px 10px' }}>{template.style}</span>
        </div>
        <div className="fs-acts">
          <button className="btn btn-line btn-sm fs-btn-dark" onClick={() => downloadTemplate(template, structuredClone(dataForRender), `${template.id}.html`)}>
            <Icon name="download" size={14} /> 下载 HTML
          </button>
          <button className="btn btn-line btn-sm fs-btn-dark" ref={closeRef} onClick={onClose} aria-label="退出全屏预览">
            <Icon name="close" size={15} /> 退出全屏
          </button>
        </div>
      </div>
      <PreviewFrame className="fs-frame" template={template} data={dataForRender} title={title || template.name} cacheKey={`${template.id}|fullscreen`} />
    </div>
  )
}
