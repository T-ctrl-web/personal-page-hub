/**
 * 模板 04：工业极客 · 个人主页
 * 浅色工业底 + 荧光绿强调 + JetBrains Mono 等宽排版；模拟终端窗口与系统面板分区，
 * 硬边卡片、细网格坐标感，克制硬核。适合程序员、嵌入式 / 硬件工程师与开源爱好者。
 */
import { esc } from '../engine/export.js'

export default {
  id: 'industrial-geek',
  name: '工业极客 · 开源与硬件',
  tagline: '等宽终端 + 仪表盘面板的硬核工业风',
  category: '作品集',
  style: '工业极客',
  description: '浅色工业底、荧光绿强调与 JetBrains Mono 等宽排版，模拟终端窗口与系统面板式分区，硬边卡片加网格坐标感。适合程序员、嵌入式 / 硬件工程师与开源爱好者。',
  cover: 'linear-gradient(160deg,#F4F4F2 0%,#EDF4EF 50%,#DCE6DF 100%)',
  coverEmoji: '🖥️',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'handle', label: '终端用户名', hint: '终端 whoami / 导航显示，如 zang' },
        { key: 'badge', label: '徽章文案', hint: '如：嵌入式 / 开源 · 现居深圳' },
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
      group: '技能',
      list: {
        key: 'skills',
        itemLabel: '技能模块',
        fields: [
          { key: 'title', label: '模块名' },
          { key: 'desc', label: '一句话说明' },
          { key: 'items', label: '技能项', type: 'tags' },
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
      group: '时间线（工作/教育）',
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
        { key: 'status', label: '页脚状态文字', hint: '如：all systems operational' },
        { key: 'footer', label: '页脚版权行' },
      ],
    },
  ],

  defaults: {
    name: '顾子昂',
    handle: 'zang',
    badge: '嵌入式 / 开源 · 现居深圳',
    role: '嵌入式软件工程师 · 开源爱好者',
    desc: '白天写 C 与 Rust，晚上焊电路板。做过多款低功耗设备与开源工具链，相信「能跑起来」不如「能稳定跑一年」。',
    chips: ['C/C++', 'Rust', 'STM32', 'ESP32', 'FreeRTOS', '嵌入式 Linux', 'KiCad', 'Git'],
    aboutTitle: '把「能跑」做成「能稳定跑一年」',
    about: [
      { text: '我是一名嵌入式软件工程师，工作围绕低功耗传感、边缘计算与设备固件展开：从需求分析、时序设计，到量产阶段的可维护性与现场问题排查，全链路都亲手做过。' },
      { text: '业余时间维护几个开源项目，喜欢把工程经验沉淀成库和文档——一个好的 README 和一套可靠的 CI，和好代码一样重要。' },
      { text: '硬件与软件的分界线是我最着迷的地方：寄存器、中断、功耗曲线，这些「贴近金属」的问题，值得被认真对待。' },
    ],
    stats: [
      { num: '9', lbl: '年嵌入式开发' },
      { num: '6', lbl: '量产设备' },
      { num: '40+', lbl: '开源贡献' },
      { num: '3', lbl: '自主开源项目' },
    ],
    skills: [
      { title: '系统语言', desc: '从驱动到应用层，写可移植的代码。', items: ['C', 'C++', 'Rust', 'Shell'] },
      { title: '嵌入式平台', desc: 'MCU 到 Linux 单板，都有量产经验。', items: ['STM32', 'ESP32', 'RP2040', 'i.MX'] },
      { title: '实时系统', desc: '中断安全优先，时序可预期。', items: ['FreeRTOS', 'RT-Thread', 'Zephyr'] },
      { title: '工具链与硬件', desc: '自己画板、自己调优。', items: ['KiCad', 'CMake', 'GDB', 'Wireshark'] },
    ],
    projects: [
      { title: 'rtlink — 嵌入式消息总线', year: '2024 — 至今', desc: '为单片机设计的中断安全消息队列与发布订阅库，C11 实现、零动态分配，128 字节 RAM 即可运行；已被 200+ 仓库引用。', stack: ['C11', 'FreeRTOS', 'CMake'] },
      { title: 'esp32-eink-dashboard', year: '2023', desc: 'ESP32 墨水屏信息牌固件：环境传感器、RSSI 监测与 30 天 OTA 稳定运行；深度睡眠实测功耗 38µA。', stack: ['ESP32', 'Zephyr', 'OTA'] },
      { title: 'nrf-power-profiler', year: '2022 — 2023', desc: '基于 nRF52840 的功耗分析上位机：自动生成电流曲线并定位高耗能代码段，固件与 PyQt 界面双端开源。', stack: ['nRF52840', 'Python', 'PyQt'] },
    ],
    timeline: [
      { when: '2021 — 至今', title: '磐石物联 · 嵌入式软件工程师', desc: '负责低功耗传感节点与边缘网关固件，主导 3 款产品量产，交付 20+ 客户方案。' },
      { when: '2018 — 2021', title: '澄芯电子 · 单片机工程师', desc: '从裸机到 RTOS 的完整项目周期，累计 10+ 方案落地，养成「先画时序图再写代码」的习惯。' },
      { when: '2017', title: '毕业于南方某高校 · 电子信息工程', desc: '毕业设计《基于 STM32 的便携示波器》获院级优秀，从此入了嵌入式的坑。' },
    ],
    contactSub: '欢迎交流嵌入式、Rust、开源与硬件项目合作。',
    email: 'ziang@example.com',
    github: 'github.com/ziang-gu',
    status: 'all systems operational',
    footer: '© 2026 顾子昂 · ~/profile',
  },

  render(d) {
    const terms = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')
    const h = esc(d.handle || 'user')
    const statLine = (d.stats || []).map((s) => `${esc(s.num)} ${esc(s.lbl)}`).join(' · ')
    // 终端内容全部由用户数据动态渲染：改名/改定位/改标签/改统计，终端会同步变化
    const term = [
      ['cmd', '$ whoami'],
      ['out', `${h} — ${esc(d.name)}`],
      ['cmd', '$ cat ~/role.txt'],
      ['out', esc(d.role)],
      ['cmd', '$ ./stack.sh'],
      ['out', (d.chips || []).join('  ') || '—'],
      ['cmd', '$ uptime'],
      ['out', statLine || '—'],
      ['hint', '# 提示：把这里换成你的项目经历 / 技能清单'],
      ['cmd', '$'],
    ].map(([t, x]) => `<span class="t-${t}">${x}</span>`).join('\n')
    return `
  <nav class="nav">
    <div class="container">
      <a class="logo" href="#top"><span class="ps">$</span><span class="pth">~/</span>${h}</a>
      <div class="links">
        <a href="#about">~/about</a><a href="#skills">~/skills</a><a href="#projects">~/projects</a><a href="#contact">~/contact</a>
      </div>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container">
      <div class="grid">
        <div class="hero-main">
          <span class="badge"><i class="led" aria-hidden="true"></i>${esc(d.badge)}</span>
          <h1>${esc(d.name)}</h1>
          <div class="role">${esc(d.role)}</div>
          <p class="desc">${esc(d.desc)}</p>
          <div class="cta-row">
            <a class="btn btn-p" href="#projects">查看项目</a>
            <a class="btn btn-g" href="mailto:${esc(d.email)}">联系我</a>
          </div>
          <div class="chips">${terms(d.chips)}</div>
        </div>
        <div class="terminal">
          <div class="term-bar">
            <i class="dr" aria-hidden="true"></i><i class="dy" aria-hidden="true"></i><i class="dg" aria-hidden="true"></i>
            <span class="ttl">${h}@forge: ~</span>
          </div>
          <pre class="term-body">${term}<span class="cursor" aria-hidden="true"></span></pre>
        </div>
      </div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="pathbar"><span class="ps">$</span> cd <span class="path">~/about</span></div>
      <h2 class="sec-title">${esc(d.aboutTitle)}</h2>
      <div class="about-grid">
        <div class="panel">
          <div class="panel-body about-text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        </div>
        <div class="stats">${(d.stats || []).map((s) => `
          <div class="stat"><b>${esc(s.num)}</b><span>${esc(s.lbl)}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="sec">
    <div class="container">
      <div class="pathbar"><span class="ps">$</span> cd <span class="path">~/skills</span></div>
      <h2 class="sec-title">技能栈</h2>
      <div class="skills">${(d.skills || []).map((s, i) => `
        <div class="skill">
          <span class="idx">[${String(i + 1).padStart(2, '0')}]</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.desc)}</p>
          <div class="tags">${terms(s.items)}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="projects" class="sec">
    <div class="container">
      <div class="pathbar"><span class="ps">$</span> cd <span class="path">~/projects</span></div>
      <h2 class="sec-title">开源项目</h2>
      <div class="projects">${(d.projects || []).map((p) => `
        <article class="project">
          <div class="project-top">
            <span class="arrow" aria-hidden="true">▸</span>
            <h3>${esc(p.title)}</h3>
            <span class="year">${esc(p.year)}</span>
          </div>
          <p class="desc">${esc(p.desc)}</p>
          <div class="stack">${terms(p.stack)}</div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="history" class="sec">
    <div class="container">
      <div class="pathbar"><span class="ps">$</span> git log <span class="path">--oneline</span></div>
      <h2 class="sec-title">工作与教育</h2>
      <div class="history">${(d.timeline || []).map((t) => `
        <div class="tl">
          <div class="when">${esc(t.when)}</div>
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.desc)}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="contact" class="sec">
    <div class="container">
      <div class="pathbar"><span class="ps">$</span> cat <span class="path">~/.contact</span></div>
      <h2 class="sec-title">联系方式</h2>
      <div class="panel contact-panel">
        <p class="sub">${esc(d.contactSub)}</p>
        <div class="contact-rows">
          <div class="contact-row">
            <span class="ps">$</span><span class="k">email</span>
            <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>
          </div>
          <div class="contact-row">
            <span class="ps">$</span><span class="k">github</span>
            <a href="https://${esc(d.github)}" target="_blank" rel="noopener">${esc(d.github)}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container footer-bar">
      <span>${esc(d.footer)}</span>
      <span class="ok"><i aria-hidden="true"></i>${esc(d.status)}<span class="gen"> · generated by PersonalPage Hub</span></span>
    </div>
  </footer>

  <script>
  (function(){
    var links=[].slice.call(document.querySelectorAll('.links a'))
    var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))})
    function onScroll(){
      var y=window.innerHeight/2, cur=0
      secs.forEach(function(s,i){ if(s && s.getBoundingClientRect().top<y) cur=i })
      links.forEach(function(a,i){ a.classList.toggle('on', i===cur) })
    }
    addEventListener('scroll', onScroll, {passive:true})
    onScroll()
  })()
  </script>`
  },

  css: `
:root{--bg:#F4F4F2;--bg-2:#EBEBE8;--card:#FFFFFF;--card-2:#FAFAF8;--fg:#111111;--fg-2:#3D3D3D;--muted:#6B6B66;--accent:#00C853;--accent-deep:#00763B;--accent-hover:#00632F;--accent-soft:rgba(0,118,59,.10);--on-accent:#FFFFFF;--terminal:#0D1117;--terminal-2:#161C22;--term-fg:#63E6A0;--term-dim:#8FA39B;--term-border:#232B33;--border:#D8D8D4;--grid-line:rgba(17,17,17,.05);--dot-r:#FF5F57;--dot-y:#FEBC2E;--dot-g:#28C840;--nav-bg:rgba(244,244,242,.92);--radius:4px;--radius-sm:2px;--shadow:0 1px 2px rgba(17,17,17,.06);--shadow-2:0 4px 12px rgba(17,17,17,.08);--font-mono:'JetBrains Mono','SF Mono','Cascadia Code',ui-monospace,Consolas,'PingFang SC','Microsoft YaHei',monospace}
*{margin:0;padding:0;box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{font-family:var(--font-mono);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg);-webkit-font-smoothing:antialiased}
section{scroll-margin-top:70px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--accent-deep);outline-offset:2px;border-radius:var(--radius-sm)}
.container{max-width:1040px;margin:0 auto;padding:0 24px}
body::before{content:'';position:fixed;inset:0;z-index:-2;pointer-events:none;background:var(--bg)}
body::after{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(ellipse 100% 70% at 50% 0%,#000 15%,transparent 78%)}
.nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav .container{display:flex;align-items:center;height:58px;gap:20px}
.logo{display:inline-flex;align-items:center;gap:2px;font-size:14.5px;font-weight:700;color:var(--fg)}
.logo .ps{color:var(--accent-deep)}
.logo .pth{color:var(--muted);font-weight:400}
.links{display:flex;gap:2px;margin-left:auto}
.links a{font-size:13.5px;color:var(--fg-2);padding:9px 12px;border-radius:var(--radius-sm);border-bottom:2px solid transparent}
.links a:hover{color:var(--fg);background:var(--accent-soft)}
.links a.on{color:var(--accent-deep);background:var(--accent-soft)}
.hero{padding:64px 0 76px}
.hero .grid{display:grid;grid-template-columns:1.02fr .98fr;gap:44px;align-items:center}
.badge{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--accent-deep);border:1px solid var(--border);background:var(--card);padding:5px 12px;border-radius:var(--radius-sm);letter-spacing:.4px}
.badge .led{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.hero h1{font-size:clamp(34px,5vw,54px);font-weight:800;letter-spacing:-.5px;line-height:1.18;margin:20px 0 8px;animation:fadeUp .7s ease-out both}
.hero h1::before{content:'▍';color:var(--accent);margin-right:10px;font-size:.72em;vertical-align:4px}
.hero .role{font-size:clamp(17px,2.2vw,20px);font-weight:600;color:var(--fg-2);animation:fadeUp .7s ease-out .1s both}
.hero .desc{margin:18px 0 26px;color:var(--fg-2);max-width:28em;font-size:16px;line-height:1.8;animation:fadeUp .7s ease-out .18s both}
.cta-row{display:flex;gap:10px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 22px;border-radius:var(--radius-sm);font-size:14px;font-weight:700;letter-spacing:.3px;transition:background-color .15s ease,border-color .15s ease,color .15s ease}
.btn-p{background:var(--accent-deep);color:var(--on-accent)}
.btn-p:hover{background:var(--accent-hover)}
.btn-g{background:var(--card);border:1px solid var(--border);color:var(--fg)}
.btn-g:hover{border-color:var(--fg)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}
.tag{font-size:12.5px;color:var(--fg-2);border:1px solid var(--border);background:var(--card);padding:4px 10px;border-radius:var(--radius-sm);letter-spacing:.2px;transition:border-color .15s ease,color .15s ease}
.tag:hover{border-color:var(--accent-deep);color:var(--accent-deep)}
.terminal{background:var(--terminal);border:1px solid var(--term-border);border-radius:var(--radius);box-shadow:var(--shadow-2);overflow:hidden}
.term-bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:var(--terminal-2);border-bottom:1px solid var(--term-border)}
.term-bar i{width:10px;height:10px;border-radius:50%}
.term-bar .dr{background:var(--dot-r)}.term-bar .dy{background:var(--dot-y)}.term-bar .dg{background:var(--dot-g)}
.term-bar .ttl{margin-left:10px;font-size:11.5px;color:var(--term-dim);letter-spacing:.3px}
.term-body{padding:14px 16px 16px;font-size:13px;line-height:1.8;overflow-x:auto;white-space:pre;color:var(--term-dim)}
.t-cmd{color:var(--term-fg);font-weight:600}
.t-hint{color:var(--term-dim);font-style:italic}
.cursor{display:inline-block;width:7px;height:14px;background:var(--accent);vertical-align:-2px;margin-left:2px}
.sec{border-top:1px dashed var(--border);padding:76px 0}
.pathbar{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);margin-bottom:26px}
.pathbar .ps{color:var(--accent-deep);font-weight:700}
.pathbar .path{color:var(--fg-2);background:var(--card);border:1px solid var(--border);padding:3px 8px;border-radius:var(--radius-sm);font-size:12.5px}
.sec-title{font-size:clamp(22px,3vw,30px);font-weight:800;letter-spacing:-.5px;margin-bottom:32px}
.about-grid{display:grid;grid-template-columns:1.3fr .7fr;gap:26px;align-items:start}
.panel{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)}
.panel-body{padding:26px 28px}
.about-text p{color:var(--fg-2);font-size:16px;line-height:1.85;margin-bottom:16px}
.about-text p:last-child{margin-bottom:0}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.stat{background:var(--card);padding:22px 20px}
.stat b{display:block;font-size:clamp(24px,3vw,34px);font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:-1px}
.stat b::before{content:'▍';color:var(--accent);font-size:.55em;margin-right:8px;vertical-align:4px}
.stat span{display:block;font-size:12.5px;color:var(--muted);margin-top:6px;letter-spacing:.4px}
.skills{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.skill{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:22px 24px;box-shadow:var(--shadow);transition:border-color .15s ease}
.skill:hover{border-color:var(--accent-deep)}
.skill .idx{font-size:11.5px;color:var(--accent-deep);letter-spacing:1px}
.skill h3{font-size:16.5px;font-weight:700;margin:8px 0 4px}
.skill p{font-size:13.5px;color:var(--muted);margin-bottom:14px}
.skill .tags{display:flex;flex-wrap:wrap;gap:6px}
.skill .tags .tag{font-size:11.5px;padding:3px 8px}
.projects{display:flex;flex-direction:column;gap:14px}
.project{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px 24px;box-shadow:var(--shadow);transition:border-color .15s ease}
.project:hover{border-color:var(--accent-deep)}
.project-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.project .arrow{color:var(--accent-deep);font-weight:700}
.project h3{font-size:17px;font-weight:700;letter-spacing:-.2px}
.project .year{font-size:12px;color:var(--muted);border:1px solid var(--border);padding:2px 8px;border-radius:var(--radius-sm);margin-left:auto;white-space:nowrap}
.project .desc{color:var(--fg-2);font-size:14.5px;line-height:1.75;margin:10px 0 14px}
.project .stack{display:flex;flex-wrap:wrap;gap:6px}
.history{border-left:2px solid var(--border);margin-left:6px;padding-left:26px;display:flex;flex-direction:column;gap:30px}
.tl{position:relative}
.tl::before{content:'';position:absolute;left:-33px;top:5px;width:10px;height:10px;border-radius:50%;background:var(--accent);border:2px solid var(--bg)}
.tl .when{font-size:12.5px;color:var(--accent-deep);letter-spacing:.5px}
.tl .when::before{content:'* ';color:var(--muted)}
.tl h3{font-size:16.5px;font-weight:700;margin-top:4px}
.tl p{font-size:14px;color:var(--muted);margin-top:4px;line-height:1.7}
.contact-panel{padding:28px 30px}
.contact-panel .sub{color:var(--fg-2);font-size:15px;margin-bottom:22px}
.contact-rows{display:flex;flex-direction:column}
.contact-row{display:grid;grid-template-columns:auto 92px 1fr;gap:12px;align-items:center;padding:13px 0;border-top:1px dashed var(--border)}
.contact-row:first-child{border-top:none}
.contact-row .ps{color:var(--accent-deep);font-weight:700}
.contact-row .k{color:var(--muted);font-size:13.5px}
.contact-row a{color:var(--accent-deep);font-size:14px;min-height:44px;display:inline-flex;align-items:center;text-decoration:underline;text-decoration-color:var(--accent-soft);text-underline-offset:4px}
.contact-row a:hover{color:var(--fg);text-decoration-color:var(--fg)}
footer{background:var(--bg-2);border-top:1px solid var(--border)}
.footer-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:18px 0;font-size:12.5px;color:var(--muted)}
.footer-bar .ok{display:inline-flex;align-items:center;gap:8px;color:var(--accent-deep)}
.footer-bar .ok i{width:7px;height:7px;border-radius:50%;background:var(--accent)}
.footer-bar .gen{color:var(--muted)}
@media (prefers-reduced-motion: no-preference){
  html{scroll-behavior:smooth}
  .cursor{animation:blink 1.1s steps(2,start) infinite}
  .led,.footer-bar .ok i{animation:pulse 2.4s ease-in-out infinite}
}
@keyframes blink{50%{opacity:0}}
@keyframes pulse{50%{opacity:.4}}
@media(max-width:900px){
  .hero .grid{grid-template-columns:1fr;gap:34px}
  .about-grid{grid-template-columns:1fr;gap:22px}
  .skills{grid-template-columns:1fr}
  .hero{padding:52px 0 60px}
  .sec{padding:60px 0}
}
@media(max-width:560px){
  .stats{grid-template-columns:repeat(2,1fr)}
  .hero h1{font-size:clamp(30px,9vw,40px)}
  .links{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;max-width:100%;mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent);-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent)}
  .links::-webkit-scrollbar{display:none}
  .links a{white-space:nowrap;flex-shrink:0}
  .term-body{font-size:12px}
  .project-top .year{margin-left:0}
  .contact-row{grid-template-columns:auto 1fr;gap:2px 12px}
  .contact-row .k{display:none}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`,
}
