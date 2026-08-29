/**
 * 模板 04：玻璃拟态 · 个人主页
 * 深色渐变光斑之上悬浮半透明磨砂玻璃卡片：半透明白 + 背景模糊 + 细描边 + 柔和阴影。
 * 柔和紫/青/粉光晕营造轻盈的未来感，光斑低饱和、不抢文字。适合 AI 研究者、独立开发者、科技创业者。
 */
import { esc } from '../engine/export.js'

const ICON = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="10.7" y1="6.4" x2="6.3" y2="17.3"/><line x1="13.3" y1="6.4" x2="17.7" y2="17.3"/><line x1="7" y1="19" x2="17" y2="19"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
}

export default {
  id: 'glassmorphism',
  name: '玻璃拟态 · AI 前沿风',
  tagline: '磨砂玻璃卡片 + 渐变光晕的未来感主页',
  category: '作品集',
  style: '玻璃拟态',
  description: '深色渐变光斑之上的半透明磨砂玻璃卡片，柔和紫青粉光晕与背景模糊营造轻盈的未来感。适合 AI 研究者、独立开发者与科技创业者展示研究、项目与经历。',
  cover: 'linear-gradient(135deg,#0B0E1A 0%,#141A33 48%,#2A1F4A 100%)',
  coverEmoji: '💎',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'mark', label: 'Logo 字母', hint: '导航左上角渐变方块内字母' },
        { key: 'badge', label: '状态徽章', hint: '如：开放合作 · 现居上海' },
        { key: 'role', label: '一句话定位' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技能标签', type: 'tags' },
      ],
    },
    {
      group: '关于与历程',
      fields: [{ key: 'aboutTitle', label: '关于 · 引语' }],
      list: {
        key: 'about',
        itemLabel: '段落',
        fields: [{ key: 'text', label: '段落内容', type: 'textarea' }],
      },
    },
    {
      group: '时间线（经历）',
      list: {
        key: 'timeline',
        itemLabel: '条目',
        fields: [
          { key: 'when', label: '时间' },
          { key: 'title', label: '标题' },
          { key: 'desc', label: '说明', type: 'textarea' },
        ],
      },
    },
    {
      group: '统计数字',
      list: {
        key: 'stats',
        itemLabel: '统计',
        fields: [
          { key: 'num', label: '数字' },
          { key: 'lbl', label: '说明' },
        ],
      },
    },
    {
      group: '研究重点（卡片网格）',
      list: {
        key: 'skills',
        itemLabel: '卡片',
        fields: [
          { key: 'title', label: '标题' },
          { key: 'desc', label: '描述' },
        ],
      },
    },
    {
      group: '项目经历',
      list: {
        key: 'projects',
        itemLabel: '项目',
        fields: [
          { key: 'title', label: '项目名称' },
          { key: 'year', label: '时间 / 标签' },
          { key: 'desc', label: '描述', type: 'textarea' },
          { key: 'stack', label: '技术栈', type: 'tags' },
        ],
      },
    },
    {
      group: '联系方式',
      fields: [
        { key: 'contactTitle', label: '联系标题' },
        { key: 'contactSub', label: '联系副文案' },
        { key: 'email', label: '邮箱' },
        { key: 'github', label: 'GitHub' },
        { key: 'footer', label: '页脚版权行' },
      ],
    },
  ],

  defaults: {
    name: '顾砚舟',
    mark: 'G',
    badge: '开放合作 · 现居上海',
    role: '独立 AI 开发者 · 大模型应用研究员',
    desc: '我在大语言模型的应用层工作：把模型能力翻译成真实可用的产品。做过企业级 RAG 检索系统、多智能体协作框架，也做过面向创作者的 AI 写作工具。相信技术最终要落到具体的人身上。',
    chips: ['LLM 应用', '智能体 Agent', 'RAG', 'Python', 'PyTorch', '多模态'],
    aboutTitle: '让模型真正「用起来」，而不是停在 Demo 里。',
    about: [
      { text: '我的工作集中在大模型的应用层：检索增强生成、智能体编排、模型微调与评估。相比炫酷的演示，我更在意系统上线后是否稳定、成本是否可控、用户是否真的在用。' },
      { text: '曾任头部大模型公司的算法工程师，参与企业级 RAG 平台与客服智能体的落地；2024 年起独立开发，专注把开源模型做成小而美的产品。' },
      { text: '业余维护技术博客与开源仓库，写模型应用的方法论，也记录踩坑。相信开放与分享，会让这个行业走得更远。' },
    ],
    timeline: [
      { when: '2024 — 至今', title: '独立开发 · AI 应用', desc: '全职独立开发：知识问答平台与智能体框架，兼顾技术咨询与开源共建。' },
      { when: '2021 — 2024', title: '某大模型公司 · 高级算法工程师', desc: '负责企业级 RAG 平台与客服智能体的算法设计、工程落地与线上优化。' },
      { when: '2019 — 2021', title: '某互联网公司 · 算法工程师', desc: '做搜索排序与推荐系统，积累大规模工程与性能优化的基本功。' },
      { when: '2019', title: '硕士 · 计算机科学与技术', desc: '研究方向：信息检索与自然语言处理。' },
    ],
    stats: [
      { num: '6', lbl: '年 AI 工程经验' },
      { num: '20+', lbl: '上线产品与项目' },
      { num: '3.2k', lbl: '开源项目 Star' },
      { num: '50+', lbl: '技术文章' },
    ],
    skills: [
      { title: '检索增强 RAG', desc: '文档召回、重排与引用溯源，让模型基于事实作答，回答可验证。' },
      { title: '智能体编排', desc: '多 Agent 协作、工具调用与任务规划，把复杂流程真正跑起来。' },
      { title: '模型微调与评估', desc: '指令微调、对齐与自动化评测，让模型更贴合真实业务场景。' },
      { title: 'AI 产品工程', desc: '从原型到上线：推理优化、成本控制与用户体验，缺一不可。' },
    ],
    projects: [
      { title: '墨问 · 企业知识问答平台', year: '2024 — 至今', desc: '面向企业的 RAG 问答平台：混合检索 + 引用溯源 + 权限隔离，已服务 40+ 客户，线上答案准确率 92%。', stack: ['RAG', 'LlamaIndex', 'FastAPI', 'PostgreSQL'] },
      { title: 'AgentForge 智能体框架', year: '2024', desc: '开源的多智能体协作框架，支持工具注册、任务编排与断点续跑；GitHub 3.2k Star，被 12 个团队用于生产。', stack: ['Python', 'LangGraph', 'OpenAI SDK'] },
      { title: '流光写作 · AI 辅助写作工具', year: '2023', desc: '面向创作者的 AI 写作工具：长文大纲、分段续写与风格控制；上线一年注册 8 万+，月活 1.6 万。', stack: ['LLM 微调', 'Next.js', 'Redis'] },
    ],
    contactTitle: '一起让 AI 真正可用',
    contactSub: '产品合作、技术咨询，或是开源共建，欢迎随时联系。',
    email: 'yanzhou.gu@example.com',
    github: 'github.com/yanzhougu',
    footer: '© 2026 顾砚舟 · 独立 AI 开发者',
  },

  render(d) {
    const terms = (arr) => (Array.isArray(arr) ? arr : []).map((t) => `<span class="chip">${esc(t)}</span>`).join('')
    const stack = (arr) => (Array.isArray(arr) ? arr : []).map((t) => `<span class="stack-chip">${esc(t)}</span>`).join('')
    return `
  <nav class="nav">
    <div class="container">
      <a class="logo" href="#top"><span class="mark">${esc(d.mark || (d.name || '')[0] || 'P')}</span>${esc(d.name)}<span class="logo-suf">.ai</span></a>
      <div class="links">
        <a href="#about">关于</a><a href="#focus">研究</a><a href="#projects">项目</a><a href="#journey">历程</a>
        <a class="cta" href="#contact">联系</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <div class="hero-card glass rv">
        <div class="hero-grid">
          <div class="hero-left">
            <span class="badge"><i class="badge-dot"></i>${esc(d.badge)}</span>
            <h1>${esc(d.name)}</h1>
            <div class="role">${esc(d.role)}</div>
            <p class="desc">${esc(d.desc)}</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#focus">研究重点 →</a>
              <a class="btn btn-ghost" href="#contact">与我联系</a>
            </div>
            <div class="chips">${terms(d.chips)}</div>
          </div>
          <div class="stat-panel">
            ${(d.stats || []).map((s) => `
            <div class="stat">
              <div class="num">${esc(s.num)}</div>
              <div class="lbl">${esc(s.lbl)}</div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="sec-head">
        <div class="eyebrow"><i class="eyebrow-dot"></i>01 · ABOUT</div>
        <h2>关于我</h2>
      </div>
      <div class="about-card glass rv">
        <p class="about-lead">${esc(d.aboutTitle)}</p>
        <div class="about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
      </div>
    </div>
  </section>

  <section id="focus" class="sec">
    <div class="container">
      <div class="sec-head">
        <div class="eyebrow"><i class="eyebrow-dot"></i>02 · RESEARCH</div>
        <h2>研究重点</h2>
      </div>
      <div class="skills-grid">
        ${(d.skills || []).map((s, i) => `
        <div class="skill-card glass rv">
          <div class="skill-ic">${ICON[['layers', 'network', 'sliders', 'cpu'][i % 4]]}</div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.desc)}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="projects" class="sec">
    <div class="container">
      <div class="sec-head">
        <div class="eyebrow"><i class="eyebrow-dot"></i>03 · PROJECTS</div>
        <h2>项目经历</h2>
      </div>
      <div class="project-card glass rv">
        ${(d.projects || []).map((p, i) => `
        <article class="p-row">
          <div class="p-index">${String(i + 1).padStart(2, '0')}</div>
          <div class="p-body">
            <div class="p-meta"><span class="p-year">${esc(p.year)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p class="p-desc">${esc(p.desc)}</p>
            <div class="p-stack">${stack(p.stack)}</div>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="journey" class="sec">
    <div class="container">
      <div class="sec-head">
        <div class="eyebrow"><i class="eyebrow-dot"></i>04 · JOURNEY</div>
        <h2>成长历程</h2>
      </div>
      <div class="timeline-card glass rv">
        <div class="tl-list">
          ${(d.timeline || []).map((t) => `
          <div class="tl">
            <div class="tl-when">${esc(t.when)}</div>
            <div class="tl-body">
              <h3>${esc(t.title)}</h3>
              <p>${esc(t.desc)}</p>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="sec">
    <div class="container">
      <div class="contact-card glass rv">
        <h2>${esc(d.contactTitle)}</h2>
        <p class="contact-sub">${esc(d.contactSub)}</p>
        <div class="contact-links">
          <a class="contact-link" href="mailto:${esc(d.email)}">${ICON.mail}<span>${esc(d.email)}</span></a>
          <a class="contact-link" href="https://${esc(d.github)}" target="_blank" rel="noopener">${ICON.github}<span>${esc(d.github)}</span></a>
        </div>
      </div>
    </div>
  </section>

  <footer><div class="container">${esc(d.footer)}</div></footer>

  <script>
  (function () {
    var html = document.documentElement
    html.classList.add('js')
    var links = [].slice.call(document.querySelectorAll('.links a[href^="#"]'))
    var ids = links.map(function (a) { return a.getAttribute('href').slice(1) })
    function pick() {
      var y = window.scrollY + 110, cur = 'top'
      ids.forEach(function (id) {
        var el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      })
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur)
      })
    }
    window.addEventListener('scroll', pick, { passive: true })
    pick()
    var els = document.querySelectorAll('.rv')
    function showAll() { [].forEach.call(els, function (el) { el.classList.add('in') }) }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { showAll(); return }
    if (!('IntersectionObserver' in window)) { showAll(); return }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach(function (el) { io.observe(el) })
  })()
  </script>`
  },

  css: `
:root{
  --bg:#0B0E1A;--fg:#F1F3FB;--fg-2:#CDD2E6;--muted:#A5AEC9;
  --primary:#A78BFA;--primary-2:#8B5CF6;--cyan:#67E8F9;--pink:#F0ABFC;
  --glass:rgba(255,255,255,.09);--glass-2:rgba(255,255,255,.09);--glass-hover:rgba(255,255,255,.11);--glass-deep:rgba(255,255,255,.04);
  --nav-bg:rgba(11,14,26,.62);
  --border:rgba(255,255,255,.16);--border-soft:rgba(255,255,255,.08);--border-strong:rgba(255,255,255,.26);
  --highlight:rgba(255,255,255,.10);
  --shadow-card:0 24px 60px rgba(2,4,16,.45);
  --shadow-btn:0 10px 24px rgba(139,92,246,.28);--shadow-btn-hover:0 14px 30px rgba(139,92,246,.38);
  --primary-soft:rgba(167,139,250,.16);--cyan-soft:rgba(103,232,249,.14);--sel:rgba(167,139,250,.28);
  --blob-violet:rgba(139,92,246,.20);--blob-cyan:rgba(34,211,238,.14);--blob-pink:rgba(236,72,153,.13);
  --dot-glow-v:0 0 14px rgba(167,139,250,.7);--dot-glow-c:0 0 14px rgba(103,232,249,.7);--dot-glow-p:0 0 14px rgba(240,171,252,.6);
  --radius-lg:24px;--radius:18px;--radius-sm:12px;--radius-pill:999px;
  --font-sans:'Inter','SF Pro Text','PingFang SC','Noto Sans SC','Microsoft YaHei',system-ui,sans-serif;
  --font-mono:'JetBrains Mono','SF Mono',ui-monospace,Consolas,monospace;
  --t-fast:150ms;--t-med:260ms;--ease:cubic-bezier(.2,.65,.3,1);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg);overflow-x:hidden;-webkit-font-smoothing:antialiased}
section{scroll-margin-top:88px}
a{color:inherit;text-decoration:none}
::selection{background:var(--sel);color:var(--fg)}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:4px}
.container{max-width:1080px;margin:0 auto;padding:0 24px}
/* 背景：紫 / 青 / 粉 三团柔和大光斑（低饱和，不抢文字） */
body::before{content:'';position:fixed;inset:0;z-index:-2;pointer-events:none;background:
  radial-gradient(1100px 700px at 8% -10%,var(--blob-violet),transparent 62%),
  radial-gradient(900px 640px at 92% 6%,var(--blob-cyan),transparent 60%),
  radial-gradient(1000px 760px at 78% 100%,var(--blob-pink),transparent 62%),
  var(--bg)}
/* 装饰：三枚极小的光晕圆点，克制点缀 */
body::after{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background:
  radial-gradient(6px 6px at 16% 28%,rgba(240,171,252,.45),transparent 70%),
  radial-gradient(5px 5px at 85% 40%,rgba(103,232,249,.4),transparent 70%),
  radial-gradient(5px 5px at 28% 80%,rgba(167,139,250,.38),transparent 70%)}
/* 玻璃卡基类：半透明磨砂 + 背景模糊 + 细描边 + 顶部高光 + 柔和阴影 */
.glass{background:linear-gradient(rgba(13,17,32,.35),rgba(13,17,32,.35)),var(--glass);border:1px solid var(--border);border-radius:var(--radius);
  backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);
  box-shadow:var(--shadow-card),inset 0 1px 0 var(--highlight);
  text-shadow:0 1px 2px rgba(0,0,0,.25);
  transition:transform var(--t-med) var(--ease),border-color var(--t-med),background var(--t-med)}
.glass:hover{border-color:var(--border-strong)}
/* 导航：吸顶玻璃条 */
.nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);
  backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);
  border-bottom:1px solid var(--border-soft)}
.nav .container{display:flex;align-items:center;height:64px;gap:20px}
.logo{display:flex;align-items:center;gap:10px;font-weight:700;font-size:16.5px}
.logo .mark{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--primary),var(--cyan));
  color:var(--bg);display:grid;place-items:center;font-family:var(--font-mono);font-weight:800;font-size:15px;
  box-shadow:0 0 16px rgba(167,139,250,.35)}
.logo .logo-suf{font-family:var(--font-mono);color:var(--muted);font-weight:400;font-size:14px}
.links{display:flex;gap:6px;margin-left:auto;align-items:center}
.links a{font-size:14px;color:var(--fg-2);padding:8px 13px;border-radius:var(--radius-pill);transition:color var(--t-fast),background var(--t-fast)}
.links a:hover{color:var(--fg)}
.links a.active{color:var(--fg);background:var(--glass)}
.links .cta{border:1px solid var(--border);color:var(--fg)}
/* Hero */
.hero{padding:clamp(64px,8vw,96px) 0 72px}
.hero-card{border-radius:var(--radius-lg);padding:clamp(28px,4vw,48px)}
.hero-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:44px;align-items:stretch}
.badge{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-family:var(--font-mono);color:var(--cyan);
  border:1px solid var(--border);background:var(--glass-deep);padding:6px 14px;border-radius:var(--radius-pill)}
.badge-dot{width:7px;height:7px;border-radius:50%;background:var(--cyan);box-shadow:var(--dot-glow-c);animation:breathe 2.2s ease-in-out infinite}
@keyframes breathe{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{font-size:clamp(42px,6.4vw,64px);font-weight:800;line-height:1.2;letter-spacing:-.5px;margin:20px 0 6px;animation:fadeUp .7s ease-out both}
.role{font-size:clamp(17px,2vw,20px);color:var(--primary);font-weight:600;letter-spacing:.3px;animation:fadeUp .7s ease-out both;animation-delay:.12s}
.desc{margin-top:16px;color:var(--fg-2);font-size:16px;line-height:1.85;max-width:28em;animation:fadeUp .7s ease-out both;animation-delay:.24s}
.cta-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:46px;padding:0 22px;border-radius:var(--radius-pill);
  font-size:15px;font-weight:600;transition:transform var(--t-fast) var(--ease),box-shadow var(--t-fast),border-color var(--t-fast)}
.btn-primary{background:linear-gradient(135deg,var(--primary),var(--cyan));color:var(--bg);box-shadow:var(--shadow-btn)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:var(--shadow-btn-hover)}
.btn-ghost{background:var(--glass);border:1px solid var(--border);color:var(--fg)}
.btn-ghost:hover{border-color:var(--border-strong);transform:translateY(-2px)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}
.chip{font-size:12.5px;font-family:var(--font-mono);color:var(--fg-2);border:1px solid var(--border-soft);
  background:var(--glass);padding:5px 13px;border-radius:var(--radius-pill)}
.stat-panel{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border-soft);
  border:1px solid var(--border-soft);border-radius:var(--radius-sm);overflow:hidden}
.stat{background:var(--glass-deep);padding:22px 20px}
.stat .num{font-size:clamp(26px,3vw,34px);font-weight:800;font-family:var(--font-mono);color:var(--primary);
  font-variant-numeric:tabular-nums;letter-spacing:-.5px}
.stat .lbl{font-size:12.5px;color:var(--muted);margin-top:6px;line-height:1.5}
/* 章节头 */
.sec{padding:64px 0}
.sec-head{margin-bottom:34px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-mono);font-size:12.5px;
  letter-spacing:2.5px;text-transform:uppercase;color:var(--primary)}
.eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--primary);box-shadow:var(--dot-glow-v)}
.sec-head h2{font-size:clamp(26px,3.2vw,34px);font-weight:800;letter-spacing:-.5px;margin-top:10px}
/* 关于 */
.about-card{padding:clamp(28px,4vw,44px)}
.about-lead{font-size:clamp(17px,2.2vw,21px);font-weight:600;color:var(--fg);line-height:1.65;max-width:30em;margin-bottom:26px}
.about-text p{color:var(--fg-2);font-size:16px;line-height:1.85;margin-bottom:16px;max-width:32em}
.about-text p:last-child{margin-bottom:0}
/* 研究重点：功能玻璃卡片网格 */
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.skill-card{padding:26px;display:flex;flex-direction:column}
.skill-card:hover{transform:translateY(-3px)}
.skill-ic{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;margin-bottom:18px;
  background:var(--primary-soft);color:var(--primary)}
.skill-card:nth-child(even) .skill-ic{background:var(--cyan-soft);color:var(--cyan)}
.skill-ic svg{width:20px;height:20px}
.skill-card h3{font-size:18px;font-weight:700;margin-bottom:8px}
.skill-card p{font-size:14.5px;color:var(--muted);line-height:1.7}
/* 项目：单张玻璃卡内的纵向列表（避免「三张等宽卡」俗套） */
.project-card{padding:6px 30px}
.p-row{display:grid;grid-template-columns:64px 1fr;gap:22px;padding:28px 0;border-top:1px solid var(--border-soft)}
.p-row:first-child{border-top:none}
.p-index{font-family:var(--font-mono);font-size:13px;color:var(--primary);letter-spacing:1px;padding-top:4px;font-variant-numeric:tabular-nums}
.p-meta{margin-bottom:10px}
.p-year{font-family:var(--font-mono);font-size:12.5px;color:var(--muted)}
.p-body h3{font-size:clamp(17px,2vw,21px);font-weight:700;margin-bottom:8px;letter-spacing:-.2px}
.p-desc{font-size:15px;color:var(--fg-2);line-height:1.75;max-width:32em}
.p-stack{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.stack-chip{font-size:12px;font-family:var(--font-mono);color:var(--cyan);border:1px solid var(--border-soft);
  background:var(--glass);padding:4px 12px;border-radius:var(--radius-pill)}
/* 时间线：细线 + 圆点 */
.timeline-card{padding:clamp(28px,4vw,44px)}
.tl-list{position:relative;padding-left:24px}
.tl-list::before{content:'';position:absolute;left:5px;top:10px;bottom:10px;width:1px;background:var(--border-soft)}
.tl{position:relative;padding:20px 0;border-top:1px solid var(--border-soft)}
.tl:first-child{border-top:none}
.tl::before{content:'';position:absolute;left:-24px;top:27px;width:9px;height:9px;border-radius:50%;
  background:var(--primary);box-shadow:var(--dot-glow-v)}
.tl:first-child::before{background:var(--cyan);box-shadow:var(--dot-glow-c)}
.tl{display:grid;grid-template-columns:170px 1fr;gap:20px}
.tl-when{font-family:var(--font-mono);font-size:13px;color:var(--primary);padding-top:2px;font-variant-numeric:tabular-nums}
.tl-body h3{font-size:17px;font-weight:700;margin-bottom:4px}
.tl-body p{font-size:14px;color:var(--muted);line-height:1.7;max-width:30em}
/* 联系 */
.contact-card{padding:clamp(36px,6vw,60px);text-align:center}
.contact-card h2{font-size:clamp(26px,3.4vw,36px);font-weight:800;letter-spacing:-.5px}
.contact-sub{color:var(--muted);font-size:16px;margin:12px auto 30px;max-width:30em}
.contact-links{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.contact-link{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 22px;border-radius:var(--radius-pill);
  background:var(--glass);border:1px solid var(--border);font-family:var(--font-mono);font-size:14px;color:var(--fg);
  transition:transform var(--t-fast) var(--ease),border-color var(--t-fast)}
.contact-link svg{width:18px;height:18px;color:var(--primary)}
.contact-link:hover{border-color:var(--border-strong);transform:translateY(-2px)}
/* 页脚 */
footer{padding:36px 0 48px;text-align:center;font-size:12.5px;color:var(--muted)}
/* 入场动效（JS 开启后生效；无 JS 时内容始终可见） */
.js .rv{opacity:0;transform:translateY(18px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
.js .rv.in{opacity:1;transform:none}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;gap:28px}
  .stat-panel{grid-template-columns:1fr 1fr}
  .skills-grid{grid-template-columns:1fr 1fr}
  .tl{grid-template-columns:1fr;gap:4px}
  .p-row{grid-template-columns:1fr;gap:8px}
  .links{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;max-width:100%;mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent);-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent)}
  .links::-webkit-scrollbar{display:none}
  .links a{white-space:nowrap;flex-shrink:0}
}
@media(max-width:560px){
  .container{padding:0 18px}
  .skills-grid{grid-template-columns:1fr}
  .sec{padding:48px 0}
  .project-card{padding:6px 22px}
  .stat{padding:18px 16px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
  .js .rv{opacity:1!important;transform:none!important}
}`,
}
