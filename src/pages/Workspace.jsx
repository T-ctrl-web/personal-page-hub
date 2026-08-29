import { useState } from 'react'
import { loadMine, removeMine } from '../store.js'
import { getTemplate } from '../templates/index.js'
import { downloadTemplate, downloadJson } from '../engine/export.js'

function fmt(ts) {
  const d = new Date(ts)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function Workspace({ nav }) {
  const [mine, setMine] = useState(loadMine)
  const [msg, setMsg] = useState('')

  const refresh = () => setMine(loadMine())
  const notify = (m) => { setMsg(m); setTimeout(() => setMsg(''), 2500) }

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result)
        const list = Array.isArray(data) ? data : [data]
        let added = 0
        list.forEach((it) => {
          if (it && it.templateId && it.data && getTemplate(it.templateId)) {
            const cur = loadMine()
            if (!cur.find((x) => x.name === it.name && x.templateId === it.templateId)) {
              const all = loadMine()
              all.unshift({ id: 'm' + Date.now().toString(36) + added, name: it.name, templateId: it.templateId, data: it.data, updatedAt: Date.now() })
              localStorage.setItem('pph-my-templates', JSON.stringify(all))
              added++
            }
          }
        })
        refresh()
        notify(added ? `成功导入 ${added} 个模板` : '没有可导入的模板（格式或模板不匹配）')
      } catch { notify('导入失败：JSON 格式错误') }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div>
      <div className="page-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1>我的模板</h1>
          <p>已编辑并保存的模板，保存在本浏览器中（localStorage）。可导出 HTML / JSON 备份。</p>
        </div>
        <label className="btn btn-line">
          ⬆ 导入 JSON
          <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
        </label>
      </div>
      {msg && <div style={{ color: '#10B981', marginBottom: 12, fontSize: 14 }}>{msg}</div>}
      {mine.length === 0 ? (
        <div className="empty-state">
          <div className="ring">🗂️</div>
          <h3>还没有保存的模板</h3>
          <p>去模板市场挑一个，开始你的第一个个人主页</p>
          <button className="btn btn-p" onClick={() => nav('')}>去模板市场</button>
        </div>
      ) : (
        <div className="mine-grid">
          {mine.map((m) => {
            const tpl = getTemplate(m.templateId)
            return (
              <div className="card mine-card" key={m.id}>
                <h3>{m.name}</h3>
                <div className="meta">模板：{tpl ? tpl.name : '（已下线）'} · {fmt(m.updatedAt)}</div>
                <div className="acts">
                  <button className="btn btn-p btn-sm" onClick={() => nav(`edit/${m.id}`)}>编辑</button>
                  {tpl && <button className="btn btn-line btn-sm" onClick={() => downloadTemplate(tpl, m.data, `${m.name}.html`)}>下载 HTML</button>}
                  {tpl && <button className="btn btn-line btn-sm" onClick={() => downloadJson({ name: m.name, templateId: m.templateId, data: m.data }, `${m.name}.json`)}>导出 JSON</button>}
                  <button className="btn btn-danger btn-sm" onClick={() => { if (confirm(`删除「${m.name}」？`)) { removeMine(m.id); refresh() } }}>删除</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
