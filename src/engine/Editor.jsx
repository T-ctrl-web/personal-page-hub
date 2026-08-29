import { esc } from './export.js'

/**
 * schema 驱动的通用表单编辑器
 * schema: [ { group, fields: [ {key,label,type} ], list?: { key, itemLabel, fields } } ]
 * 字段类型：text / textarea / tags（逗号分隔）
 */
export default function Editor({ schema, data, onChange }) {
  const set = (path, value) => {
    const next = structuredClone(data)
    const keys = Array.isArray(path) ? path : [path]
    let o = next
    // M-6：下钻缺失层初始化为 {}，防止深层路径越界抛错
    for (let i = 0; i < keys.length - 1; i++) {
      if (o[keys[i]] == null || typeof o[keys[i]] !== 'object') o[keys[i]] = {}
      o = o[keys[i]]
    }
    o[keys[keys.length - 1]] = value
    onChange(next)
  }
  const setList = (key, list) => set(key, list)

  return (
    <div>
      {schema.map((group, gi) => (
        <div className="ed-group" key={gi}>
          <div className="ed-group-title">{group.group}</div>
          {group.fields?.map((f) => {
            const val = data[f.key] ?? ''
            return (
              <div className="ed-field" key={f.key}>
                <label>{f.label}{f.hint ? `（${f.hint}）` : ''}</label>
                {f.type === 'textarea' ? (
                  <textarea value={val} onChange={(e) => set(f.key, e.target.value)} />
                ) : f.type === 'tags' ? (
                  <input type="text" value={Array.isArray(val) ? val.join(', ') : val}
                    onChange={(e) => set(f.key, e.target.value.split(',').map((s) => s.trim()).filter(Boolean))} />
                ) : (
                  <input type="text" value={val} onChange={(e) => set(f.key, e.target.value)} />
                )}
              </div>
            )
          })}
          {group.list && (() => {
            const L = group.list
            const list = Array.isArray(data[L.key]) ? data[L.key] : []
            const update = (idx, key, value) => {
              const copy = [...list]
              copy[idx] = { ...copy[idx], [key]: value }
              setList(L.key, copy)
            }
            const remove = (idx) => setList(L.key, list.filter((_, i) => i !== idx))
            const add = () => {
              const item = {}
              L.fields.forEach((f) => { item[f.key] = f.type === 'tags' ? [] : '' })
              setList(L.key, [...list, item])
            }
            return (
              <div className="ed-list">
                {list.map((item, idx) => (
                  <div className="ed-list-item" key={idx}>
                    <button className="del" onClick={() => remove(idx)}>删除</button>
                    {L.fields.map((f) => (
                      <div className="ed-field" key={f.key}>
                        <label>{f.label}</label>
                        {f.type === 'textarea' ? (
                          <textarea value={item[f.key] ?? ''} onChange={(e) => update(idx, f.key, e.target.value)} />
                        ) : f.type === 'tags' ? (
                          <input type="text" value={(item[f.key] || []).join(', ')}
                            onChange={(e) => update(idx, f.key, e.target.value.split(',').map((s) => s.trim()).filter(Boolean))} />
                        ) : (
                          <input type="text" value={item[f.key] ?? ''} onChange={(e) => update(idx, f.key, e.target.value)} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                <button className="ed-add" onClick={add}>＋ 添加{L.itemLabel || '条目'}</button>
              </div>
            )
          })()}
        </div>
      ))}
    </div>
  )
}
