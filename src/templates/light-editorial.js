/**
 * 模板 02：编辑杂志风 · 个人主页
 * 米白纸感 + 衬线大标题 + 章节编号，编辑/出版感。适合设计师、作家、内容创作者、学术。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'light-editorial',
  name: '编辑杂志 · 内容创作者',
  tagline: '衬线大标题 + 纸感留白的编辑杂志风',
  category: '作品集',
  style: '编辑杂志',
  description: '米白纸感背景、衬线大标题、章节编号与细分割线，营造杂志编辑般的精致与克制。适合设计师、作家、记者、内容创作者与学术研究者。',
  cover: 'linear-gradient(160deg,#FAF9F6 0%,#F1EAE0 60%,#E8DED0 100%)',
  coverEmoji: '📖',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'role', label: '一句话定位' },
        { key: 'badge', label: '徽章/标签', hint: '如：独立设计师 · 上海' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技能标签', type: 'tags' },
      ],
    },
    {
      group: '关于与数据',
      fields: [{ key: 'aboutTitle', label: '关于 · 副标题' }],
      list: {
        key: 'about',
        itemLabel: '段落',
        fields: [{ key: 'text', label: '段落内容', type: 'textarea' }],
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
      group: '技能',
      list: {
        key: 'skills',
        itemLabel: '技能',
        fields: [{ key: 'title', label: '名称' }, { key: 'desc', label: '说明' }],
      },
    },
    {
      group: '项目经历',
      list: {
        key: 'projects',
        itemLabel: '项目',
        fields: [
          { key: 'title', label: '项目名称' },
          { key: 'year', label: '年份 / 标签' },
          { key: 'desc', label: '描述', type: 'textarea' },
          { key: 'stack', label: '技术/工具', type: 'tags' },
        ],
      },
    },
    {
      group: '时间线',
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
      group: '联系方式',
      fields: [
        { key: 'contactSub', label: '联系副文案' },
        { key: 'email', label: '邮箱' },
        { key: 'github', label: 'GitHub' },
        { key: 'footer', label: '页脚版权' },
      ],
    },
  ],

  defaults: {
    name: '沈知夏',
    role: '独立设计师 · 内容创作者',
    badge: '设计 & 写作 · 现居杭州',
    desc: '我相信好的设计是「克制地表达」。七年来为品牌与内容团队做视觉设计，也写关于设计方法的文章。这里是我的作品与思考的索引。',
    chips: ['品牌视觉', '编辑排版', '设计写作', 'Figma', 'InDesign'],
    aboutTitle: '关于我 —— 设计与写作的长期主义者',
    about: [
      { text: '我的工作围绕「编辑式设计」展开：像编辑对待文字一样对待每个像素——留白即标点，层级即段落，一切为可读性服务。' },
      { text: '曾为 30+ 独立品牌与媒体提供视觉方向，擅长从混乱中建立秩序，让信息清晰而体面。' },
      { text: '业余写作者，作品散见于设计与文化类刊物；相信手艺的价值，也拥抱工具的进化。' },
    ],
    stats: [
      { num: '7', lbl: '年设计经验' },
      { num: '30+', lbl: '合作品牌' },
      { num: '40+', lbl: '发表文章' },
      { num: '3', lbl: '设计奖项' },
    ],
    skills: [
      { title: '品牌视觉', desc: '标志、色彩系统、视觉语言' },
      { title: '编辑排版', desc: '版式、字体、出版物' },
      { title: '设计写作', desc: '方法论、案例分析' },
      { title: '工具', desc: 'Figma、InDesign、Photoshop' },
    ],
    projects: [
      { title: '《字里行间》独立杂志视觉', year: '2025', desc: '为独立文学杂志建立完整视觉系统：封面、内页网格、字号体系，从 0 到 1 的编辑设计实践。', stack: ['InDesign', '品牌系统'] },
      { title: '知夏设计札记', year: '2024 — 至今', desc: '持续写作的设计博客，40+ 篇文章沉淀方法论；年度读者超过 2 万人。', stack: ['内容设计', '写作'] },
      { title: '茶屿品牌升级', year: '2023', desc: '为精品茶品牌重塑视觉，从命名叙事到包装落地，上线后客单价提升 26%。', stack: ['品牌策略', '包装设计'] },
    ],
    timeline: [
      { when: '2021 — 至今', title: '独立设计工作室', desc: '为品牌与媒体提供视觉方向与编辑设计服务。' },
      { when: '2018 — 2021', title: '某某杂志 · 高级设计师', desc: '负责月刊整体视觉，从栏目规划到付印，养成编辑思维。' },
      { when: '2017', title: '毕业于某某大学 · 视觉传达', desc: '毕业设计获学院年度最佳。' },
    ],
    contactSub: '欢迎交流设计、写作与一切美好的合作。',
    email: 'zhixia@example.com',
    github: 'github.com/zhixia',
    footer: '© 2026 沈知夏 · 设计 & 写作',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    return `
  <nav class="nav">
    <div class="container">
      <a class="logo" href="#top">${esc(d.name)}<span class="logo-en">/${esc((d.name || '').slice(-2))}</span></a>
      <div class="links">
        <a href="#about">关于</a><a href="#works">作品</a><a href="#journal">历程</a><a href="#contact">联系</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <span class="badge">${esc(d.badge)}</span>
      <h1>${esc(d.name)}<br><em>${esc(d.role)}</em></h1>
      <p class="lead">${esc(d.desc)}</p>
      <div class="chips">${terms(d.chips)}</div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="sec-head"><span class="num">01</span><h2>关于</h2><p>${esc(d.aboutTitle)}</p></div>
      <div class="about-grid">
        <div class="text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        <div class="stats">${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}</div>
      </div>
    </div>
  </section>

  <section id="skills" class="sec">
    <div class="container">
      <div class="sec-head"><span class="num">02</span><h2>能力</h2></div>
      <div class="skills-grid">${(d.skills || []).map((s) => `
        <div class="skill"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section id="works" class="sec">
    <div class="container">
      <div class="sec-head"><span class="num">03</span><h2>作品</h2></div>
      <div class="works">${(d.projects || []).map((p, i) => `
        <article class="work">
          <div class="work-index">${String(i + 1).padStart(2, '0')}</div>
          <div class="work-body">
            <div class="work-meta"><span class="work-year">${esc(p.year)}</span><span class="tags">${terms(p.stack)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="journal" class="sec">
    <div class="container">
      <div class="sec-head"><span class="num">04</span><h2>历程</h2></div>
      <div class="timeline">${(d.timeline || []).map((t) => `
        <div class="tl"><span class="tl-when">${esc(t.when)}</span><div><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p></div></div>`).join('')}
      </div>
    </div>
  </section>

  <section id="contact" class="sec">
    <div class="container">
      <div class="contact">
        <h2>来聊一聊</h2>
        <p>${esc(d.contactSub)}</p>
        <div class="contact-links">
          <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>
          <a href="https://${esc(d.github)}" target="_blank" rel="noopener">${esc(d.github)}</a>
        </div>
      </div>
    </div>
  </section>

  <footer><div class="container">${esc(d.footer)}</div></footer>`
  },

  css: `
:root{--bg:#FAF9F6;--bg-2:#F3EFE7;--card:#FFFFFF;--fg:#1C1917;--fg-2:#57534E;--muted:#8A8378;--primary:#9A3412;--primary-2:#C2410C;--border:#E7E0D4;--radius:14px;--font-display:Georgia,'Songti SC','Noto Serif SC','SimSun',serif;--font-sans:'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;--font-mono:'JetBrains Mono',ui-monospace,Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg)}
section{scroll-margin-top:70px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:4px}
.container{max-width:860px;margin:0 auto;padding:0 24px}
.nav{position:sticky;top:0;z-index:60;background:rgba(250,249,246,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav .container{display:flex;align-items:center;height:62px;gap:24px}
.logo{font-family:var(--font-display);font-weight:700;font-size:19px;letter-spacing:.5px}
.logo .logo-en{color:var(--muted);font-weight:400;margin-left:4px}
.links{display:flex;gap:4px;margin-left:auto}
.links a{font-size:14px;color:var(--fg-2);padding:6px 12px;border-bottom:2px solid transparent}
.links a:hover{color:var(--primary);border-bottom-color:var(--primary)}
.hero{padding:110px 0 90px;border-bottom:1px solid var(--border)}
.badge{display:inline-block;font-size:13px;letter-spacing:2px;color:var(--primary);border:1px solid var(--border);padding:5px 14px;border-radius:999px;margin-bottom:26px;font-family:var(--font-mono)}
.hero h1{font-family:var(--font-display);font-size:clamp(40px,7vw,72px);font-weight:700;line-height:1.12;letter-spacing:.5px}
.hero h1 em{display:block;font-style:normal;color:var(--primary);font-weight:400;font-size:.55em;margin-top:10px}
.lead{color:var(--fg-2);font-size:17px;max-width:34em;margin-top:24px;line-height:1.8}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}
.tag{font-size:12px;font-family:var(--font-mono);color:var(--fg-2);border:1px solid var(--border);padding:4px 12px;border-radius:999px}
.sec{padding:76px 0}
.sec-head{margin-bottom:36px}
.sec-head .num{font-family:var(--font-display);font-size:30px;color:var(--primary);margin-right:14px;vertical-align:2px}
.sec-head h2{display:inline;font-family:var(--font-display);font-size:30px;font-weight:700;letter-spacing:.5px}
.sec-head p{color:var(--muted);margin-top:10px;font-size:14px;letter-spacing:.5px}
.about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:start}
.text p{color:var(--fg-2);margin-bottom:16px;font-size:16px;line-height:1.85}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.stat{background:var(--card);border:1px solid var(--border);padding:20px 18px}
.stat b{font-family:var(--font-display);font-size:30px;font-weight:700;color:var(--primary);display:block}
.stat span{font-size:12.5px;color:var(--muted)}
.skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border)}
.skill{background:var(--bg);padding:28px 26px}
.skill h3{font-family:var(--font-display);font-size:19px;margin-bottom:8px}
.skill p{color:var(--muted);font-size:14px}
.works{border-top:1px solid var(--border)}
.work{display:grid;grid-template-columns:70px 1fr;gap:20px;padding:30px 0;border-bottom:1px solid var(--border)}
.work-index{font-family:var(--font-display);font-size:22px;color:var(--muted)}
.work-meta{display:flex;gap:12px;align-items:center;margin-bottom:8px;flex-wrap:wrap}
.work-year{font-family:var(--font-mono);font-size:12.5px;color:var(--primary)}
.work-body h3{font-family:var(--font-display);font-size:21px;margin-bottom:6px}
.work-body p{color:var(--fg-2);font-size:15px}
.timeline{border-top:1px solid var(--border)}
.tl{display:grid;grid-template-columns:180px 1fr;gap:20px;padding:24px 0;border-bottom:1px solid var(--border)}
.tl-when{font-family:var(--font-display);font-style:italic;color:var(--primary);font-size:15px}
.tl h3{font-size:16px;font-weight:600;margin-bottom:4px}
.tl p{color:var(--muted);font-size:14px}
.contact{text-align:center;padding:60px 0;background:var(--bg-2);border:1px solid var(--border)}
.contact h2{font-family:var(--font-display);font-size:34px;margin-bottom:12px}
.contact p{color:var(--fg-2);margin-bottom:24px}
.contact-links{display:flex;gap:20px;justify-content:center;flex-wrap:wrap}
.contact-links a{color:var(--primary);font-family:var(--font-mono);font-size:14px;border-bottom:1px solid var(--primary-2)}
.contact-links a:hover{color:var(--primary-2)}
footer{padding:34px 0 44px;text-align:center;font-size:12.5px;color:var(--muted)}
@media(max-width:900px){
  .hero{padding:80px 0 60px}
  .about-grid{grid-template-columns:1fr;gap:32px}
  .skills-grid{grid-template-columns:1fr}
  .tl{grid-template-columns:1fr;gap:6px}
  .links a:not(:first-child){display:none}
}
@media(max-width:560px){
  .work{grid-template-columns:1fr;gap:8px}
  .stats{grid-template-columns:repeat(2,1fr)}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`,
}
