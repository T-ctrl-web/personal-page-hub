/**
 * 模板 04：Bento 网格 · 个人主页
 * 苹果官网式模块化圆角卡片网格：大小卡片错落拼接、浅灰底 + 品牌蓝 + 青橙点缀，数据感与工程感兼具。适合开发者、产品经理、数据从业者。
 */
import { esc } from '../engine/export.js'
import { avatarHtml, avatarGeoCss } from './avatar.js'

export default {
  id: 'bento-grid',
  name: 'Bento 网格 · 开发者',
  tagline: '模块化卡片网格 · 蓝橙青点缀的极客作品集',
  category: '作品集',
  style: 'Bento 网格',
  description: '苹果官网式模块化卡片网格：大小卡片错落拼接、浅灰底配品牌蓝与青橙点缀，克制阴影与圆角透着工程与数据感。适合工程师、产品经理与数据从业者的作品集。',
  cover: 'linear-gradient(160deg,#F5F7FA 0%,#DBEAFE 60%,#BFDBFE 100%)',
  coverEmoji: '🧩',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'avatar', label: '头像图片 URL', hint: '选填；填了显示照片，留空显示抽象几何头像' },
        { key: 'role', label: '一句话定位' },
        { key: 'badge', label: '徽章/标签', hint: '如：全栈工程师 · 深圳' },
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
      group: '技能（技术栈）',
      list: {
        key: 'skills',
        itemLabel: '技能',
        fields: [{ key: 'title', label: '名称' }, { key: 'desc', label: '说明' }],
      },
    },
    {
      group: '正在做',
      list: {
        key: 'doing',
        itemLabel: '事项',
        fields: [{ key: 'title', label: '标题', hint: '可加 emoji 前缀' }, { key: 'desc', label: '说明' }],
      },
    },
    {
      group: '项目经历',
      list: {
        key: 'projects',
        itemLabel: '项目',
        fields: [
          { key: 'title', label: '项目名称' },
          { key: 'year', label: '年份' },
          { key: 'desc', label: '描述', type: 'textarea' },
          { key: 'stack', label: '技术栈', type: 'tags' },
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
    name: '顾清和',
    avatar: '',
    role: '全栈工程师 · 独立产品人',
    badge: '前大厂资深工程师 · 现居深圳',
    desc: '我写代码，也定义产品。七年全栈经验，从日活千万的 B 端平台到自己的独立小产品，始终相信「把一件事做到极致的简单」。',
    chips: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Rust', '产品设计'],
    aboutTitle: '关于我 —— 在工程与产品之间',
    about: [
      { text: '七年全栈开发与产品经验：在头部 SaaS 公司主导过数据中台与低代码平台的架构，也独立上线过三个小产品，累计服务用户 4 万+。' },
      { text: '我享受「把一个模糊想法变成可用系统」的完整闭环：从需求拆解、数据建模到前端体验，习惯自己走完全程。' },
      { text: '业余维护开源项目，偶尔写技术博客；相信清晰的代码与克制的界面，是同一件事的两面。' },
    ],
    stats: [
      { num: '7', lbl: '年全栈经验' },
      { num: '3', lbl: '独立产品' },
      { num: '4w+', lbl: '产品用户' },
      { num: '1.2k', lbl: 'GitHub Stars' },
    ],
    skills: [
      { title: 'TypeScript / React', desc: '组件化架构 · 性能优化 · 前端工程化' },
      { title: 'Node.js / 服务端', desc: '微服务 · 数据建模 · 高并发接口设计' },
      { title: 'Rust / 工具链', desc: 'CLI 工具 · 性能敏感模块 · 嵌入式脚本' },
    ],
    doing: [
      { title: '🚀 独立产品「一刻」', desc: '极简灵感记录工具，周活 8k，正在打磨订阅版。' },
      { title: '📦 开源任务调度器', desc: '基于 Rust 重写中，目标 10ms 级调度延迟。' },
    ],
    projects: [
      { title: '数据中台重构', year: '2024', desc: '主导头部 SaaS 数据中台从单体到微服务的演进，查询性能提升 8 倍，支撑 20+ 业务线。', stack: ['TypeScript', 'Node.js', 'ClickHouse'] },
      { title: '低代码搭建平台', year: '2022', desc: '自研可视化搭建引擎，拖拽即生成业务页面，内部 300+ 应用在跑，搭建效率提升 5 倍。', stack: ['React', 'DnD', 'GraphQL'] },
      { title: '「一刻」灵感记录', year: '2025', desc: '独立开发的跨端灵感记录产品，离线优先 + 本地优先同步，上线 8 个月累计用户 4 万。', stack: ['Rust', 'React Native', 'SQLite'] },
    ],
    contactSub: '正在寻找下一个有趣的合作：独立产品、技术顾问，或是加入你的团队。',
    email: 'guqinghe@example.com',
    github: 'github.com/guqinghe',
    footer: '© 2026 顾清和 · 设计与工程',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    return `
<nav class="nav">
  <div class="nav-inner">
    <a class="logo" href="#top">${esc(d.name)}<span class="logo-dot">.</span></a>
    <div class="nav-links">
      <a href="#about">关于</a><a href="#skills">技术栈</a><a href="#projects">项目</a><a href="#contact">联系</a>
    </div>
  </div>
</nav>

<div class="bento">

  <header class="hero" id="top">
    <div class="hero-body">
      <span class="badge">${esc(d.badge)}</span>
      <h1>${esc(d.name)}</h1>
      <p class="hero-role">${esc(d.role)}</p>
      <p class="hero-desc">${esc(d.desc)}</p>
      <div class="hero-actions">
        <a class="btn btn-solid" href="mailto:${esc(d.email)}">联系我</a>
        <a class="btn btn-ghost" href="#projects">看看作品</a>
      </div>
      <div class="hero-chips">${terms(d.chips)}</div>
    </div>
    ${avatarHtml(d.avatar, d.name, 'avatar')}
  </header>

  <section class="card about" id="about">
    <h2 class="card-title"><span class="tick"></span>${esc(d.aboutTitle)}</h2>
    <div class="about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
  </section>

  <aside class="card stats-card">
    <div class="stats-grid">
      ${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
    </div>
  </aside>

  <section class="card skill-card" id="skills">
    <h2 class="card-title"><span class="tick"></span>技术栈</h2>
    <ul class="skill-list">
      ${(d.skills || []).map((s) => `<li><span class="dot" aria-hidden="true"></span><div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div></li>`).join('')}
    </ul>
  </section>

  <section class="card doing-card" id="doing">
    <h2 class="card-title"><span class="tick"></span>正在做</h2>
    <ol class="doing-list">
      ${(d.doing || []).map((x, i) => `<li><span class="doing-idx">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p></div></li>`).join('')}
    </ol>
  </section>

  <section class="card contact-card" id="contact">
    <h2 class="card-title"><span class="tick"></span>联系我</h2>
    <p class="contact-sub">${esc(d.contactSub)}</p>
    <div class="contact-links">
      <a class="btn btn-light" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
      <a class="btn btn-light-ghost" href="https://${esc(d.github)}" target="_blank" rel="noopener">${esc(d.github)}</a>
    </div>
  </section>

  <section class="card projects-card" id="projects">
    <div class="projects-head">
      <h2 class="card-title"><span class="tick"></span>项目经历</h2>
      <span class="count">${String((d.projects || []).length).padStart(2, '0')} 个</span>
    </div>
    <div class="projects-inner">
      ${(d.projects || []).map((p) => `
      <article class="project">
        <span class="project-year">${esc(p.year)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="tags">${terms(p.stack)}</div>
      </article>`).join('')}
    </div>
  </section>

</div>

<footer><div class="foot">${esc(d.footer)}</div></footer>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  var secs = [].slice.call(links).map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  function onScroll() {
    var cur = secs[0];
    for (var i = 0; i < secs.length; i++) { if (secs[i].getBoundingClientRect().top <= 140) cur = secs[i]; }
    [].forEach.call(links, function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur.id); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
</script>`
  },

  css: `
:root{
  --bg:#F5F7FA;--bg-2:#EEF2F8;
  --card:#FFFFFF;
  --fg:#1F2937;--fg-2:#4B5563;--muted:#64748B;
  --primary:#2563EB;--primary-strong:#1D4ED8;--primary-deep:#1E3A8A;
  --accent:#0EA5E9;--accent-ink:#0C4A6E;--accent-ink-2:#155E75;--accent-deep:#0369A1;--accent-soft:#E0F2FE;
  --orange:#C2410C;--orange-deep:#9A3412;
  --border:#E4E9F1;--border-2:#D5DCE8;
  --radius-lg:20px;--radius-md:16px;--radius-sm:12px;--radius-pill:999px;
  --shadow-1:0 1px 2px rgba(15,23,42,.04),0 2px 6px rgba(15,23,42,.05);
  --shadow-2:0 14px 30px -10px rgba(30,64,175,.20);
  --shadow-cta:0 8px 18px -8px rgba(30,64,175,.5);
  --shadow-avatar:0 12px 28px -8px rgba(15,23,42,.35);
  --primary-soft:rgba(37,99,235,.08);
  --white-08:rgba(255,255,255,.08);
  --white: #FFFFFF;
  --white-90:rgba(255,255,255,.9);
  --white-35:rgba(255,255,255,.35);
  --amber-soft:#FEF3C7;
  --accent-border:#BFDBFE;
  --bg-grad:linear-gradient(180deg,#F7F9FC 0%,#EEF2F8 100%);
  --hero-grad:linear-gradient(135deg,#2563EB 0%,#1D4ED8 55%,#1E3A8A 100%);
  --contact-grad:linear-gradient(135deg,#C2410C 0%,#9A3412 100%);
  --avatar-grad:linear-gradient(135deg,#38BDF8 0%,#2563EB 100%);
  --white-92:rgba(255,255,255,.92);--white-75:rgba(255,255,255,.75);--white-40:rgba(255,255,255,.4);--white-14:rgba(255,255,255,.14);
  --font-display:'Space Grotesk','Poppins','Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;
  --font-sans:'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,'SF Mono',Consolas,monospace;
  --dur:200ms;--ease:cubic-bezier(.22,.61,.36,1);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--bg-grad);color:var(--fg);-webkit-font-smoothing:antialiased}
section,header{scroll-margin-top:84px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:4px}

/* 导航 */
.nav{position:sticky;top:0;z-index:60;background:var(--white-90);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav-inner{max-width:1120px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:62px;gap:24px}
.logo{font-family:var(--font-display);font-weight:700;font-size:17px;letter-spacing:.2px}
.logo .logo-dot{color:var(--primary)}
.nav-links{display:flex;gap:4px;margin-left:auto}
.nav-links a{font-size:14px;color:var(--fg-2);padding:8px 13px;border-radius:var(--radius-sm);transition:color var(--dur) var(--ease),background var(--dur) var(--ease)}
.nav-links a:hover{color:var(--primary)}
.nav-links a.active{color:var(--primary);background:var(--primary-soft)}

/* Bento 网格 */
.bento{max-width:1120px;margin:44px auto 0;padding:0 24px;display:grid;grid-template-columns:repeat(6,1fr);gap:18px;align-items:stretch}
.hero{grid-column:1/-1;background:var(--hero-grad);border-radius:var(--radius-lg);box-shadow:var(--shadow-1);padding:44px 48px;display:flex;align-items:center;gap:44px;position:relative;overflow:hidden;animation:hero-in .55s var(--ease) both}
.hero::before{content:"";position:absolute;right:-90px;bottom:-120px;width:300px;height:300px;border-radius:50%;background:var(--white-08);pointer-events:none}
.hero-body{position:relative;z-index:1;flex:1;min-width:0}
.badge{display:inline-block;font-size:12.5px;letter-spacing:1.5px;color:var(--white-92);border:1px solid var(--white-40);background:var(--white-14);padding:5px 14px;border-radius:var(--radius-pill);margin-bottom:20px;font-family:var(--font-mono)}
.hero h1{font-family:var(--font-display);font-size:clamp(36px,5vw,56px);font-weight:800;line-height:1.2;letter-spacing:-.5px;color:var(--white);margin-bottom:8px;animation:fadeUp .7s ease-out both}
.hero-role{font-size:18px;font-weight:600;color:var(--white-92);margin-bottom:14px;animation:fadeUp .7s ease-out both;animation-delay:.12s}
.hero-desc{font-size:16px;line-height:1.75;color:var(--white-92);max-width:46ch;margin-bottom:26px;animation:fadeUp .7s ease-out both;animation-delay:.24s}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px}
.hero-chips{display:flex;flex-wrap:wrap;gap:8px}
.avatar{position:relative;z-index:1;flex-shrink:0;width:128px;height:128px;border-radius:50%;overflow:hidden;border:3px solid var(--white-35);box-shadow:var(--shadow-avatar);--geo-a:#38BDF8;--geo-b:#2563EB;--geo-c:#1D4ED8}
${avatarGeoCss('avatar')}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 22px;border-radius:var(--radius-pill);font-size:15px;font-weight:600;letter-spacing:.3px;transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),background var(--dur) var(--ease),color var(--dur) var(--ease)}
.btn:hover{transform:translateY(-2px)}
.btn-solid{background:var(--primary);color:var(--white);box-shadow:var(--shadow-cta)}
.btn-solid:hover{background:var(--primary-strong)}
.btn-ghost{background:transparent;color:var(--white-92);border:1px solid var(--white-40)}
.btn-ghost:hover{background:var(--white-14)}
.btn-light{background:var(--white);color:var(--orange-deep)}
.btn-light:hover{background:var(--amber-soft);color:var(--orange-deep)}
.btn-light-ghost{background:var(--white-14);color:var(--white);border:1px solid var(--white-40)}
.btn-light-ghost:hover{background:var(--white-75);color:var(--orange-deep)}

/* 通用卡片 */
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-1);padding:28px;transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease)}
.card:hover{transform:translateY(-3px);box-shadow:var(--shadow-2)}
.card-title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:19px;font-weight:700;letter-spacing:-.2px;margin-bottom:18px}
.card-title .tick{width:8px;height:18px;border-radius:3px;background:var(--primary);flex-shrink:0}

/* 关于（宽卡 span 4） */
.about{grid-column:span 4}
.about-text p{font-size:16px;line-height:1.85;color:var(--fg-2);margin-bottom:14px;max-width:58ch}
.about-text p:last-child{margin-bottom:0}

/* 统计（窄卡 span 2） */
.stats-card{grid-column:span 2;display:flex}
.stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%;align-content:center}
.stat b{display:block;font-family:var(--font-mono);font-size:28px;font-weight:700;color:var(--primary);letter-spacing:-.5px;font-variant-numeric:tabular-nums;line-height:1.1}
.stat span{font-size:12.5px;color:var(--muted);line-height:1.4;display:block;margin-top:4px}

/* 技术栈（span 2） */
.skill-card{grid-column:span 2}
.skill-list{list-style:none;display:flex;flex-direction:column;gap:16px}
.skill-list li{display:flex;gap:12px;align-items:flex-start}
.skill-list .dot{flex-shrink:0;width:8px;height:8px;border-radius:50%;background:var(--accent);margin-top:8px}
.skill-list h3{font-size:15.5px;font-weight:700;margin-bottom:3px}
.skill-list p{font-size:13.5px;color:var(--muted);line-height:1.6}

/* 正在做（青色点缀卡 span 2） */
.doing-card{grid-column:span 2;background:var(--accent-soft);border-color:var(--accent-border)}
.doing-card .card-title{color:var(--accent-ink)}
.doing-list{list-style:none;display:flex;flex-direction:column;gap:18px;counter-reset:doing}
.doing-list li{display:flex;gap:14px;align-items:flex-start}
.doing-idx{flex-shrink:0;font-family:var(--font-mono);font-size:13px;font-weight:700;color:var(--accent-deep);padding-top:3px;font-variant-numeric:tabular-nums}
.doing-list h3{font-size:15.5px;font-weight:700;color:var(--accent-ink);margin-bottom:3px}
.doing-list p{font-size:13.5px;color:var(--accent-ink-2);line-height:1.6}

/* 联系（深橙渐变卡 span 2） */
.contact-card{grid-column:span 2;background:var(--contact-grad);border:none;color:var(--white);display:flex;flex-direction:column}
.contact-card .card-title{color:var(--white)}
.contact-card .tick{background:var(--white-92)}
.contact-sub{font-size:14.5px;line-height:1.7;color:var(--white-92);margin-bottom:20px}
.contact-links{display:flex;flex-direction:column;gap:10px;margin-top:auto}
.contact-links .btn{width:100%;justify-content:flex-start;min-height:44px}

/* 项目（全宽卡 span 6） */
.projects-card{grid-column:1/-1}
.projects-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.projects-head .card-title{margin-bottom:0}
.count{font-family:var(--font-mono);font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums}
.projects-inner{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.project{background:var(--card);border:1px solid var(--border);border-radius:var(--radius-md);padding:22px;display:flex;flex-direction:column;transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),border-color var(--dur) var(--ease)}
.project:hover{transform:translateY(-3px);box-shadow:var(--shadow-2);border-color:var(--border-2)}
.project-year{font-family:var(--font-mono);font-size:12.5px;font-weight:600;color:var(--primary);letter-spacing:1px;margin-bottom:10px;font-variant-numeric:tabular-nums}
.project h3{font-family:var(--font-display);font-size:17px;font-weight:700;margin-bottom:8px;letter-spacing:-.2px}
.project p{font-size:14.5px;line-height:1.7;color:var(--fg-2);margin-bottom:14px;flex:1}
.tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-size:12.5px;color:var(--fg-2);border:1px solid var(--border);padding:3px 10px;border-radius:var(--radius-pill);line-height:1.5}

/* 页脚 */
footer{padding:34px 24px 44px}
.foot{max-width:1120px;margin:0 auto;text-align:center;font-size:13px;color:var(--muted)}

@keyframes hero-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

@media(max-width:900px){
  .bento{margin-top:28px}
  .hero{padding:36px 32px;gap:28px}
  .avatar{width:104px;height:104px}
  .about{grid-column:1/-1}
  .stats-card{grid-column:span 3}
  .skill-card{grid-column:span 3}
  .doing-card{grid-column:span 3}
  .contact-card{grid-column:span 3}
  .projects-inner{grid-template-columns:1fr}
  .nav-links{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;max-width:100%;mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent);-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent)}
  .nav-links::-webkit-scrollbar{display:none}
  .nav-links a{white-space:nowrap;flex-shrink:0}
}
@media(max-width:560px){
  .bento{padding:0 16px;gap:14px}
  .hero{flex-direction:column;align-items:flex-start;padding:32px 24px;gap:24px}
  .hero-actions{width:100%}
  .hero-actions .btn{flex:1}
  .avatar{width:88px;height:88px}
  .about,.stats-card,.skill-card,.doing-card,.contact-card{grid-column:1/-1}
  .stats-grid{grid-template-columns:repeat(2,1fr)}
  .card{padding:22px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
  .card:hover,.project:hover,.btn:hover{transform:none}
}`,
}
