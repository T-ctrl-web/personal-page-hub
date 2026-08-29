/**
 * 本地存储：我的模板（localStorage）
 * 条目：{ id, name, templateId, data, updatedAt }
 * 未来升级：IndexedDB 存大型模板库 / 作品
 */
const KEY = 'pph-my-templates'

export function loadMine() {
  try { const v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : [] } catch { return [] }
}
export function saveMine(list) {
  localStorage.setItem(KEY, JSON.stringify(list))
}
export function upsertMine(entry) {
  const list = loadMine()
  const idx = entry.id ? list.findIndex((x) => x.id === entry.id) : -1
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...entry, updatedAt: Date.now() }
  } else {
    entry.id = entry.id || 'm' + Date.now().toString(36)
    entry.updatedAt = Date.now()
    list.unshift(entry)
  }
  saveMine(list)
  return entry
}
export function removeMine(id) {
  saveMine(loadMine().filter((x) => x.id !== id))
}
export function getMine(id) {
  return loadMine().find((x) => x.id === id)
}
