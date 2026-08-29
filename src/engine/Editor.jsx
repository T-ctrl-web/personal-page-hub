import { esc } from './export.js'

/** 本地图片 → 压缩 base64 data URI（保持单文件离线完整；尺寸上限约 1280px、质量 .82） */
function fileToDataUrl(file, maxDim = 1280, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('读取图片失败'))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('图片格式不受支持'))
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height))
        const w = Math.round(img.width * scale)
        const h = Math.round(img.height * scale)
        const canvas = document.createElement('canvas')
        canvas.width = w; canvas.height = h
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

/**
 * schema 驱动的通用表单编辑器
 * schema: [ { group, fields: [ {key,label,type} ], list?: { key, itemLabel, fields } } ]
 * 字段类型：text / textarea / tags（逗号分隔）/ image（URL 输入 + 本地上传→base64）
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
  const setImage = async (path, file) => {
    if (!file) return
    try {
      const url = await fileToDataUrl(file)
      set(path, url)
    } catch (e) {
      alert(e.message)
    }
  }

  const ImageField = ({ f, val, path }) => (
    <div className="ed-image">
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="text" value={val} placeholder="图片 URL（https://…）" onChange={(e) => set(path, e.target.value)} aria-label={`${f.label} URL`} />
        <label className="btn btn-line btn-sm" style={{ flexShrink: 0 }}>
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => { setImage(path, e.target.files?.[0]); e.target.value = '' }} />
          上传
        </label>
        {val && <button className="btn btn-line btn-sm" style={{ flexShrink: 0 }} onClick={() => set(path, '')} aria-label="清除图片">✕</button>}
      </div>
      {val && <img className="ed-image-preview" src={val} alt={`${f.label}预览`} />}
    </div>
  )

  const field = (f, val, path, inList = false) => {
    if (f.type === 'textarea') {
      return <textarea value={val} onChange={(e) => set(path, e.target.value)} />
    }
    if (f.type === 'tags') {
      return <input type="text" value={Array.isArray(val) ? val.join(', ') : val}
        onChange={(e) => set(path, e.target.value.split(',').map((s) => s.trim()).filter(Boolean))} />
    }
    if (f.type === 'image') {
      return <ImageField f={f} val={val} path={path} />
    }
    return <input type="text" value={val} onChange={(e) => set(path, e.target.value)} />
  }

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
                {field(f, val, f.key)}
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
                        {f.type === 'image'
                          ? <ImageField f={f} val={item[f.key] ?? ''} path={[L.key, idx, f.key]} />
                          : field(f, item[f.key] ?? '', [L.key, idx, f.key], true)}
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
