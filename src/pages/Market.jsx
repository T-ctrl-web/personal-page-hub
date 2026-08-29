import { useMemo, useState } from 'react'
import { allTemplates, countBrokenOutputs, removeAllBrokenOutputs } from '../templates/index.js'
import { downloadTemplate } from '../engine/export.js'
import PreviewFrame from '../engine/PreviewFrame.jsx'

export default function Market({ nav }) {
  const [cat, setCat] = useState('全部')
  const [style, setStyle] = useState('全部')
  const [previewId, setPreviewId] = useState(null)
  const [brokenN, setBrokenN] = useState(countBrokenOutputs)

  // 不缓存：每次渲染都读最新模板（含 AI 新生成的），模板量少性能无碍
  const templates = allTemplates()
  const cats = ['全部', ...new Set(templates.map((t) => t.category))]
  const styles = ['全部', ...new Set(templates.map((t) => t.style))]

  const list = useMemo(() => templates.filter((t) =>
    (cat === '全部' || t.category === cat) && (style === '全部' || t.style === style)
  ), [templates, cat, style])

  const download = (t) => {
    downloadTemplate(t, structuredClone(t.defaults), `${t.id}.html`)
  }

  return (
    <div>
      {/* 品牌 Hero */}
      <div className="hero-band">
        <div className="inner">
          <span className="hero-badge-pill"><span className="dot"></span>PersonalPage Hub · 模板工坊</span>
          <h1>几秒钟，拥有你的<span className="grad">个人主页</span></h1>
          <p className="sub">挑一个专业模板 → 在线编辑你的信息 → 实时预览 → 一键下载独立 HTML。或让 AI 为你定制一个专属模板。免费、无需注册、数据全在本地。</p>
          <div className="hero-stats">
            <div className="hs"><b>{templates.length}</b><span>可用模板</span></div>
            <div className="hs"><b>{cats.length - 1}</b><span>用途分类</span></div>
            <div className="hs"><b>{styles.length - 1}</b><span>视觉风格</span></div>
            <div className="hs"><b>AI</b><span>专属定制</span></div>
          </div>
        </div>
      </div>

      {/* AI 生成入口 */}
      <div className="card" style={{ marginTop: 24, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', background: 'linear-gradient(135deg, rgba(109,91,255,.07), rgba(244,114,182,.06))', borderColor: 'rgba(109,91,255,.22)' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <b style={{ fontSize: 15 }}>✨ 没有合适的？让 AI 为你生成一个专属模板</b>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>描述你的职业与风格，AI 生成全新模板，自动出现在市场里（标注 AI 生成）</div>
        </div>
        <button className="btn btn-p" onClick={() => nav('ai')}>去 AI 生成 →</button>
      </div>

      {/* 损坏模板提示 */}
      {brokenN > 0 && (
        <div className="card" style={{ marginTop: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', background: '#FFF7E8', borderColor: 'rgba(245,158,11,.4)' }}>
          <span style={{ fontSize: 15 }}>⚠️</span>
          <div style={{ flex: 1, minWidth: 200, fontSize: 13, color: '#92400E' }}>
            有 <b>{brokenN}</b> 个 AI 模板无法打开（已损坏），已从下方列表隐藏。
          </div>
          <button className="btn btn-sm btn-danger" onClick={() => {
            const n = removeAllBrokenOutputs()
            setBrokenN(0)
            if (n > 0) alert(`已删除 ${n} 个损坏模板`)
          }}>一键删除</button>
        </div>
      )}

      {/* 筛选 */}
      <div className="filters" style={{ marginTop: 24 }}>
        <span className="fl">用途</span>
        {cats.map((c) => <button key={c} className={`chip-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        <span className="fl" style={{ marginLeft: 14 }}>风格</span>
        {styles.map((s) => <button key={s} className={`chip-btn ${style === s ? 'active' : ''}`} onClick={() => setStyle(s)}>{s}</button>)}
      </div>

      {/* 模板网格 */}
      <div className="tpl-grid">
        {list.map((t) => (
          <div className="tpl-card" key={t.id} onClick={() => nav(`detail/${t.id}`)}>
            <div className="tpl-cover" style={{ background: t.cover }}>
              <div className="mini" aria-hidden="true">
                <span className="bar"></span><span className="block"></span>
                <span className="block r"></span><span className="row"></span>
              </div>
              <span className="emoji" aria-hidden="true">{t.coverEmoji || '📄'}</span>
              <span className="preview-hint">预览模板 →</span>
            </div>
            <div className="tpl-body">
              <h3>{t.name}</h3>
              <div className="tags">
                <span>{t.category}</span><span>{t.style}</span>
                {t.ai && <span style={{ background: 'rgba(244,114,182,.12)', color: '#DB2777' }}>✨ AI 生成</span>}
              </div>
              <div className="desc">{t.description}</div>
              <div className="acts">
                <button className="btn btn-p btn-sm" onClick={(e) => { e.stopPropagation(); nav(`detail/${t.id}`) }}>预览</button>
                <button className="btn btn-line btn-sm" onClick={(e) => { e.stopPropagation(); download(t) }}>下载</button>
                <button className="btn btn-line btn-sm" onClick={(e) => { e.stopPropagation(); setPreviewId(t.id) }}>快速预览</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="empty-state">
          <div className="ring">🔍</div>
          <h3>没有匹配的模板</h3>
          <p>换个筛选条件试试，或让 AI 直接为你生成</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
            <button className="btn btn-p" onClick={() => { setCat('全部'); setStyle('全部') }}>清除筛选</button>
            <button className="btn btn-line" onClick={() => nav('ai')}>✨ AI 生成</button>
          </div>
        </div>
      )}

      {/* 快速预览弹层 */}
      {previewId && (() => {
        const t = templates.find((x) => x.id === previewId)
        return (
          <div className="modal-mask" onClick={() => setPreviewId(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="mb-head">
                <b>{t.name}</b>
                <div className="acts">
                  <button className="btn btn-p btn-sm" onClick={() => { setPreviewId(null); nav(`detail/${t.id}`) }}>使用此模板</button>
                  <button className="btn btn-line btn-sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }} onClick={() => setPreviewId(null)}>关闭 ✕</button>
                </div>
              </div>
              <PreviewFrame style={{ flex: 1, height: 'auto', border: 'none' }} template={t} data={structuredClone(t.defaults)} title={t.name} />
            </div>
          </div>
        )
      })()}
    </div>
  )
}
