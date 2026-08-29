import { useMemo, useState } from 'react'
import Editor from '../engine/Editor.jsx'
import { downloadTemplate } from '../engine/export.js'
import PreviewFrame from '../engine/PreviewFrame.jsx'
import { getTemplate } from '../templates/index.js'
import { upsertMine, getMine } from '../store.js'
import Icon from '../engine/Icon.jsx'

/**
 * 编辑页：URL 路由 edit/new/<templateId> 新建；edit/<mineId> 编辑已保存的
 */
export default function Edit({ param, nav }) {
  const isNew = param.startsWith('new/')
  const key = isNew ? param.slice(4) : param

  const tpl = useMemo(() => getTemplate(key), [key])
  const existing = useMemo(() => (isNew ? null : getMine(key)), [isNew, key])

  const [data, setData] = useState(() => structuredClone(existing?.data || tpl?.defaults || {}))
  const [name, setName] = useState(existing?.name || (tpl ? `${tpl.name} · 我的版本` : ''))
  const [saved, setSaved] = useState(false)

  if (!tpl) return <div className="empty-state"><div className="ring"><Icon name="alert" size={40} /></div>模板不存在</div>

  const handleSave = () => {
    if (!name.trim()) { alert('请填写模板名称'); return }
    const entry = upsertMine({ id: existing?.id, name: name.trim(), templateId: tpl.id, data })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    nav(`edit/${entry.id}`)
  }

  return (
    <div>
      <div className="page-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <h1>{isNew ? `使用模板：${tpl.name}` : '编辑模板'}</h1>
          <p>左侧表单修改内容，右侧实时预览；保存到「我的模板」或导出独立 HTML。</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="模板名称" style={{ minWidth: 200, padding: '9px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: 14, background: 'var(--card)' }} />
          <button className="btn btn-p" onClick={handleSave}>{saved ? <><Icon name="check" size={15} /> 已保存</> : <><Icon name="save" size={15} /> 保存到我的模板</>}</button>
          <button className="btn btn-line" onClick={() => downloadTemplate(tpl, data, `${name.trim() || tpl.id}.html`)}><Icon name="download" size={15} /> 导出 HTML</button>
          <button className="btn btn-line" onClick={() => nav(isNew ? `detail/${tpl.id}` : 'workspace')}><Icon name="arrowLeft" size={15} /> 返回</button>
        </div>
      </div>
      <div className="edit-wrap">
        <div className="card edit-panel">
          <Editor schema={tpl.schema} data={data} onChange={setData} />
        </div>
        <div className="edit-preview">
          <PreviewFrame className="preview-frame small" template={tpl} data={data} />
        </div>
      </div>
    </div>
  )
}
