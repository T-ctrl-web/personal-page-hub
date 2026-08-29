/**
 * 模板 04：艺术实验 · 个人主页
 * 大色块 + 超大趣味排印 + 非对称布局与大胆留白，画廊海报质感。适合插画师、视觉艺术家、独立音乐人。
 * 色彩纪律：品红 #FF3D68 + 电蓝 #2A6CFF 两块高识别度色 + 暖纸中性色，色块只作点缀，留白为主角。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'art-experimental',
  name: '艺术实验 · 创作者',
  tagline: '大色块 + 趣味排印的艺术家主页',
  category: '作品集',
  style: '艺术实验',
  description: '大胆但克制的色块与超大趣味排印，非对称布局、轻微倾斜与手绘感装饰，致敬画廊海报。适合插画师、独立音乐人、视觉艺术家与一切以创作为生的人。',
  cover: 'linear-gradient(150deg,#FAF7F1 0%,#EDE6D9 55%,#FF3D68 55.5%,#FF3D68 100%)',
  coverEmoji: '🎨',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'nameEn', label: '英文名', hint: 'Hero 大标题下方小字' },
        { key: 'role', label: '一句话定位', hint: '如：插画师 · 视觉艺术家' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技能标签', type: 'tags' },
      ],
    },
    {
      group: '关于与数据',
      fields: [{ key: 'aboutTitle', label: '关于 · 标题句' }],
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
      group: '作品集',
      list: {
        key: 'works',
        itemLabel: '作品',
        fields: [
          { key: 'index', label: '编号', hint: '如：01' },
          { key: 'title', label: '作品名称' },
          { key: 'year', label: '年份 / 标签' },
          { key: 'desc', label: '描述', type: 'textarea' },
          { key: 'stack', label: '工具/标签', type: 'tags' },
        ],
      },
    },
    {
      group: '展览 / 演出经历',
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
        { key: 'footer', label: '页脚版权' },
      ],
    },
  ],

  defaults: {
    name: '季遥',
    nameEn: 'YAO JI',
    role: '插画师 · 视觉艺术家 · 现居上海',
    desc: '我把城市的声音画成颜色：为杂志画插画，为乐队画封面，也把作品挂进画廊。画面里总留一块白，像深呼吸。',
    chips: ['编辑插画', '专辑封面', '数字绘画', '拼贴', '版画'],
    aboutTitle: '在留白里，画下声音',
    about: [
      { text: '我的创作常常从声音开始——地铁报站、唱片转轴、晚市的嘈杂。把它们翻译成色块与线条，是我理解一座城市的方式。' },
      { text: '商业委托与个人创作并行：杂志、唱片与画廊各占一角，互相喂养。六年里完成 30 余个合作项目，办过 12 场展览与演出。' },
      { text: '相信克制：一张画只讲一件事，颜色不超过三种，剩下的交给留白。' },
    ],
    stats: [
      { num: '6', lbl: '年创作经历' },
      { num: '12', lbl: '展览与演出' },
      { num: '30+', lbl: '合作项目' },
      { num: '4', lbl: '插画奖项' },
    ],
    works: [
      { index: '01', title: '《浮岛练习》', year: '2025 · 个展主线', desc: '以漂浮的岛屿为母题的系列数字插画，讨论「归属感」。九幅作品构成个展主展线，另延伸出小幅丝网版画。', stack: ['数字绘画', '丝网版画'] },
      { index: '02', title: '《午夜唱片店》', year: '2024 · 乐队合作', desc: '为独立乐队「晚风俱乐部」绘制专辑封面与内页。实体碟限量五百张，首周售罄；封面随巡演放成巨幅巡演海报。', stack: ['专辑封面', '巡演海报'] },
      { index: '03', title: '《城市轮廓》', year: '2023 · 系列版画', desc: '城市观察系列：用同一组色块记录十二个街区的黄昏。其中三幅入选年度青年版画展，两幅被私人收藏。', stack: ['版画', '城市观察'] },
      { index: '04', title: '《色块之间》主视觉', year: '2026 · 群展', desc: '为一场十一人联展设计主视觉与展陈：一套可延展的色块系统，落到海报、导视、门票与现场墙面。', stack: ['主视觉', '展陈设计'] },
    ],
    timeline: [
      { when: '2026 · 春', title: '群展《色块之间》 · 上海西岸', desc: '与十一位艺术家联展，展出三幅布面丙烯与两组墙面装置。' },
      { when: '2025 · 秋', title: '个展《浮岛练习》 · 木棉画廊', desc: '首次个展：九幅数字插画加一件声音装置，观展人数逾两千。' },
      { when: '2024 · 夏', title: '《午夜唱片店》四城巡演', desc: '随乐队巡演四城，现场手绘海报，即兴创作二十余幅。' },
      { when: '2021 · 夏', title: '毕业于美术学院插画系', desc: '毕业创作《留白练习》获学院年度最佳作品，被校美术馆收藏。' },
    ],
    contactSub: '合作与约稿：杂志、唱片、展览，以及一切想把声音画下来的事。',
    email: 'yaoji@example.com',
    footer: '© 2026 季遥 YAO JI · 插画 / 视觉艺术 / 音乐周边',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    const bandWords = ['插画', '封面设计', '版画', '个展', '拼贴', '城市观察', '留白', '声音']
    const bandSeq = () => bandWords.map((w) => `<span class="bw">${esc(w)}</span><i class="bd" aria-hidden="true"></i>`).join('')
    return `
  <nav class="nav">
    <a class="logo" href="#top">${esc(d.name)}<i>${esc(d.nameEn)}</i></a>
    <div class="links">
      <a href="#about">关于</a><a href="#works">作品</a><a href="#exhibit">展览</a><a href="#contact">联系</a>
    </div>
  </nav>

  <header class="hero" id="top">
    <span class="dec ring" aria-hidden="true"></span>
    <span class="dec dot" aria-hidden="true"></span>
    <span class="dec arc" aria-hidden="true"></span>
    <span class="dec sq" aria-hidden="true"></span>
    <span class="hero-stamp" aria-hidden="true">独立创作 · EST. 2019</span>
    <div class="container">
      <div class="hero-grid">
        <div class="hero-main">
          <span class="hero-kicker">${esc(d.role)}</span>
          <h1 class="hero-name">${esc(d.name)}<em>${esc(d.nameEn)}</em></h1>
        </div>
        <div class="hero-side">
          <p class="hero-desc">${esc(d.desc)}</p>
          <div class="chips">${terms(d.chips)}</div>
          <a class="hero-cta" href="#works">看作品 <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </header>

  <div class="band" aria-hidden="true"><div class="band-track">${bandSeq()}${bandSeq()}</div></div>

  <section id="about" class="sec">
    <div class="container">
      <div class="about-wrap">
        <div class="about-label">
          <span class="sec-num">01</span>
          <h2 class="sec-title">关于</h2>
        </div>
        <div class="about-main reveal">
          <p class="about-sub">${esc(d.aboutTitle)}</p>
          ${(d.about || []).map((p) => `<p class="about-p">${esc(p.text)}</p>`).join('')}
        </div>
      </div>
      <div class="stats reveal">
        ${(d.stats || []).map((s) => `<div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
      </div>
    </div>
  </section>

  <section id="works" class="sec">
    <div class="container">
      <div class="sec-head reveal">
        <span class="sec-num">02</span>
        <h2 class="sec-title">作品</h2>
        <p class="sec-note">SELECTED WORKS · 2021 — 2026</p>
      </div>
      <div class="works">
        ${(d.works || []).map((w) => `
        <article class="work reveal">
          <div class="work-num" aria-hidden="true">${esc(w.index)}</div>
          <div class="work-body">
            <div class="work-meta">
              <span class="work-year">${esc(w.year)}</span>
              <span class="work-tags">${terms(w.stack)}</span>
            </div>
            <h3 class="work-title">${esc(w.title)}</h3>
            <p class="work-desc">${esc(w.desc)}</p>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="exhibit" class="sec">
    <div class="container">
      <div class="sec-head reveal">
        <span class="sec-num">03</span>
        <h2 class="sec-title">展览 / 演出</h2>
        <p class="sec-note">EXHIBITIONS &amp; GIGS</p>
      </div>
      <div class="timeline reveal">
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

  <section id="contact" class="sec">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left reveal">
          <span class="sec-num">04</span>
          <h2 class="contact-title">把你的想法，<em>画下来</em></h2>
          <p class="contact-sub">${esc(d.contactSub)}</p>
        </div>
        <div class="contact-card reveal">
          <a class="contact-email" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container foot">
      <span>${esc(d.footer)}</span>
      <span class="foot-en">ILLUSTRATION · ART · MUSIC</span>
    </div>
  </footer>

  <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
  <script>
  (function () {
    // 导航高亮：当前区块对应链接加 active
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav .links a[href^="#"]'))
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')) }).filter(Boolean)
    function onScroll() {
      var y = window.scrollY + 120, cur = null
      sections.forEach(function (s) { if (s.offsetTop <= y) cur = s.id })
      links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur) })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    // 滚动显现：仅在用户不偏好减少动效时启用
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    var rs = document.querySelectorAll('.reveal')
    if (reduced || !('IntersectionObserver' in window)) {
      rs.forEach(function (el) { el.classList.add('in') })
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
      }, { threshold: 0.1 })
      rs.forEach(function (el, i) { el.style.transitionDelay = (i % 4 * 0.07) + 's'; io.observe(el) })
    }
  })()
  </script>`
  },

  css: `
:root{
  --paper:#FAF7F1;--paper-2:#F5F0E8;
  --ink:#16161D;--ink-2:#3F3F4B;--muted:#6B6B78;
  --accent:#FF3D68;--accent-2:#2A6CFF;
  --line:#DCD5C8;
  --nav-bg:rgba(250,247,241,.92);--paper-soft:rgba(250,247,241,.55);
  --font-display:'Georgia','Times New Roman','Songti SC','Noto Serif SC','SimSun',serif;
  --font-sans:'Inter','Helvetica Neue',Helvetica,'PingFang SC','Microsoft YaHei',system-ui,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,Consolas,monospace;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;overflow-x:clip}
body{overflow-x:clip;font-family:var(--font-sans);font-size:16px;line-height:1.7;background:var(--paper);color:var(--ink);-webkit-font-smoothing:antialiased}
section{scroll-margin-top:70px}
a{color:inherit;text-decoration:none}
::selection{background:var(--accent);color:var(--paper)}
:focus-visible{outline:2px solid var(--ink);outline-offset:3px;border-radius:2px}
.container{max-width:1120px;margin:0 auto;padding:0 28px}
.sec{padding:88px 0}

/* ---------- 导航 ---------- */
.nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav .container{display:flex;align-items:center;height:64px}
.logo{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:20px}
.logo i{font-family:var(--font-mono);font-style:normal;font-size:11px;letter-spacing:2px;color:var(--muted);margin-left:10px;font-weight:600}
.links{display:flex;gap:26px;margin-left:auto}
.links a{font-size:13px;letter-spacing:1.5px;color:var(--ink-2);padding:6px 0}
.links a:hover{color:var(--ink)}
.links a.active{color:var(--ink);box-shadow:inset 0 -2px 0 var(--accent)}

/* ---------- Hero：超大倾斜标题 + 非对称 + 留白 ---------- */
.hero{position:relative;overflow:hidden;padding:104px 0 88px}
.dec{position:absolute;pointer-events:none;z-index:0}
.hero-grid{position:relative;z-index:1}
.dec.ring{width:120px;height:120px;border:2px solid var(--accent-2);border-radius:50%;top:10%;right:6%}
.dec.dot{width:16px;height:16px;border-radius:50%;background:var(--accent);left:2.5%;bottom:12%}
.dec.arc{width:76px;height:38px;border:2px solid var(--accent);border-bottom:none;border-radius:76px 76px 0 0;right:22%;bottom:16%}
.dec.sq{width:110px;height:110px;background:var(--accent);transform:rotate(14deg);left:5%;top:46%}
.hero-stamp{position:absolute;top:22px;right:6px;writing-mode:vertical-rl;font-family:var(--font-mono);font-size:11px;letter-spacing:3px;color:var(--muted)}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,.65fr);gap:56px;align-items:end}
.hero-kicker{display:inline-flex;align-items:center;font-family:var(--font-mono);font-size:12.5px;letter-spacing:3px;color:var(--ink-2);margin-bottom:26px}
.hero-kicker::before{content:'';width:9px;height:9px;background:var(--accent);border-radius:50%;margin-right:12px;flex:none}
.hero-name{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(64px,12vw,150px);line-height:.95;letter-spacing:-3px;transform:rotate(-2deg);transform-origin:left bottom}
.hero-name em{display:block;font-family:var(--font-mono);font-style:normal;font-weight:600;font-size:.2em;letter-spacing:.35em;color:var(--ink-2);margin-top:28px;padding-left:12px}
.hero-name em::before{content:'';display:inline-block;width:10px;height:10px;background:var(--accent);border-radius:50%;margin-right:16px;vertical-align:2px}
.hero-desc{font-size:16.5px;line-height:1.85;color:var(--ink-2);max-width:32em}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.tag{font-family:var(--font-mono);font-size:12.5px;color:var(--ink-2);border:1px solid var(--line);padding:5px 14px;border-radius:999px}
.hero-cta{display:inline-block;margin-top:32px;font-family:var(--font-mono);font-size:13px;letter-spacing:2px;color:var(--ink-2);border-bottom:1px solid var(--line);padding-bottom:5px}
.hero-cta:hover{color:var(--ink);border-bottom-color:var(--accent)}

/* ---------- 色带（纯 CSS 无限滚动，装饰性） ---------- */
.band{overflow:hidden;background:var(--accent)}
.band-track{display:flex;align-items:center;width:max-content;animation:marquee 28s linear infinite}
.bw{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(20px,3vw,28px);color:var(--ink);white-space:nowrap;padding:14px 0 12px}
.bd{width:9px;height:9px;border-radius:50%;background:var(--ink);margin:0 26px;flex:none}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* ---------- 区块标题：斜体大字 + 编号 ---------- */
.sec-head{display:flex;align-items:baseline;gap:20px;flex-wrap:wrap;border-top:1px solid var(--line);padding-top:22px;margin-bottom:44px}
.sec-num{font-family:var(--font-mono);font-size:13px;letter-spacing:2px;color:var(--muted)}
.sec-title{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(34px,5vw,56px);color:var(--accent);line-height:1;display:inline-block;transform:rotate(-1.2deg)}
.sec-note{margin-left:auto;font-family:var(--font-mono);font-size:12px;letter-spacing:2px;color:var(--muted)}

/* ---------- 关于：左大标题 + 右正文，非对称 ---------- */
.about-wrap{display:grid;grid-template-columns:210px 1fr;gap:52px;align-items:start}
.about-label{position:relative}
.about-label::after{content:'';position:absolute;width:92px;height:92px;border:2px solid var(--accent-2);border-radius:50%;right:-16px;top:-10px;opacity:.55;pointer-events:none}
.about-label .sec-title{margin-top:10px}
.about-sub{font-size:19px;font-weight:600;letter-spacing:.5px;margin-bottom:18px;line-height:1.6}
.about-sub::before{content:'';display:inline-block;width:10px;height:10px;background:var(--accent);margin-right:12px;vertical-align:2px}
.about-p{color:var(--ink-2);font-size:16px;line-height:1.85;margin-bottom:14px;max-width:38em}
.stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);margin-top:64px}
.stat{position:relative;padding:26px 0 6px 22px}
.stat:not(:first-child)::before{content:'';position:absolute;left:0;top:24px;bottom:6px;width:1px;background:var(--line)}
.stat b{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:46px;line-height:1;letter-spacing:-1px;display:block}
.stat span{display:block;font-family:var(--font-mono);font-size:12px;letter-spacing:1.5px;color:var(--muted);margin-top:10px}

/* ---------- 作品：大色块编号 + 标题 ---------- */
.works{border-top:1px solid var(--line)}
.work{display:grid;grid-template-columns:118px 1fr;gap:38px;align-items:start;padding:42px 0;border-bottom:1px solid var(--line)}
.work-num{width:96px;height:96px;display:grid;place-items:center;font-family:var(--font-display);font-style:italic;font-weight:700;font-size:40px;transition:transform .3s ease}
.work:nth-child(odd) .work-num{background:var(--accent);color:var(--ink);transform:rotate(-4deg);margin-top:8px}
.work:nth-child(even) .work-num{background:var(--accent-2);color:var(--paper);transform:rotate(3deg);margin-top:-4px}
.work:hover .work-num{transform:rotate(0deg) translateY(-3px)}
.work-meta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:10px}
.work-year{font-family:var(--font-mono);font-size:13px;letter-spacing:1.5px;color:var(--ink-2)}
.work-year::before{content:'';display:inline-block;width:7px;height:7px;background:var(--accent);border-radius:50%;margin-right:9px;vertical-align:1px}
.work-tags{display:flex;gap:8px;flex-wrap:wrap}
.work-tags .tag{font-size:11.5px;padding:3px 11px}
.work-title{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(24px,3.2vw,34px);letter-spacing:.5px;margin-bottom:10px}
.work-desc{color:var(--ink-2);font-size:15px;line-height:1.8;max-width:44em}

/* ---------- 展览 / 演出：时间线 ---------- */
.timeline{position:relative;padding-left:26px;border-top:1px solid var(--line)}
.timeline::before{content:'';position:absolute;left:2px;top:10px;bottom:10px;width:1px;background:var(--line)}
.tl{position:relative;display:grid;grid-template-columns:170px 1fr;gap:26px;padding:28px 0;border-bottom:1px solid var(--line)}
.tl::before{content:'';position:absolute;left:-27px;top:32px;width:9px;height:9px;border-radius:50%;background:var(--accent)}
.tl:nth-child(even)::before{background:var(--accent-2)}
.tl-when{font-family:var(--font-mono);font-size:13px;letter-spacing:1.5px;color:var(--ink-2);padding-top:2px}
.tl-body h3{font-size:18px;font-weight:600;letter-spacing:.3px;margin-bottom:6px}
.tl-body p{color:var(--muted);font-size:15px;line-height:1.7;max-width:46em}

/* ---------- 联系：非对称 + 电蓝色块 ---------- */
#contact{background:var(--paper-2);padding-bottom:96px}
.contact-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:center}
.contact-left .sec-num{display:block;margin-bottom:18px}
.contact-title{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(36px,5.4vw,60px);line-height:1.08;letter-spacing:.5px}
.contact-title em{color:var(--accent)}
.contact-sub{color:var(--ink-2);font-size:16px;line-height:1.8;margin-top:22px;max-width:30em}
.contact-card{position:relative;background:var(--accent-2);padding:52px 44px;justify-self:stretch}
.contact-card::after{content:'';position:absolute;width:72px;height:72px;border:2px solid var(--paper-soft);border-radius:50%;right:-14px;top:-14px;pointer-events:none}
.contact-email{display:inline-block;font-family:var(--font-display);font-style:italic;font-weight:700;font-size:clamp(20px,3vw,30px);color:var(--paper);line-height:1.3;word-break:break-all;border-bottom:2px solid var(--paper-soft);padding-bottom:8px}
.contact-email:hover{border-bottom-color:var(--paper)}
.contact-email:focus-visible{outline-color:var(--paper)}

/* ---------- 页脚 ---------- */
footer{border-top:1px solid var(--line);padding:30px 0 40px}
.foot{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:12.5px;color:var(--muted)}
.foot-en{font-family:var(--font-mono);letter-spacing:2.5px}

/* ---------- 滚动显现（默认隐藏，仅在不减少动效时） ---------- */
@media (prefers-reduced-motion: no-preference){
  .reveal{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}
  .reveal.in{opacity:1;transform:none}
}

/* ---------- 响应式 ---------- */
@media (max-width:900px){
  .sec{padding:68px 0}
  .hero{padding:80px 0 64px}
  .hero-grid{grid-template-columns:1fr;gap:36px}
  .hero-desc{max-width:36em}
  .about-wrap{grid-template-columns:1fr;gap:36px}
  .about-label::after{display:none}
  .stats{margin-top:48px}
  .work{grid-template-columns:88px 1fr;gap:26px;padding:34px 0}
  .work-num{width:80px;height:80px;font-size:32px}
  .tl{grid-template-columns:150px 1fr;gap:20px}
  .contact-grid{grid-template-columns:1fr;gap:44px}
  .links a:not(:first-child){display:none}
  .hero-stamp{display:none}
}
@media (max-width:560px){
  .container{padding:0 20px}
  .hero{padding:60px 0 48px}
  .hero-name{font-size:clamp(48px,17vw,76px);letter-spacing:-1px}
  .hero-name em{font-size:.22em;letter-spacing:.22em;margin-top:18px;padding-left:0}
  .hero-desc{font-size:16px}
  .sec{padding:56px 0}
  .sec-head{gap:12px;margin-bottom:34px}
  .sec-note{margin-left:0;width:100%}
  .sec-title{font-size:clamp(30px,10vw,42px)}
  .work{grid-template-columns:1fr;gap:16px;padding:28px 0}
  .work-num{width:64px;height:64px;font-size:26px}
  .work:nth-child(odd) .work-num,.work:nth-child(even) .work-num{margin-top:0}
  .stats{grid-template-columns:repeat(2,1fr);gap:0}
  .stat{padding:18px 0 4px}
  .stat:first-child,.stat:nth-child(2){border-top:none}
  .stat:nth-child(n+3){border-top:1px solid var(--line);padding-top:20px}
  .stat:not(:first-child)::before{display:none}
  .stat b{font-size:38px}
  .tl{grid-template-columns:1fr;gap:8px;padding:22px 0}
  .tl-when{font-size:12px}
  .timeline{padding-left:20px}
  .tl::before{left:-21px;top:30px}
  .contact-grid{gap:36px}
  .contact-card{padding:36px 26px}
  .foot{flex-direction:column;align-items:flex-start;gap:6px}
  .bw{font-size:18px}
  .bd{margin:0 18px}
}
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation:none!important;transition:none!important}
}`,
}
