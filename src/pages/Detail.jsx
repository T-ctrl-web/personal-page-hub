import { useState } from 'react'
import { getTemplate, removeCustomOutput, hasCustomOutput } from '../templates/index.js'
import { downloadTemplate } from '../engine/export.js'
import PreviewFrame from '../engine/PreviewFrame.jsx'
import Icon from '../engine/Icon.jsx'

export default function Detail({ routeParam, nav }) {
  const tpl = getTemplate(routeParam)
  const [gone, setGone] = useState(false)
  // 模板存在于库中但打不开（损坏）——给删除入口，避免「打不开也删不掉」的死锁
  const broken = !tpl && !gone && hasCustomOutput(routeParam)

  if (!tpl || gone) {
    return (
      <div className="empty-state">
        <div className="ring"><Icon name="alert" size={40} /></div>
        <h3>{broken ? '此模板已损坏，无法打开' : '模板不存在或已删除'}</h3>
        <p>{broken ? '该 AI 模板数据可能不完整，可以从本地删除。' : '返回模板市场看看其他模板'}</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
          {broken && (
            <button className="btn btn-danger" onClick={() => {
              if (confirm('删除这个损坏的 AI 模板？此操作不可恢复。')) {
                removeCustomOutput(routeParam)
                setGone(true)
              }
            }}><Icon name="trash" size={15} /> 删除此模板</button>
          )}
          <button className="btn btn-p" onClick={() => nav('')}><Icon name="arrowLeft" size={15} /> 返回市场</button>
        </div>
      </div>
    )
  }

  const useIt = () => nav(`edit/new/${tpl.id}`)
  const remove = () => {
    if (confirm(`删除 AI 模板「${tpl.name}」？此操作不可恢复。`)) {
      removeCustomOutput(tpl.id)
      setGone(true)
    }
  }

  return (
    <div className="detail-wrap">
      <PreviewFrame className="preview-frame" template={tpl} data={structuredClone(tpl.defaults)} title={tpl.name} />
      <div className="detail-info">
        <h2>{tpl.name} {tpl.ai && <span className="chip-btn" style={{ background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'default', verticalAlign: 'middle' }}>AI 生成</span>}</h2>
        <div className="tags"><span>{tpl.category}</span><span>{tpl.style}</span>{tpl.ai && <span style={{ background: 'var(--pink-soft)', color: 'var(--pink-fg)' }}>可编辑 · 可下载</span>}</div>
        <p className="desc">{tpl.description}</p>
        <div className="acts">
          <button className="btn btn-p" onClick={useIt}><Icon name="pencil" size={15} /> 使用此模板（编辑）</button>
          <button className="btn btn-line" onClick={() => downloadTemplate(tpl, structuredClone(tpl.defaults), `${tpl.id}.html`)}><Icon name="download" size={15} /> 直接下载</button>
          <button className="btn btn-line" onClick={() => nav('')}><Icon name="arrowLeft" size={15} /> 返回市场</button>
          {tpl.ai && <button className="btn btn-danger" onClick={remove}><Icon name="trash" size={15} /> 删除此模板</button>}
        </div>
        <div className="field-list">
          <b>可编辑内容：</b>
          {tpl.schema.map((g) => g.group).join(' · ')}
        </div>
        <div className="detail-tip">
          <Icon name="bulb" size={15} style={{ verticalAlign: -2, color: 'var(--info-fg)', marginRight: 4 }} />
          <b>使用方法：</b>点击「使用此模板」→ 左侧表单填写你的信息 → 右侧实时预览 → 保存到「我的模板」或一键导出独立 HTML。
        </div>
      </div>
    </div>
  )
}
