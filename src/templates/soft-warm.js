/**
 * 模板 04：柔和暖色 · 个人主页
 * 奶油底色 + 陶土橙 + 鼠尾草绿点缀，大圆角卡片与柔和阴影，像一家精致的独立咖啡馆。
 * 适合生活方式博主、独立品牌主理人、心理与生活类内容创作者。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'soft-warm',
  name: '柔和暖色 · 生活品牌',
  tagline: '奶油、陶土与鼠尾草，一间小店的温度',
  category: '作品集',
  style: '柔和暖色',
  description: '奶油底色、陶土橙与鼠尾草绿的低饱和搭配，大圆角卡片、柔和阴影与细描边，像一间精致的独立咖啡馆。适合生活方式博主、独立品牌主理人与生活、心理类内容创作者。',
  cover: 'linear-gradient(150deg,#FBF5EE 0%,#F0DFC9 55%,#E4CDB0 100%)',
  coverEmoji: '☕',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'role', label: '一句话定位' },
        { key: 'badge', label: '徽章/标签', hint: '如：独立品牌主理人 · 现居成都' },
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
      group: '服务项目',
      list: {
        key: 'services',
        itemLabel: '服务',
        fields: [
          { key: 'title', label: '名称' },
          { key: 'desc', label: '说明', type: 'textarea' },
        ],
      },
    },
    {
      group: '精选项目',
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
      group: '生活方式',
      fields: [{ key: 'lifeTitle', label: '生活方式 · 标题' }],
      list: {
        key: 'notes',
        itemLabel: '短句',
        fields: [{ key: 'text', label: '内容' }],
      },
    },
    {
      group: '联系方式',
      fields: [
        { key: 'contactSub', label: '联系副文案' },
        { key: 'email', label: '邮箱' },
        { key: 'footer', label: '页脚版权' },
      ],
    },
  ],

  defaults: {
    name: '林屿安',
    role: '「屿间」咖啡 · 独立品牌主理人',
    badge: '独立品牌主理人 · 现居成都',
    desc: '我在成都一条老巷子里开了家叫「屿间」的咖啡店，也做一些生活方式的内容。相信一杯好咖啡、一盏暖灯、一段慢下来的时间，足以安顿一天的疲惫。',
    chips: ['精品咖啡', '品牌与空间', '生活方式内容', '手冲课程', '慢生活'],
    aboutTitle: '关于 —— 一间小店，与它生长出的生活',
    about: [
      { text: '「屿间」开在一条老巷子里，第三年了。我负责豆子、菜单与空间里每一件器物，也负责把店里的节奏放慢——慢到客人愿意坐一下午，慢到窗边的光从早晨移到黄昏。' },
      { text: '我不太谈「创业」，更愿意说「经营生活」。从选豆、烘焙、手冲，到店面灯光的色温，我相信细节里藏着真诚，也相信被好好对待的生活，会一点一点回馈你。' },
      { text: '业余写写公众号、拍些日常，记录小店与客人的故事。欢迎你来坐坐，喝一杯，聊聊你的生活。' },
    ],
    stats: [
      { num: '3', lbl: '年小店经营' },
      { num: '12', lbl: '支在售豆单' },
      { num: '6000+', lbl: '到店客人' },
      { num: '40', lbl: '期生活方式专栏' },
    ],
    services: [
      { title: '精品咖啡与手冲课堂', desc: '从选豆到冲煮的一对一体验课，把一杯好咖啡的方法带回家，也把属于自己的节奏带回去。' },
      { title: '空间与品牌咨询', desc: '为小店主理人提供空间动线、灯光氛围与品牌叙事的建议，让一间店从第一眼开始就被记住。' },
      { title: '生活方式内容共创', desc: '与品牌合作拍摄、写作与活动策划，把日常拍出温度，把产品讲进生活里。' },
      { title: '街角咖啡快闪', desc: '每月一场快闪，把「屿间」的豆子与故事带到不同的街区，和陌生的人分享同一杯下午。' },
    ],
    projects: [
      { title: '「屿间」品牌与空间落成', year: '2023', desc: '从选址、装修到菜单与品牌视觉，亲手完成一家 40㎡ 咖啡店的全部细节；开业三个月实现盈亏平衡。', stack: ['品牌', '空间设计', '菜单'] },
      { title: '手冲体验课 × 180 场', year: '2024', desc: '把冲煮方法拆成可复制的四步，累计 180 场小班课，学员复购率超过四成。', stack: ['课程', '内容'] },
      { title: '「街角咖啡地图」城市企划', year: '2025', desc: '联合 9 家独立小店做城市咖啡地图与周末快闪，让更多人愿意走进街角那家陌生的店。', stack: ['企划', '联合品牌'] },
    ],
    lifeTitle: '生活方式 —— 慢一点，也没关系',
    notes: [
      { text: '早起开豆机之前，先给自己冲一杯。' },
      { text: '店里最受欢迎的位置，是窗边那盏落地灯下面。' },
      { text: '生活的秩序感，有时候只是把杯子洗干净，摆回原处。' },
    ],
    contactSub: '无论是一杯咖啡、一场合作，还是一句简单的问候——都欢迎你来找我。',
    email: 'yujian@example.com',
    footer: '© 2026 林屿安 · 「屿间」咖啡与生活',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    const initial = esc((d.name || '').charAt(0))
    return `
  <nav class="nav">
    <div class="container nav-inner">
      <a class="logo" href="#top">${esc(d.name)}</a>
      <div class="links">
        <a href="#about">关于</a><a href="#services">服务</a><a href="#works">作品</a><a href="#life">生活</a><a href="#contact">联系</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <div class="hero-card">
        <div class="hero-text">
          <span class="badge">${esc(d.badge)}</span>
          <h1>${esc(d.name)}<span class="role">${esc(d.role)}</span></h1>
          <p class="lead">${esc(d.desc)}</p>
          <div class="chips">${terms(d.chips)}</div>
          <a class="btn" href="#contact">来店里坐坐</a>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orb"><span>${initial}</span></div>
          <span class="dot dot-sage"></span>
          <span class="dot dot-clay"></span>
          <div class="blob"></div>
        </div>
      </div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="sec-head">
        <span class="sec-kicker">01 · 关于</span>
        <h2>${esc(d.aboutTitle)}</h2>
      </div>
      <div class="about-grid">
        <div class="about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        <div class="stats">
          ${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="sec">
    <div class="container">
      <div class="sec-head">
        <span class="sec-kicker">02 · 服务</span>
        <h2>服务项目</h2>
      </div>
      <div class="services">
        ${(d.services || []).map((s) => `
        <article class="service">
          <span class="service-dot" aria-hidden="true"></span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.desc)}</p>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="works" class="sec">
    <div class="container">
      <div class="sec-head">
        <span class="sec-kicker">03 · 作品</span>
        <h2>一些做过的项目</h2>
      </div>
      <div class="works">
        ${(d.projects || []).map((p, i) => `
        <article class="work">
          <div class="work-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</div>
          <div class="work-body">
            <div class="work-meta"><span class="work-year">${esc(p.year)}</span><span class="work-tags">${terms(p.stack)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="life" class="sec">
    <div class="container">
      <div class="life-card">
        <div class="sec-head life-head">
          <span class="sec-kicker">04 · 生活</span>
          <h2>${esc(d.lifeTitle)}</h2>
        </div>
        <div class="notes">
          ${(d.notes || []).map((n) => `<p class="note"><span class="note-dot" aria-hidden="true"></span>${esc(n.text)}</p>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="sec">
    <div class="container">
      <div class="contact-card">
        <h2>来聊聊</h2>
        <p>${esc(d.contactSub)}</p>
        <a class="btn btn-light" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
      </div>
    </div>
  </section>

  <footer><div class="container">${esc(d.footer)}</div></footer>`
  },

  css: `
:root{--bg:#FAF3EC;--bg-2:#F4ECE2;--card:#FFFDF9;--fg:#3E3529;--fg-2:#6B5C4B;--muted:#7A6A58;--primary:#A05E2E;--primary-soft:#C08552;--primary-ink:#8A4F23;--sage:#8A9B7A;--sage-soft:#E7EBDE;--border:#EADFD2;--on-primary:#FFFDF9;--on-primary-2:#F9EFE3;--radius:18px;--radius-lg:24px;--radius-xl:32px;--shadow-sm:0 1px 2px rgba(122,84,44,.04),0 2px 8px rgba(122,84,44,.05);--shadow:0 18px 44px rgba(122,84,44,.10),0 4px 14px rgba(122,84,44,.06);--nav-bg:rgba(250,243,236,.92);--badge-bg:rgba(255,253,249,.55);--badge-border:rgba(138,79,35,.28);--tag-bg:rgba(255,253,249,.6);--blob-bg:rgba(138,155,122,.32);--btn-hover-bg:#FFFFFF;--hero-bg:linear-gradient(140deg,#F8EDDC 0%,#F4E7D2 55%,#EFDEC3 100%);--orb-bg:linear-gradient(160deg,#C08552 0%,#A05E2E 100%);--contact-bg:linear-gradient(150deg,#B0713F 0%,#9A5A2E 60%,#8A4F23 100%);--font-display:Georgia,'Times New Roman','Songti SC','Noto Serif SC','SimSun',serif;--font-sans:'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;--font-mono:'JetBrains Mono',ui-monospace,Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.75;background:var(--bg);color:var(--fg);-webkit-font-smoothing:antialiased}
section{scroll-margin-top:76px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--primary-ink);outline-offset:2px;border-radius:6px}
.container{max-width:1020px;margin:0 auto;padding:0 28px}
.nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;height:64px;gap:24px}
.logo{font-family:var(--font-display);font-weight:700;font-size:19px;letter-spacing:.5px}
.logo::after{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--sage);margin-left:8px}
.links{display:flex;gap:4px;margin-left:auto}
.links a{font-size:14.5px;color:var(--fg-2);padding:8px 14px;border-radius:999px;transition:background .18s ease,color .18s ease}
.links a:hover{background:var(--bg-2);color:var(--primary-ink)}
.hero{padding:52px 0 24px}
.hero-card{display:grid;grid-template-columns:1.35fr .65fr;gap:40px;align-items:center;background:var(--hero-bg);border:1px solid var(--border);border-radius:var(--radius-xl);padding:64px 56px;box-shadow:var(--shadow)}
.hero-text{position:relative;z-index:1}
.badge{display:inline-block;font-size:13px;letter-spacing:1.5px;color:var(--primary-ink);border:1px solid var(--badge-border);background:var(--badge-bg);padding:6px 16px;border-radius:999px;margin-bottom:26px}
.hero h1{font-family:var(--font-display);font-size:clamp(42px,6vw,64px);line-height:1.1;letter-spacing:.5px;color:var(--fg)}
.hero h1 .role{display:block;font-family:var(--font-sans);font-size:.4em;font-weight:600;color:var(--primary-ink);margin-top:16px;letter-spacing:1px}
.lead{color:var(--fg-2);font-size:17px;line-height:1.85;max-width:36em;margin-top:22px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.tag{font-size:13px;color:var(--fg-2);border:1px solid var(--border);background:var(--tag-bg);padding:5px 14px;border-radius:999px}
.btn{display:inline-block;background:var(--primary);color:var(--on-primary);font-size:15px;font-weight:600;padding:14px 30px;border-radius:999px;border:1px solid transparent;box-shadow:var(--shadow-sm);margin-top:34px;transition:transform .18s ease,background .18s ease,box-shadow .18s ease}
.btn:hover{background:var(--primary-ink);transform:translateY(-2px);box-shadow:var(--shadow)}
.hero-art{position:relative;height:280px}
.orb{position:absolute;top:22px;right:30px;width:176px;height:176px;border-radius:50%;background:var(--orb-bg);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center}
.orb span{font-family:var(--font-display);font-size:64px;color:var(--on-primary)}
.dot{position:absolute;border-radius:50%}
.dot-sage{width:22px;height:22px;background:var(--sage);top:64px;left:14px}
.dot-clay{width:13px;height:13px;background:var(--primary-soft);bottom:52px;right:14px}
.blob{position:absolute;bottom:26px;left:6px;width:118px;height:58px;border-radius:22px;background:var(--blob-bg);transform:rotate(-8deg)}
.sec{padding:88px 0}
.sec-head{margin-bottom:42px;max-width:680px}
.sec-kicker{display:block;font-size:12.5px;font-weight:600;letter-spacing:2.5px;color:var(--primary-ink);margin-bottom:12px}
.sec-head h2{font-family:var(--font-display);font-size:clamp(26px,3.6vw,38px);line-height:1.25;letter-spacing:.5px}
.about-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:56px;align-items:start}
.about-text p{color:var(--fg-2);font-size:16px;line-height:1.85;margin-bottom:18px}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.stat{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:24px 22px;box-shadow:var(--shadow-sm)}
.stat b{display:block;font-family:var(--font-display);font-size:34px;font-weight:700;color:var(--primary);margin-bottom:6px;font-variant-numeric:tabular-nums}
.stat span{font-size:13px;color:var(--muted)}
.services{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.service{background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:30px 28px;box-shadow:var(--shadow-sm);transition:transform .2s ease,box-shadow .2s ease}
.service:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.service-dot{display:block;width:11px;height:11px;border-radius:50%;margin-bottom:18px}
.service:nth-child(odd) .service-dot{background:var(--primary-soft)}
.service:nth-child(even) .service-dot{background:var(--sage)}
.service h3{font-family:var(--font-display);font-size:19px;font-weight:700;margin-bottom:8px}
.service p{color:var(--fg-2);font-size:15px;line-height:1.75}
.works{display:flex;flex-direction:column;gap:16px}
.work{display:grid;grid-template-columns:56px 1fr;gap:22px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:30px;box-shadow:var(--shadow-sm);transition:transform .2s ease,box-shadow .2s ease}
.work:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.work-num{font-family:var(--font-display);font-size:22px;color:var(--primary-soft);padding-top:2px}
.work-meta{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px}
.work-year{font-size:12.5px;font-weight:600;letter-spacing:1px;color:var(--primary-ink)}
.work-tags{display:flex;gap:8px;flex-wrap:wrap}
.work-tags .tag{font-size:12px;padding:3px 11px;background:transparent}
.work-body h3{font-family:var(--font-display);font-size:21px;margin-bottom:8px}
.work-body p{color:var(--fg-2);font-size:15px;line-height:1.75;max-width:58ch}
.life-card{background:var(--sage-soft);border:1px solid var(--border);border-radius:var(--radius-xl);padding:56px 52px;box-shadow:var(--shadow-sm)}
.life-head{margin-bottom:30px}
.notes{display:flex;flex-direction:column;gap:18px}
.note{display:flex;gap:14px;align-items:baseline;font-family:var(--font-display);font-size:19px;line-height:1.7;color:var(--fg)}
.note-dot{flex:none;width:9px;height:9px;border-radius:50%;background:var(--sage);transform:translateY(-3px)}
.contact-card{background:var(--contact-bg);border-radius:var(--radius-xl);padding:72px 48px;text-align:center;color:var(--on-primary);box-shadow:var(--shadow)}
.contact-card h2{font-family:var(--font-display);font-size:clamp(30px,4vw,44px);font-weight:700;margin-bottom:16px;color:var(--on-primary)}
.contact-card p{color:var(--on-primary-2);font-size:17px;line-height:1.8;max-width:38em;margin:0 auto 30px}
.btn-light{background:var(--on-primary);color:var(--primary-ink);margin-top:0}
.btn-light:hover{background:var(--btn-hover-bg);color:var(--primary)}
footer{padding:38px 0 50px;text-align:center;font-size:13px;color:var(--muted)}
@media(max-width:900px){
  .hero-card{grid-template-columns:1fr;gap:8px;padding:48px 36px}
  .hero-art{position:static;height:auto;display:flex;justify-content:center;margin-bottom:26px;order:-1}
  .orb{position:static;width:112px;height:112px;border-radius:50%}
  .orb span{font-size:40px}
  .dot,.blob{display:none}
  .about-grid{grid-template-columns:1fr;gap:40px}
  .services{grid-template-columns:1fr}
  .work{grid-template-columns:1fr;gap:12px}
  .work-num{display:none}
  .life-card{padding:44px 34px}
  .contact-card{padding:56px 32px}
  .links a:not(:first-child):not(:nth-child(2)){display:none}
}
@media(max-width:560px){
  .hero{padding:28px 0 8px}
  .hero-card{padding:38px 24px;border-radius:var(--radius-lg)}
  .hero h1 .role{font-size:.46em}
  .lead{font-size:16px}
  .btn{width:100%;text-align:center}
  .sec{padding:64px 0}
  .stats{grid-template-columns:repeat(2,1fr);gap:10px}
  .stat{padding:20px 16px}
  .stat b{font-size:28px}
  .service{padding:26px 22px}
  .work{padding:24px 20px}
  .life-card{padding:38px 24px;border-radius:var(--radius-lg)}
  .note{font-size:17px}
  .contact-card{padding:48px 24px;border-radius:var(--radius-lg)}
}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`,
}
