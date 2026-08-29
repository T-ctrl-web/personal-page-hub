/**
 * 模板 03：极简瑞士风 · 个人主页
 * 纯白 + 超大几何无衬线标题 + 极致留白 + 网格对齐。设计师/咨询/高端个人品牌。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'minimal-swiss',
  name: '极简瑞士 · 高端个人品牌',
  tagline: '纯白纸面 + 超大几何标题的极致克制',
  category: '作品集',
  style: '极简瑞士',
  description: '白纸、黑字、超大无衬线标题与极致留白，源自瑞士国际主义排印。适合设计师、咨询顾问、建筑师与追求高级克制感的高端个人品牌。',
  cover: 'linear-gradient(180deg,#FFFFFF 0%,#F4F4F2 100%)',
  coverEmoji: '▮',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'nameEn', label: '英文名', hint: 'Hero 辅助文字' },
        { key: 'role', label: '一句话定位' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技能标签', type: 'tags' },
      ],
    },
    {
      group: '关于与数据',
      fields: [{ key: 'aboutTitle', label: '关于 · 标题' }],
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
      group: '精选项目',
      list: {
        key: 'projects',
        itemLabel: '项目',
        fields: [
          { key: 'index', label: '编号', hint: '如：01' },
          { key: 'title', label: '项目名称' },
          { key: 'desc', label: '描述', type: 'textarea' },
        ],
      },
    },
    {
      group: '联系方式',
      fields: [
        { key: 'email', label: '邮箱' },
        { key: 'footer', label: '页脚' },
      ],
    },
  ],

  defaults: {
    name: '陆斯年',
    nameEn: 'LUKA LU',
    role: '品牌咨询 · 设计策略',
    desc: '我在品牌与产品之间工作：帮助企业把「想表达什么」翻译成「看起来是什么」。十二年，四十余个品牌的策略与视觉落地。',
    chips: ['品牌策略', '视觉系统', '设计咨询', 'Workshop'],
    aboutTitle: 'About — 把复杂，做成简单',
    about: [
      { text: '品牌不是 logo，是每一次接触点的克制与一致。我的工作从访谈与调研开始，到一页页可执行的设计规范结束。' },
      { text: '服务过科技、消费、文化领域的客户，从初创公司到上市公司；相信「少即是多」的瑞士式纪律，也尊重每个品牌自己的声音。' },
    ],
    stats: [
      { num: '12', lbl: '年从业经验' },
      { num: '40+', lbl: '品牌项目' },
      { num: '18', lbl: '行业奖项' },
      { num: '6', lbl: '国家市场' },
    ],
    projects: [
      { index: '01', title: '极简主义品牌手册', desc: '为咨询公司重构品牌视觉语言，建立 40 页设计规范，覆盖数字与印刷全触点。' },
      { index: '02', title: '城市文化季主视觉', desc: '以网格与色彩为城市文化节设计主视觉体系，落地于导视、海报与数字媒体。' },
      { index: '03', title: '初创品牌加速计划', desc: '为 6 家早期团队提供品牌定位与视觉设计工作坊，其中 3 家完成融资。' },
    ],
    email: 'luka@example.com',
    footer: '© 2026 陆斯年 LUKA LU — 品牌咨询与设计',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    return `
  <nav class="nav">
    <div class="container">
      <span class="logo">${esc(d.name)}</span>
      <div class="links">
        <a href="#about">ABOUT</a><a href="#work">WORK</a><a href="mailto:${esc(d.email)}">CONTACT</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <h1>${esc(d.name)}<span class="en">${esc(d.nameEn)}</span></h1>
      <div class="hero-grid">
        <div class="hero-role">${esc(d.role)}</div>
        <p class="hero-desc">${esc(d.desc)}</p>
      </div>
      <div class="hero-chips">${terms(d.chips)}</div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="sec-head"><h2>${esc(d.aboutTitle)}</h2></div>
      <div class="about-grid">
        <div class="about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        <div class="stats">
          ${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="sec">
    <div class="container">
      <div class="sec-head"><h2>Selected Work</h2></div>
      <div class="works">
        ${(d.projects || []).map((p) => `
        <article class="work">
          <span class="work-index">${esc(p.index)}</span>
          <div class="work-body">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec contact-sec">
    <div class="container">
      <a class="contact" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
    </div>
  </section>

  <footer><div class="container">${esc(d.footer)}</div></footer>`
  },

  css: `
:root{--bg:#FFFFFF;--bg-2:#F6F6F4;--fg:#111111;--fg-2:#444444;--muted:#8A8A8A;--primary:#111111;--border:#E5E5E3;--font-sans:'Inter','Helvetica Neue',Helvetica,'PingFang SC','Microsoft YaHei',system-ui,sans-serif;--font-mono:'JetBrains Mono',ui-monospace,Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg);-webkit-font-smoothing:antialiased}
section{scroll-margin-top:64px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--fg);outline-offset:2px;border-radius:2px}
.container{max-width:980px;margin:0 auto;padding:0 28px}
.nav{position:sticky;top:0;z-index:60;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--border)}
.nav .container{display:flex;align-items:center;height:60px}
.logo{font-weight:800;font-size:15px;letter-spacing:1.5px;text-transform:uppercase}
.links{display:flex;gap:26px;margin-left:auto}
.links a{font-size:12px;letter-spacing:2px;color:var(--fg-2);text-transform:uppercase}
.links a:hover{color:var(--fg)}
.hero{padding:120px 0 90px;border-bottom:1px solid var(--border)}
.hero h1{font-size:clamp(44px,8vw,84px);font-weight:800;line-height:1.18;letter-spacing:-1px;animation:fadeUp .7s ease-out both}
.hero h1 .en{display:block;font-size:.22em;font-weight:600;letter-spacing:8px;color:var(--muted);margin-top:18px;text-transform:uppercase}
.hero-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:48px;margin-top:64px;align-items:start}
.hero-role{font-size:13px;letter-spacing:2px;color:var(--fg-2);text-transform:uppercase;padding-top:6px;animation:fadeUp .7s ease-out .12s both}
.hero-desc{font-size:17px;color:var(--fg-2);max-width:28em;line-height:1.9;animation:fadeUp .7s ease-out .2s both}
.hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:40px}
.tag{font-size:11px;letter-spacing:1.5px;color:var(--fg-2);border:1px solid var(--border);padding:6px 16px;border-radius:2px;text-transform:uppercase}
.sec{padding:90px 0}
.sec-head{border-top:1px solid var(--border);padding-top:22px;margin-bottom:44px}
.sec-head h2{font-size:clamp(24px,3vw,34px);font-weight:800;letter-spacing:-1px}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.about-text p{color:var(--fg-2);font-size:16px;margin-bottom:18px;line-height:1.9}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border);border:1px solid var(--border)}
.stat{background:var(--bg);padding:26px 22px}
.stat b{display:block;font-size:40px;font-weight:800;letter-spacing:-1px;font-variant-numeric:tabular-nums}
.stat span{font-size:12px;letter-spacing:1px;color:var(--muted);text-transform:uppercase}
.works{border-top:1px solid var(--border)}
.work{display:grid;grid-template-columns:90px 1fr;gap:24px;padding:34px 0;border-bottom:1px solid var(--border)}
.work-index{font-size:14px;font-weight:700;color:var(--muted);font-variant-numeric:tabular-nums}
.work h3{font-size:clamp(18px,2.4vw,26px);font-weight:800;letter-spacing:-.5px;margin-bottom:8px}
.work p{color:var(--fg-2);font-size:15px;max-width:32em}
.contact-sec{padding:40px 0 90px}
.contact{display:inline-block;font-size:clamp(20px,3vw,32px);font-weight:700;letter-spacing:-.5px;border-bottom:2px solid var(--fg);padding-bottom:6px}
.contact:hover{color:var(--fg-2)}
footer{padding:28px 0 40px;border-top:1px solid var(--border);font-size:12px;color:var(--muted);letter-spacing:1px}
@media(max-width:900px){
  .hero{padding:90px 0 60px}
  .hero-grid{grid-template-columns:1fr;gap:24px;margin-top:40px}
  .about-grid{grid-template-columns:1fr;gap:40px}
  .links{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;max-width:100%;mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent);-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent)}
  .links::-webkit-scrollbar{display:none}
  .links a{white-space:nowrap;flex-shrink:0}
}
@media(max-width:560px){
  .work{grid-template-columns:1fr;gap:10px}
  .stats{grid-template-columns:repeat(2,1fr)}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`,
}
