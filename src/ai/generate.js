/**
 * AI 模板生成器
 * 前端直调 DeepSeek API（用户自备 Key；默认仅存 sessionStorage（关标签即清），
 * 勾选「记住」才写入 localStorage —— 降低凭据泄露面）
 * 产物：可 JSON 序列化的「模板输出」（css / renderBody / fields / lists / defaults…），
 * 加载时用 new Function 组装成完整模板对象（render 函数）。
 */

const API_URL = 'https://api.deepseek.com/chat/completions'
const MODEL = 'deepseek-chat'
const KEY_STORE = 'pph-ds-key'
const KEY_SESSION = 'pph-ds-key-session'

/** 优先取会话级 Key；未勾选记住时 localStorage 不落盘 */
export function getApiKey() {
  return sessionStorage.getItem(KEY_SESSION) || localStorage.getItem(KEY_STORE) || ''
}
export function setApiKey(key, remember = false) {
  const k = key.trim()
  sessionStorage.setItem(KEY_SESSION, k)
  if (remember) localStorage.setItem(KEY_STORE, k)
  else localStorage.removeItem(KEY_STORE)
}

const SYSTEM_PROMPT = `你是顶级 UI/UX 设计师与资深前端工程师。为「个人网页模板工坊」生成一个个人主页模板的 JSON 定义。你的作品必须达到专业设计工作室水准——克制、精致、有设计感，**杜绝平庸与模板感**。

===== 审美标准（不达标即平庸，必须遵守）=====
1. 克制：少即是多。每屏只有一个视觉焦点；元素数量精简；留白充足（宁可空，不要满）；一个页面最多 2 种强调色。
2. 色彩纪律：全站主色 ≤2 个 + 中性灰阶 + 1 个点缀色；大面积中性色 + 小面积强调色制造高级感；禁止彩虹渐变堆砌、禁止大面积高饱和背景色。
3. 排版细节：建立清晰字体层级（标题/副标题/正文/标注 4 级，字号字重逐级递减）；标题用 display 字体（衬线如 Playfair/思源宋体，或几何无衬线如 Poppins/Space Grotesk）；正文 16px 行高 1.6-1.75、行长 60-75 字符；数字/代码用等宽字体。
4. 质感层次：卡片层次用「背景色微妙差异 + 细描边 + 克制的阴影」表达，禁止重阴影；圆角统一成令牌（按钮 8、卡片 12-16、胶囊 999，按风格定）。
5. 动效克制：只做微交互（hover 提亮/位移 2-4px、焦点环）；禁止花哨入场动画堆砌。
6. 布局呼吸感：避免「三张等宽卡片 + 底部大按钮」的死板结构；要有不对称、层次、留白节奏（大标题区 → 紧凑内容区 → 宽松收尾）。

===== 风格方向（选一个作为主方向，贯彻到底）=====
A. 极简瑞士风：纯白/米白背景、超大几何无衬线标题、网格对齐、极致留白、黑+单一点缀色 —— 设计师/咨询顾问/高端个人品牌
B. Bento 网格：模块化圆角卡片拼接、功能分区清晰、微渐变底色 —— 开发者/产品经理/数据从业者
C. 编辑杂志风：衬线大标题 + 无衬线正文、图文错落、章节编号、编辑感 —— 作家/记者/内容创作者/学术
D. 暗色高级感：近黑背景 + 单一霓虹或金属金强调、发光克制、大图氛围 —— 科技/游戏/酷感个人品牌
E. 玻璃拟态：半透明磨砂卡片 + 背景光斑 + 1px 细边框 + 克制模糊 —— AI/前沿科技/未来感
F. 柔和暖色：低饱和奶油/陶土/鼠尾草色系 + 大圆角 + 温和阴影 —— 生活方式/咖啡/独立品牌/心理
G. 工业极客：等宽字体、终端/代码元素、硬边、功能面板感 —— 程序员/极客/硬件
H. 艺术实验：大色块、非对称、大号趣味排版、留白大胆 —— 艺术家/插画师/音乐人

===== 反平庸清单（禁止）=====
- 禁止「居中标题+三张等宽卡片+底部大按钮」的默认模板结构
- 禁止元素堆砌（logo 墙、标签云、图标全家桶、所有区块塞满）
- 禁止灰蒙蒙低对比、禁止全站一个色
- 禁止花哨渐变/发光滥用、禁止大面积高饱和
- 禁止 emoji 当主要内容（最多 1-2 个点缀）
- 禁止死板线性布局（要有层次与呼吸感）

===== 输出格式 =====
必须严格输出一个 JSON 对象（不要 Markdown 围栏、不要任何解释文字）：
{
  "name": "模板名（中文，10字内）",
  "tagline": "一句话副标题（10字内）",
  "category": "求职或作品集或博客或名片",
  "style": "风格名（如：极简瑞士、编辑杂志、暗色高级）",
  "description": "模板描述（40-80字，说明适合什么人）",
  "cover": "CSS background 值（供市场卡片封面用）",
  "coverEmoji": "单个 emoji",
  "css": "完整 CSS 字符串（必须包含全部样式，不得省略）。要求：1) :root 定义设计令牌（--bg/--fg/--primary/--card/--border/--radius/--space/--font 等，样式内禁止裸色值）2) 响应式 @media(max-width:900px) 与 (max-width:560px) 3) 正文16px、行高1.6-1.75 4) 遵循上述审美标准与所选风格方向 5) @media(prefers-reduced-motion:reduce) 关闭动画 6) 颜色对比度≥4.5:1",
  "renderBody": "一个 JS 函数体字符串，必须严格以 return 开头（不要写 function 关键字、不要箭头函数、不要大括号包裹，形如：return \`<!DOCTYPE html>...\`）。要求：1) 直接 return 完整 HTML 文档模板字符串 2) 用户数据一律通过 \${esc(d.xxx)} 插入并转义（d 为数据对象，esc 已提供）3) 数组字段用 (d.xxx || []).map(item => \`...\`).join('') 循环 4) 必须包含：导航、Hero（姓名+定位+简介+行动按钮）、关于、技能、项目、联系、页脚；板块根据用户需求增减 5) 内联 <script> 做导航高亮等轻交互，禁止外部库/图片外链 6) 装饰用 emoji 或纯 CSS，且遵循反平庸清单 7) HTML 中反引号字符请转义 8) 访问 d 的任何字段必须空值兜底：数组 (d.xxx || [])、字符串 d.xxx ?? ''、对象 (d.xxx || {})，禁止直接访问可能 undefined 的字段",
  "fields": [ { "key": "name", "label": "姓名", "type": "text" }, { "key": "role", "label": "一句话定位", "type": "text" }, { "key": "about", "label": "关于我", "type": "textarea" }, { "key": "skills", "label": "技能标签", "type": "tags" } ],
  "lists": [ { "key": "projects", "itemLabel": "项目", "fields": [ { "key": "title", "label": "标题", "type": "text" }, { "key": "desc", "label": "描述", "type": "textarea" }, { "key": "stack", "label": "技术栈", "type": "tags" } ] } ],
  "defaults": { "name": "...", "role": "...", "about": "...", "skills": ["..."], "projects": [ { "title": "...", "desc": "...", "stack": ["..."] } ] }
}

硬性要求：
- renderBody 示例文案用中文，且要写得像真实用户（真实感、有细节），禁止「请输入…」「你的名字」这类占位感文案
- fields/lists 里的每个 key 都必须在 renderBody 中被使用
- css 与 renderBody 组合必须是一份完整可渲染的精致网页
- 只输出 JSON，不要输出解释文字`

export function buildUserPrompt({ career, style, sections, name, email }) {
  return `请为一个【${career || '个人'}】的个人主页生成模板。
风格偏好：${style || '自动（根据职业选择最合适的风格）'}。
需要包含的板块：${sections.length ? sections.join('、') : '全部常用板块'}。
姓名示例：${name || '张三'}。
邮箱示例：${email || 'zhangsan@example.com'}。
请开始生成。`
}

/** 调 DeepSeek API 获取 JSON 文本 */
export async function callDeepSeek(apiKey, userPrompt) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      max_tokens: 8000,
      temperature: 0.8,
      stream: false,
    }),
  })
  if (!res.ok) {
    let detail = `HTTP ${res.status}`
    try { const j = await res.json(); detail = j?.error?.message || detail } catch { /* ignore */ }
    if (res.status === 401) throw new Error('API Key 无效（401），请检查后重试')
    if (res.status === 429) throw new Error('请求过于频繁或额度不足（429）：' + detail)
    throw new Error(`DeepSeek API 错误（${detail}）`)
  }
  const j = await res.json()
  const text = j?.choices?.[0]?.message?.content
  if (!text) throw new Error('API 返回为空，请重试')
  return text
}

/** 清洗 AI 输出中的 Markdown 围栏，提取 JSON */
export function extractJson(text) {
  let t = text.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fence) t = fence[1].trim()
  const start = t.indexOf('{')
  const end = t.lastIndexOf('}')
  if (start >= 0 && end > start) t = t.slice(start, end + 1)
  return JSON.parse(t)
}

/** 组装完整的模板对象（render 用 new Function 构造） */
export function buildTemplateFromOutput(o) {
  if (!o || typeof o !== 'object') throw new Error('AI 输出结构无效')
  if (!o.css || !o.renderBody) throw new Error('AI 输出缺少 css 或 renderBody，请重试')
  const fields = Array.isArray(o.fields) ? o.fields : []
  const lists = Array.isArray(o.lists) ? o.lists : []
  const schema = []
  if (fields.length) schema.push({ group: '我的信息', fields: fields.map((f) => ({ key: f.key, label: f.label || f.key, type: f.type || 'text' })) })
  lists.forEach((l) => {
    if (l && l.key && Array.isArray(l.fields)) {
      schema.push({ group: (l.itemLabel || l.key) + '列表', list: { key: l.key, itemLabel: l.itemLabel || '条目', fields: l.fields.map((f) => ({ key: f.key, label: f.label || f.key, type: f.type || 'text' })) } })
    }
  })
  // 沙箱（收紧版）：AI 代码可用变量仅 d/esc/css；危险全局一律拦截抛错，
  // 无原型 target 阻断 this.constructor 逃逸链；真实安全全局（Date/Math/JSON…）放行。
  const DANGER = new Set([
    'Object', 'Function', 'globalThis', 'constructor', 'eval', 'window', 'document',
    'localStorage', 'sessionStorage', 'fetch', 'XMLHttpRequest', 'WebSocket',
    'require', 'process', 'navigator', 'location', 'alert', 'open',
  ])
  const sandboxTarget = Object.create(null)
  // esc/css 也用 Proxy 拦截原型链（esc.constructor → Function、css.constructor → String.constructor → Function）
  const safeGet = (t, k) => {
    if (k === 'constructor' || k === '__proto__' || k === 'prototype') return undefined
    if (k === 'toString' || k === 'valueOf') {
      const fn = t[k]
      return typeof fn === 'function' ? fn.bind(t) : fn // 绑定真实对象，避免 String.prototype.toString this 报错
    }
    return Reflect.get(t, k)
  }
  sandboxTarget.esc = new Proxy(
    (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
    { get: safeGet }
  )
  sandboxTarget.css = new Proxy(new String(o.css || ''), { get: safeGet })
  const sandbox = new Proxy(sandboxTarget, {
    // d 是函数参数（优先于 with）不劫持；沙箱已有键（esc/css）劫持；
    // 危险全局 → 劫持并在 get 抛错；安全全局（Date/Math/JSON…）放行；未定义变量 → 兜底空
    has: (t, k) => {
      if (k === 'd') return false
      if (k in t) return true
      if (typeof k === 'string' && DANGER.has(k)) return true
      if (typeof k === 'string' && k in globalThis) return false
      return true
    },
    get: (t, k) => {
      if (typeof k === 'symbol') return undefined
      if (k in t) return t[k]
      if (typeof k === 'string' && DANGER.has(k)) {
        throw new Error('AI 模板代码使用了被禁止的全局对象：' + k)
      }
      return ''
    },
    set: () => true,
  })
  let render
  try {
    // renderBody 以 return 开头（AI 提示词要求）；为兼容偶发缺失 return 的情况做兜底
    const body = String(o.renderBody).trim()
    const code = /^return\b/.test(body) ? body : 'return ' + body
    // 仅 d 作参数；esc/css 从沙箱取；危险全局抛错；其余自由变量经 with+Proxy 兜底为空
    const rawRender = new Function('d', 'with(this){' + code + '}').bind(sandbox)
    // B-1 缓解：数据入口也用 Proxy 拦截原型链逃逸（d.constructor.constructor → Function）
    render = (data) => {
      const dataProxy = new Proxy(data ?? {}, {
        get: (t, k) => (k === 'constructor' || k === '__proto__' || k === 'prototype' ? undefined : t[k]),
        set: () => true,
      })
      return rawRender(dataProxy)
    }
  } catch (e) {
    throw new Error('AI 生成的渲染代码无法解析：' + e.message + '（请重试或更换提示词）')
  }
  // H-1：id 唯一且写回 output，保证保存/切页恢复/编辑用同一个 id
  const id = o.id || ('ai-' + Date.now().toString(36))
  if (typeof o.id !== 'string' || !o.id) o.id = id
  return {
    id,
    name: o.name || 'AI 自定义模板',
    tagline: o.tagline || '',
    category: o.category || '作品集',
    style: o.style || '自定义',
    description: o.description || '由 AI 生成的个性化模板。',
    cover: o.cover || 'linear-gradient(135deg,#6D5BFF,#8B5DEF)',
    coverEmoji: o.coverEmoji || '✨',
    schema,
    defaults: (o.defaults && typeof o.defaults === 'object') ? o.defaults : {},
    render,
    css: o.css,
    renderBody: o.renderBody, // 沙箱渲染用（AI 代码只在隔离 iframe 内执行）
    ai: true,
  }
}
