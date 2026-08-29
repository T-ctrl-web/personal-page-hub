import { useEffect, useMemo, useRef, useState } from 'react'
import { allTemplates, countBrokenOutputs, removeAllBrokenOutputs } from '../templates/index.js'
import { downloadTemplate } from '../engine/export.js'
import PreviewFrame from '../engine/PreviewFrame.jsx'
import Icon from '../engine/Icon.jsx'
import { loadFavorites, toggleFavorite } from '../store.js'

export default function Market({ nav }) {
  const [cat, setCat] = useState('全部')
  const [style, setStyle] = useState('全部')
  const [query, setQuery] = useState('')
  const [onlyFav, setOnlyFav] = useState(false)
  const [favs, setFavs] = useState(loadFavorites)
  const [previewId, setPreviewId] = useState(null)
  const [brokenN, setBrokenN] = useState(countBrokenOutputs)
  const modalRef = useRef(null)

  // 弹层 ESC 关闭 + 焦点移入
  useEffect(() => {
    if (!previewId) return
    const onKey = (e) => { if (e.key === 'Escape') setPreviewId(null) }
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => modalRef.current?.focus(), 30)
    return () => { window.removeEventListener('keydown', onKey); clearTimeout(t) }
  }, [previewId])

  const templates = allTemplates()
  const cats = ['全部', ...new Set(templates.map((t) => t.category))]
  const styles = ['全部', ...new Set(templates.map((t) => t.style))]

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return templates
      .filter((t) =>
        (cat === '全部' || t.category === cat) &&
        (style === '全部' || t.style === style) &&
        (!onlyFav || favs.includes(t.id)) &&
        (q === '' || `${t.name} ${t.description} ${t.style} ${t.tagline || ''}`.toLowerCase().includes(q))
      )
      .sort((a, b) => (favs.includes(b.id) ? 1 : 0) - (favs.includes(a.id) ? 1 : 0))
  }, [templates, cat, style, query, onlyFav, favs])

  const download = (t) => { downloadTemplate(t, structuredClone(t.defaults), `${t.id}.html`) }
  const onToggleFav = (e, id) => { e.stopPropagation(); setFavs(toggleFavorite(id)) }
  const openDetail = (id) => nav(`detail/${id}`)

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
            <div className="hs"><b>{favs.length > 0 ? favs.length : '—'}</b><span>已收藏</span></div>
            <div className="hs"><b>{styles.length - 1}</b><span>视觉风格</span></div>
            <div className="hs"><b>AI</b><span>专属定制</span></div>
          </div>
        </div>
      </div>

      {/* AI 生成入口 */}
      <div className="card" style={{ marginTop: 24, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', background: 'var(--info-soft)', borderColor: 'var(--primary-border-soft)' }}>
        <Icon name="sparkles" size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 240 }}>
          <b style={{ fontSize: 15 }}>没有合适的？让 AI 为你生成一个专属模板</b>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>描述你的职业与风格，AI 生成全新模板，自动出现在市场里（标注 AI 生成）</div>
        </div>
        <button className="btn btn-p" onClick={() => nav('ai')}>去 AI 生成</button>
      </div>

      {/* 损坏模板提示 */}
      {brokenN > 0 && (
        <div className="card" style={{ marginTop: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', background: 'var(--warn-soft)', borderColor: 'var(--warn-border)' }}>
          <Icon name="alert" size={18} style={{ color: 'var(--warn)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 200, fontSize: 13, color: 'var(--warn-fg)' }}>
            有 <b>{brokenN}</b> 个 AI 模板无法打开（已损坏），已从下方列表隐藏。
          </div>
          <button className="btn btn-sm btn-danger" onClick={() => { const n = removeAllBrokenOutputs(); setBrokenN(0); if (n > 0) alert(`已删除 ${n} 个损坏模板`) }}>一键删除</button>
        </div>
      )}

      {/* 搜索 + 筛选 */}
      <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 220, position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Icon name="search" size={16} style={{ color: 'var(--muted)', position: 'absolute', left: 14, pointerEvents: 'none' }} />
          <input
            type="search"
            placeholder="搜索模板（名称 / 风格 / 描述）…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="搜索模板"
            style={{ width: '100%', padding: '10px 16px 10px 40px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--card)', fontSize: 14, outline: 'none' }}
          />
        </div>
        <button className={`chip-btn ${onlyFav ? 'active' : ''}`} onClick={() => setOnlyFav(!onlyFav)}>
          <Icon name="star" size={14} style={{ verticalAlign: -2 }} /> 只看收藏（{favs.length}）
        </button>
      </div>
      <div className="filters" style={{ marginTop: 12 }}>
        <span className="fl">用途</span>
        {cats.map((c) => <button key={c} className={`chip-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        <span className="fl" style={{ marginLeft: 14 }}>风格</span>
        {styles.map((s) => <button key={s} className={`chip-btn ${style === s ? 'active' : ''}`} onClick={() => setStyle(s)}>{s}</button>)}
      </div>

      {/* 模板网格 */}
      <div className="tpl-grid">
        {list.map((t) => (
          <div
            className="tpl-card"
            key={t.id}
            role="button"
            tabIndex={0}
            aria-label={`查看模板：${t.name}`}
            onClick={() => openDetail(t.id)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(t.id) } }}
          >
            <div className="tpl-cover">
              <div className="cover-thumb" aria-hidden="true">
                <PreviewFrame className="thumb-frame" template={t} data={structuredClone(t.defaults)} title={t.name} />
              </div>
              <button
                className={`fav-btn ${favs.includes(t.id) ? 'on' : ''}`}
                aria-label={favs.includes(t.id) ? '取消收藏' : '收藏此模板'}
                aria-pressed={favs.includes(t.id)}
                onClick={(e) => onToggleFav(e, t.id)}
              >
                <Icon name="star" size={16} fill={favs.includes(t.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="tpl-body">
              <h3>{t.name}</h3>
              <div className="tags">
                <span>{t.category}</span><span>{t.style}</span>
                {t.ai && <span style={{ background: 'var(--pink-soft)', color: 'var(--pink-fg)' }}>AI 生成</span>}
              </div>
              <div className="desc">{t.description}</div>
              <div className="acts">
                <button className="btn btn-line btn-sm" onClick={(e) => { e.stopPropagation(); setPreviewId(t.id) }}>
                  <Icon name="eye" size={14} /> 快速预览
                </button>
                <button className="btn btn-line btn-sm" onClick={(e) => { e.stopPropagation(); download(t) }}>
                  <Icon name="download" size={14} /> 下载
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="empty-state">
          <div className="ring"><Icon name={query || onlyFav ? 'search' : 'grid'} size={40} /></div>
          <h3>{query || onlyFav ? '没有匹配的模板' : '模板库是空的'}</h3>
          <p>{onlyFav ? '还没有收藏任何模板，点击卡片右上角星标即可收藏。' : '换个筛选条件试试，或让 AI 直接为你生成'}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
            <button className="btn btn-p" onClick={() => { setCat('全部'); setStyle('全部'); setQuery(''); setOnlyFav(false) }}>清除筛选</button>
            {!onlyFav && <button className="btn btn-line" onClick={() => nav('ai')}>AI 生成</button>}
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
                  <button className="btn btn-line btn-sm" style={{ color: '#fff', borderColor: 'var(--on-dark-border)' }} onClick={() => setPreviewId(null)} ref={modalRef} tabIndex={-1} aria-label="关闭预览"><Icon name="close" size={14} /></button>                </div>
              </div>
              <PreviewFrame style={{ flex: 1, height: 'auto', border: 'none' }} template={t} data={structuredClone(t.defaults)} title={t.name} />
            </div>
          </div>
        )
      })()}
    </div>
  )
}
