/**
 * 模板 04：暗色高级感 · 个人主页
 * 近黑背景 + 单一霓虹青强调 + 克制微光 + 终端/等宽数字质感。独立游戏开发者、技术美术与前沿技术从业者。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'dark-premium',
  name: '暗夜霓青 · 独立开发者',
  tagline: '近黑背景 + 单一霓虹青强调的克制高级感',
  category: '作品集',
  style: '暗色高级感',
  description: '近黑背景、深灰细描边卡片与单一霓虹青强调，发光仅落在 Hero 标题与主 CTA 上。适合独立游戏开发者、技术美术与前沿技术从业者。',
  cover: 'linear-gradient(160deg,#101014 0%,#17171C 45%,#0B1B1E 100%)',
  coverEmoji: '🕹️',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'nameEn', label: '英文名', hint: 'Hero 顶部辅助文字' },
        { key: 'badge', label: '徽章/标签', hint: '如：独立开发者 · 上海' },
        { key: 'role', label: '一句话定位（Hero 渐变）' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技术关键词', type: 'tags' },
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
          { key: 'stack', label: '技术栈', type: 'tags' },
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
    name: '祁砚舟',
    nameEn: 'KYAN QI',
    badge: '独立游戏开发者 · 现居上海',
    role: '在引擎里长出一个世界',
    desc: '我写渲染代码，也画第一束光。白天研究实时渲染与程序化生成，晚上把想法做成可玩的 Demo——相信一个好的 Demo，胜过十页方案。',
    chips: ['WebGPU', 'Vulkan', '程序化生成', 'Rust', '关卡设计'],
    aboutTitle: 'About — 引擎里长出的世界',
    about: [
      { text: '游戏是技术与审美的交界。我写渲染管线，也做程序化生成——让代码长出城市、雾气与光，而不是手摆每一个模型。' },
      { text: '八年间从引擎工具到独立开发，坚持把每个项目拆成可验证的小目标；开源是我与世界对话的方式，工具被更多人用，才算真正完成。' },
      { text: '不迷信技术本身，迷信被玩到的东西。做出一个让人愿意停下来多看一秒的画面，就是我工作的全部意义。' },
    ],
    stats: [
      { num: '8', lbl: '年游戏开发' },
      { num: '2.3k', lbl: 'GitHub Stars' },
      { num: '60+', lbl: '团队采用工具' },
      { num: '6', lbl: '款独立作品' },
    ],
    skills: [
      { title: '实时渲染', desc: 'WebGPU / Vulkan 渲染管线、光照与后期' },
      { title: '程序化生成', desc: 'PCG、体素地形、规则化城市与雾气系统' },
      { title: '引擎工具', desc: '关卡编辑器、资源管线、自动化构建' },
      { title: '独立开发', desc: '从原型、美术到发行的一条龙实践' },
    ],
    projects: [
      { title: '《雾港》', year: '2025 — 开发中', desc: '程序化生成的侦探城市：12km² 街道网格由规则生长，昼夜雾气由体积光照实时驱动；首个 Demo 播放量破百万。', stack: ['WebGPU', 'PCG', '体积雾'] },
      { title: 'VoxelFlow', year: '2024', desc: '开源体素地形工具，Vulkan 内核支持实时雕刻与导出；被 60+ 独立团队用于原型阶段，现为个人最活跃的仓库。', stack: ['Vulkan', 'Rust', 'ImGui'] },
      { title: '帧间 Framecraft', year: '2023', desc: '浏览器内运行的轻量关卡编辑器，支持场景版本协作与一键导出；将团队原型周期从两周压缩到两天。', stack: ['TypeScript', 'WebGL'] },
    ],
    timeline: [
      { when: '2023 — 至今', title: '独立游戏开发', desc: '全职开发《雾港》与 VoxelFlow，作品全部开源。' },
      { when: '2020 — 2023', title: '星弦互娱 · 渲染工程师', desc: '负责次世代渲染管线与工具链，两次 Global Game Jam 获奖。' },
      { when: '2017', title: '计算机科学 · 引擎方向', desc: '毕业项目为自制引擎渲染器，获学院年度最佳。' },
    ],
    contactSub: '如果你在做游戏、写引擎，或只是想聊聊程序化生成——欢迎来信。',
    email: 'kyan@example.com',
    github: 'github.com/kyanqi',
    footer: '© 2026 祁砚舟 KYAN QI — 独立游戏开发者 · 上海',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    const stackShort = (d.chips || []).slice(0, 3).map((t) => `"${esc(t)}"`).join(', ')
    const secNo = ['01', '02', '03', '04']
    return `
  <nav class="nav">
    <div class="container">
      <a class="logo" href="#top"><i class="sq" aria-hidden="true"></i>${esc(d.name)}</a>
      <div class="links">
        <a href="#about">关于</a><a href="#skills">能力</a><a href="#works">项目</a><a href="#journal">历程</a><a href="mailto:${esc(d.email)}">联系</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <div class="hero-top">
        <span class="badge"><i class="pulse" aria-hidden="true"></i>${esc(d.badge)}</span>
        <span class="hero-en">/${esc(d.nameEn)}</span>
      </div>
      <h1>${esc(d.name)}</h1>
      <p class="role-line glow">${esc(d.role)}</p>
      <p class="lead">${esc(d.desc)}</p>
      <div class="actions">
        <a class="btn" href="#works">查看项目</a>
        <a class="btn-ghost" href="mailto:${esc(d.email)}">写信给我</a>
      </div>
      <div class="chips">${terms(d.chips)}</div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="sec-head"><span class="sec-no">${secNo[0]}</span><h2>${esc(d.aboutTitle)}</h2></div>
      <div class="about-grid">
        <div class="about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        <div class="term" aria-hidden="true">
          <div class="term-bar">
            <i class="dot"></i><i class="dot"></i><i class="dot"></i>
            <span class="term-title">profile.sh</span>
          </div>
          <pre><code><span class="tc-dim">$</span> ./profile --json
{
  <span class="tc-k">"name"</span>: <span class="tc-s">"${esc(d.name)}"</span>,
  <span class="tc-k">"role"</span>: <span class="tc-s">"${esc(d.role)}"</span>,
  <span class="tc-k">"base"</span>: <span class="tc-s">"${esc(d.email)}"</span>,
  <span class="tc-k">"stack"</span>: [${stackShort}]
}</code></pre>
        </div>
      </div>
      <div class="stats">
        ${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
      </div>
    </div>
  </section>

  <section id="skills" class="sec">
    <div class="container">
      <div class="sec-head"><span class="sec-no">${secNo[1]}</span><h2>能力</h2></div>
      <div class="skills">
        ${(d.skills || []).map((s, i) => `
        <div class="skill">
          <span class="skill-no">${String(i + 1).padStart(2, '0')}</span>
          <div class="skill-body">
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.desc)}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="works" class="sec">
    <div class="container">
      <div class="sec-head"><span class="sec-no">${secNo[2]}</span><h2>项目</h2></div>
      <div class="projects">
        ${(d.projects || []).map((p) => `
        <article class="project">
          <span class="project-year">${esc(p.year)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="tags">${terms(p.stack)}</div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="journal" class="sec">
    <div class="container">
      <div class="sec-head"><span class="sec-no">${secNo[3]}</span><h2>历程</h2></div>
      <div class="timeline">
        ${(d.timeline || []).map((t) => `
        <div class="tl">
          <span class="tl-when">${esc(t.when)}</span>
          <div class="tl-body">
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.desc)}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="contact" class="sec contact-sec">
    <div class="container">
      <h2>Let&apos;s build something</h2>
      <p>${esc(d.contactSub)}</p>
      <div class="contact-links">
        <a class="email" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
        <a class="gh" href="https://${esc(d.github)}" target="_blank" rel="noopener">${esc(d.github)}</a>
      </div>
    </div>
  </section>

  <footer><div class="container">${esc(d.footer)}</div></footer>

  <script>
    (function () {
      var links = document.querySelectorAll('.nav a[href^="#"]')
      var secs = []
      for (var i = 0; i < links.length; i++) {
        var el = document.querySelector(links[i].getAttribute('href'))
        if (el) secs.push(el)
      }
      function onScroll() {
        var y = window.scrollY + 120
        var cur = ''
        for (var j = 0; j < secs.length; j++) { if (secs[j].offsetTop <= y) cur = secs[j].id }
        for (var k = 0; k < links.length; k++) {
          links[k].classList.toggle('active', links[k].getAttribute('href') === '#' + cur)
        }
        document.querySelector('.nav').classList.toggle('scrolled', y > 40)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    })()
  </script>`
  },

  css: `
:root{
  --bg:#0A0A0B;--bg-2:#0E0E11;--card:#17171C;--card-2:#1B1B21;--term-bg:#0D0D10;
  --fg:#EDEDEF;--fg-2:#B9B9C2;--muted:#8B8B95;
  --accent:#22D3EE;--accent-strong:#3ADCF4;--accent-soft:#E8FDFF;--accent-deep:#0EA5C9;
  --accent-dim:rgba(34,211,238,.14);--accent-40:rgba(34,211,238,.4);--glow:rgba(34,211,238,.05);
  --on-accent:#06252C;--dot:#3A3A44;--nav-bg:rgba(10,10,11,.82);
  --border:#26262E;--border-2:#2E2E38;
  --radius:14px;--radius-sm:8px;
  --shadow-card:0 1px 0 rgba(255,255,255,.03),0 10px 30px rgba(0,0,0,.35);--shadow-nav:0 8px 30px rgba(0,0,0,.4);
  --dur:200ms;--ease:cubic-bezier(.22,.61,.36,1);
  --font-display:'Space Grotesk','Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;
  --font-sans:'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;
  --font-mono:'JetBrains Mono','Cascadia Code',ui-monospace,Consolas,monospace
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg);-webkit-font-smoothing:antialiased}
body::before{content:'';position:fixed;inset:0;background:radial-gradient(58% 42% at 72% 0%,var(--glow),transparent 70%);pointer-events:none;z-index:0}
section{scroll-margin-top:70px}
a{color:inherit;text-decoration:none}
::selection{background:var(--accent-dim)}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}
.container{max-width:1000px;margin:0 auto;padding:0 28px;position:relative;z-index:1}
.nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--border);transition:box-shadow var(--dur) var(--ease)}
.nav.scrolled{box-shadow:var(--shadow-nav)}
.nav .container{display:flex;align-items:center;height:64px}
.logo{display:flex;align-items:center;font-family:var(--font-display);font-weight:700;font-size:16px;letter-spacing:.5px}
.sq{width:9px;height:9px;border-radius:2px;background:var(--accent);margin-right:10px;box-shadow:0 0 8px var(--accent-40)}
.links{display:flex;gap:26px;margin-left:auto}
.links a{font-size:13px;letter-spacing:1px;color:var(--fg-2);transition:color var(--dur) var(--ease)}
.links a:hover{color:var(--fg)}
.links a.active{color:var(--accent)}
.hero{padding:clamp(80px,14vh,150px) 0 clamp(70px,10vh,110px)}
.hero-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:34px}
.badge{display:inline-flex;align-items:center;font-family:var(--font-mono);font-size:12px;letter-spacing:2px;color:var(--muted);border:1px solid var(--border-2);padding:7px 14px;border-radius:999px}
.pulse{width:6px;height:6px;border-radius:50%;background:var(--accent);margin-right:9px;animation:pulse 2.4s var(--ease) infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero-en{font-family:var(--font-mono);font-size:12px;letter-spacing:3px;color:var(--muted)}
.hero h1{font-family:var(--font-display);font-size:clamp(56px,10vw,112px);font-weight:800;letter-spacing:-3px;line-height:.98;color:var(--fg)}
.role-line{font-family:var(--font-display);font-size:clamp(22px,3.6vw,36px);font-weight:700;letter-spacing:-.5px;margin-top:10px}
.glow{background:linear-gradient(92deg,var(--accent-soft) 0%,var(--accent) 55%,var(--accent-deep) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 20px var(--accent-40))}
.lead{color:var(--fg-2);font-size:17px;line-height:1.85;max-width:36em;margin-top:28px}
.actions{display:flex;gap:14px;margin-top:38px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;padding:13px 28px;border-radius:var(--radius-sm);font-size:15px;font-weight:600;background:var(--accent);color:var(--on-accent);box-shadow:0 0 22px var(--accent-dim);transition:background var(--dur) var(--ease),transform var(--dur) var(--ease)}
.btn:hover{background:var(--accent-strong);transform:translateY(-1px)}
.btn-ghost{display:inline-flex;align-items:center;padding:13px 28px;border-radius:var(--radius-sm);font-size:15px;font-weight:500;color:var(--fg);border:1px solid var(--border-2);transition:border-color var(--dur) var(--ease),color var(--dur) var(--ease)}
.btn-ghost:hover{border-color:var(--accent-40);color:var(--accent)}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:34px}
.tag{font-family:var(--font-mono);font-size:12px;color:var(--fg-2);border:1px solid var(--border-2);padding:5px 14px;border-radius:999px;transition:border-color var(--dur) var(--ease),color var(--dur) var(--ease)}
.tag:hover{border-color:var(--accent-40);color:var(--accent)}
.sec{padding:92px 0}
.sec-head{border-top:1px solid var(--border);padding-top:20px;margin-bottom:44px;display:flex;align-items:baseline;gap:16px;flex-wrap:wrap}
.sec-no{font-family:var(--font-mono);font-size:12px;letter-spacing:2px;color:var(--accent)}
.sec-head h2{font-family:var(--font-display);font-size:clamp(24px,3vw,34px);font-weight:700;letter-spacing:-1px}
.about-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:start}
.about-text p{color:var(--fg-2);font-size:16px;line-height:1.85;margin-bottom:16px}
.term{background:var(--term-bg);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-card)}
.term-bar{display:flex;align-items:center;gap:6px;padding:11px 16px;border-bottom:1px solid var(--border);background:var(--card)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--dot)}
.term-title{font-family:var(--font-mono);font-size:11px;letter-spacing:1px;color:var(--muted);margin-left:10px}
.term pre{padding:20px 22px;font-family:var(--font-mono);font-size:13px;line-height:1.9;color:var(--fg-2);overflow-x:auto}
.tc-k{color:var(--accent)}
.tc-s{color:var(--fg)}
.tc-dim{color:var(--muted)}
.stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--border);margin-top:64px}
.stat{padding:28px 20px 8px;border-left:1px solid var(--border)}
.stat:first-child{border-left:0;padding-left:4px}
.stat b{display:block;font-family:var(--font-display);font-size:clamp(30px,4vw,44px);font-weight:700;letter-spacing:-1px;font-variant-numeric:tabular-nums;color:var(--fg)}
.stat span{display:block;margin-top:8px;font-size:13px;color:var(--muted)}
.skills{border-top:1px solid var(--border)}
.skill{display:grid;grid-template-columns:64px 1fr;gap:20px;padding:26px 4px;border-bottom:1px solid var(--border);align-items:baseline}
.skill-no{font-family:var(--font-mono);font-size:13px;color:var(--accent);font-variant-numeric:tabular-nums}
.skill h3{font-family:var(--font-display);font-size:19px;font-weight:700;letter-spacing:-.3px;margin-bottom:6px}
.skill p{color:var(--muted);font-size:14px;line-height:1.7}
.projects{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.project{display:flex;flex-direction:column;gap:14px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-card);transition:border-color var(--dur) var(--ease),transform var(--dur) var(--ease)}
.project:hover{border-color:var(--accent-40);transform:translateY(-3px)}
.project-year{font-family:var(--font-mono);font-size:12px;letter-spacing:1px;color:var(--accent)}
.project h3{font-family:var(--font-display);font-size:20px;font-weight:700;letter-spacing:-.3px}
.project p{color:var(--fg-2);font-size:14.5px;line-height:1.75}
.project .tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:12px}
.timeline{border-top:1px solid var(--border)}
.tl{display:grid;grid-template-columns:180px 1fr;gap:22px;padding:26px 4px;border-bottom:1px solid var(--border)}
.tl-when{font-family:var(--font-mono);font-size:13px;color:var(--muted);padding-top:2px}
.tl-when::before{content:'';display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--accent-dim);margin-right:12px;vertical-align:1px}
.tl h3{font-size:17px;font-weight:600;margin-bottom:5px}
.tl p{color:var(--muted);font-size:14px;line-height:1.7}
.contact-sec{padding:110px 0 100px;text-align:center}
.contact-sec h2{font-family:var(--font-display);font-size:clamp(28px,4.5vw,44px);font-weight:700;letter-spacing:-1px}
.contact-sec p{color:var(--fg-2);font-size:16px;max-width:30em;margin:18px auto 38px}
.contact-links{display:flex;gap:30px;justify-content:center;align-items:center;flex-wrap:wrap}
.contact-links .email{font-family:var(--font-mono);font-size:clamp(16px,2.4vw,21px);color:var(--accent);border-bottom:1px solid var(--accent-40);padding-bottom:4px;transition:border-color var(--dur) var(--ease)}
.contact-links .email:hover{border-bottom-color:var(--accent)}
.contact-links .gh{font-size:14px;color:var(--muted);border-bottom:1px solid var(--border-2);padding-bottom:4px;transition:color var(--dur) var(--ease),border-color var(--dur) var(--ease)}
.contact-links .gh:hover{color:var(--fg);border-bottom-color:var(--accent-40)}
footer{padding:30px 0 44px;border-top:1px solid var(--border);text-align:center;font-family:var(--font-mono);font-size:12px;letter-spacing:.5px;color:var(--muted)}
@media(max-width:900px){
  .hero{padding:90px 0 70px}
  .about-grid{grid-template-columns:1fr;gap:36px}
  .stats{grid-template-columns:repeat(2,1fr);margin-top:48px}
  .stat:nth-child(3){border-left:0;padding-left:4px}
  .stat{border-left:0;padding-left:0;padding-top:20px}
  .projects{grid-template-columns:1fr}
  .tl{grid-template-columns:1fr;gap:8px}
  .links a:not(:first-child){display:none}
}
@media(max-width:560px){
  .hero h1{font-size:clamp(48px,17vw,72px)}
  .actions{flex-direction:column}
  .actions .btn,.actions .btn-ghost{justify-content:center;width:100%}
  .stats{grid-template-columns:1fr 1fr}
  .skill{grid-template-columns:44px 1fr;gap:14px;padding:20px 2px}
  .term pre{font-size:12px;padding:16px 16px}
  .contact-sec{padding:84px 0 80px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
  .project:hover{transform:none}
  .btn:hover{transform:none}
}`,
}
