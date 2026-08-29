import darkTech from './dark-tech.js'
import lightEditorial from './light-editorial.js'
import minimalSwiss from './minimal-swiss.js'
import bentoGrid from './bento-grid.js'
import darkPremium from './dark-premium.js'
import glassmorphism from './glassmorphism.js'
import softWarm from './soft-warm.js'
import industrialGeek from './industrial-geek.js'
import artExperimental from './art-experimental.js'
import { buildTemplateFromOutput } from '../ai/generate.js'

/** 内置模板库：覆盖 8 大设计风格方向 */
export const TEMPLATES = [
  minimalSwiss,       // 极简瑞士风
  bentoGrid,          // Bento 网格
  lightEditorial,     // 编辑杂志风
  darkPremium,        // 暗色高级感
  glassmorphism,      // 玻璃拟态
  softWarm,           // 柔和暖色
  industrialGeek,     // 工业极客
  artExperimental,    // 艺术实验
  darkTech,           // 深色科技（经典款）
]

export const CATEGORIES = ['全部', ...new Set(TEMPLATES.map((t) => t.category))]
export const STYLES = ['全部', ...new Set(TEMPLATES.map((t) => t.style))]

/** AI 自定义模板（本地存储；存可序列化的 AI 产物，加载时组装为完整模板） */
const CUSTOM_KEY = 'pph-custom-templates'
/** 自定义模板数量上限（防止 localStorage 无限膨胀） */
const CUSTOM_LIMIT = 20

/** 构建结果缓存：getTemplate / loadCustomTemplates 避免重复 new Function 编译 */
const cache = new Map()

export function loadCustomOutputs() {
  try { const v = JSON.parse(localStorage.getItem(CUSTOM_KEY)); return Array.isArray(v) ? v : [] } catch { return [] }
}
export function saveCustomOutput(output) {
  const list = loadCustomOutputs()
  list.unshift({ ...output, id: output.id || 'ai-' + Date.now().toString(36), createdAt: Date.now() })
  const trimmed = list.slice(0, CUSTOM_LIMIT)
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(trimmed))
  } catch {
    throw new Error('本地存储已满，请删除部分模板后重试')
  }
  cache.clear() // 模板库变化，清缓存
}
export function removeCustomOutput(id) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(loadCustomOutputs().filter((x) => x.id !== id)))
  cache.delete(id)
}

/**
 * 判断 AI 产物是否「可用」：构建成功且用默认数据试渲染成功。
 * 构建成功但渲染运行时报错的模板（AI 输出引用未定义字段等）同样视为损坏，
 * 避免市场页显示一个「打不开」的模板。
 */
function isUsable(output) {
  try {
    const t = buildTemplateFromOutput(output)
    t.render(structuredClone(t.defaults || {}))
    return true
  } catch {
    return false
  }
}

/** 从 AI 产物构建模板；失败（构建或渲染）返回 null 并 warn */
function buildOrNull(output) {
  try {
    const t = buildTemplateFromOutput(output)
    t.render(structuredClone(t.defaults || {})) // 渲染预检
    return t
  } catch (e) {
    console.warn(`[PersonalPage Hub] AI 模板 ${output.id || '(未知)'} 不可用：`, e?.message || e)
    return null
  }
}

export function loadCustomTemplates() {
  return loadCustomOutputs()
    .map((o) => {
      if (cache.has(o.id)) return cache.get(o.id)
      const t = buildOrNull(o)
      if (t) cache.set(o.id, t)
      return t
    })
    .filter(Boolean)
}

export function getTemplate(id) {
  if (cache.has(id)) return cache.get(id)
  const built = TEMPLATES.find((t) => t.id === id)
  if (built) { cache.set(id, built); return built }
  const custom = loadCustomOutputs().find((o) => o.id === id)
  if (custom) {
    const t = buildOrNull(custom)
    if (t) cache.set(id, t)
    return t
  }
  return undefined
}

/** 市场页展示用：内置 + 自定义（自定义标注 AI 生成） */
export function allTemplates() {
  return [...TEMPLATES, ...loadCustomTemplates()]
}

/** 损坏（打不开）的 AI 模板数量 */
export function countBrokenOutputs() {
  return loadCustomOutputs().filter((o) => !isUsable(o)).length
}

/** 一键删除所有损坏模板，返回删除数量 */
export function removeAllBrokenOutputs() {
  const list = loadCustomOutputs()
  const kept = list.filter((o) => isUsable(o))
  const removed = list.length - kept.length
  if (removed > 0) {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(kept))
    cache.clear()
  }
  return removed
}

/** 指定 id 是否存在于自定义模板库（即使打不开） */
export function hasCustomOutput(id) {
  return loadCustomOutputs().some((o) => o.id === id)
}
