/**
 * 模板 01：深色科技 · 求职/个人主页
 * 面向数据计算 / 云计算方向的求职者（华为 openEuler 认证等亮点可突出展示）
 */
import { esc } from '../engine/export.js'

const ICON = {
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>',
  db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>'
}

const SKILL_COLORS = ['cyan', 'blue', 'green', 'red']

export default {
  id: 'dark-tech',
  name: '深色科技 · 求职主页',
  tagline: '数据/云计算方向的深色科技风个人主页',
  category: '求职',
  style: '深色科技',
  description: '深海军蓝黑 + 青色渐变，带代码终端视觉与华为认证横幅。适合数据计算、云计算、后端方向的求职者展示技能、证书与项目。',
  cover: 'linear-gradient(135deg,#0A0F1E 0%,#0D1526 45%,#12224A 100%)',
  coverEmoji: '🚀',

  schema: [
    {
      group: '基本信息',
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'mark', label: 'Logo 字母', hint: '导航左上角方块内字母' },
        { key: 'badge', label: '徽章文案', hint: '如：2027 届应届 · 数据计算及应用' },
        { key: 'role', label: '一句话定位' },
        { key: 'desc', label: '自我介绍（Hero）', type: 'textarea' },
        { key: 'chips', label: '技能标签', type: 'tags' },
        { key: 'terminalTitle', label: '终端标题' },
        { key: 'terminal', label: '终端内容', type: 'textarea', hint: '每行一段，$ 开头表示命令' },
      ],
    },
    {
      group: '关于与技术栈',
      fields: [
        { key: 'proofLabel', label: '技术栈条标题' },
        { key: 'proof', label: '技术栈（Hero 下方）', type: 'tags' },
        { key: 'aboutTitle', label: '关于我 · 副标题' },
      ],
      list: {
        key: 'about',
        itemLabel: '段落',
        fields: [{ key: 'text', label: '段落内容', type: 'textarea' }],
      },
    },
    {
      group: '统计数字卡',
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
      group: '技能栈',
      list: {
        key: 'skills',
        itemLabel: '技能卡',
        fields: [
          { key: 'title', label: '标题' },
          { key: 'desc', label: '描述' },
          { key: 'items', label: '技能项', type: 'tags' },
        ],
      },
    },
    {
      group: '证书（主证书大卡）',
      fields: [
        { key: 'certName', label: '证书名称' },
        { key: 'certMeta', label: '副标题' },
        { key: 'certDesc', label: '描述', type: 'textarea' },
        { key: 'certTags', label: '技术标签', type: 'tags' },
        { key: 'certStatus', label: '状态标签' },
      ],
    },
    {
      group: '其他证书',
      list: {
        key: 'certOthers',
        itemLabel: '证书',
        fields: [
          { key: 'name', label: '名称' },
          { key: 'desc', label: '说明' },
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
      group: '时间线（教育/经历）',
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
        { key: 'contactHeading', label: '标题' },
        { key: 'contactSub', label: '副文案' },
        { key: 'email', label: '邮箱' },
        { key: 'github', label: 'GitHub' },
        { key: 'resumeNote', label: '简历卡文案' },
        { key: 'footer', label: '页脚版权行' },
      ],
    },
  ],

  defaults: {
    // H-1 修复：基本字段扁平化为顶层（与 schema/Editor 读写一致）
    name: '陈宇轩',
    mark: 'Y',
    badge: '2027 届应届 · 数据计算及应用',
    role: '让数据说话 · 让云承载计算',
    desc: '数据计算及应用专业大四学生，持有华为云计算 openEuler 认证。既能用 Python 把数据算清楚，也能在 openEuler / 华为云上把服务跑起来。正在寻找云计算 / 数据分析 / 后端开发方向的实习与工作机会。',
    chips: ['Python', 'SQL', 'openEuler', '华为云', 'Docker', 'Linux'],
    terminalTitle: 'yuxuan@openEuler: ~',
    terminal: '$ ssh yuxuan@openEuler-ECS # 华为云 ECS\nWelcome to openEuler 22.03 LTS\n$ python3 analyze.py --dataset sales.csv\n[1/3] 读取数据 …… ✓ 24,860 行\n[2/3] 计算指标 …… ✓ 转化率 3.42%\n[3/3] 输出报告 …… ✓ report.html\n$ systemctl status web # 服务稳定运行\n● active (running) · 99.98% uptime\n$',
    certName: '华为云计算认证 · openEuler',
    certMeta: 'Huawei Certified · 持证者：陈宇轩',
    proofLabel: '常用技术栈',
    proof: ['Python', 'Pandas / NumPy', 'SQL', 'Java', 'Linux', 'openEuler', '华为云 ECS', 'Docker', 'MySQL', 'Shell'],
    aboutTitle: '一个喜欢「把数据变成结论、把服务部署上线」的大四学生',
    about: [
      { text: '我目前是数据计算及应用专业的大四学生，方向聚焦在数据科学与云计算两个交叉领域。平时喜欢用 Python 处理真实数据、写 SQL 调优查询，也在 openEuler 系统上折腾过容器化部署。' },
      { text: '2026 年通过华为云计算 openEuler 认证，系统学习了 Linux 运维、云服务器部署、容器与自动化等企业级技能。我相信「数据驱动决策 + 云原生交付」是未来每个系统的基本功。' },
      { text: '性格踏实、自学能力强，习惯用文档沉淀知识。期待加入一支靠谱的团队，从真实业务里快速成长。' },
    ],
    stats: [
      { num: '2', lbl: '专业认证（含华为 openEuler）' },
      { num: '10+', lbl: '课设 / 个人项目' },
      { num: '3', lbl: '核心课程 TOP 5%' },
      { num: '2027', lbl: '应届毕业 · 可实习' },
    ],
    skills: [
      { title: '编程与脚本', desc: '写得出能跑的代码，也写得清注释。', items: ['Python', 'Java', 'SQL', 'Shell', 'Git'] },
      { title: '数据分析', desc: '清洗、分析、可视化一条龙。', items: ['Pandas', 'NumPy', 'Matplotlib', 'ECharts'] },
      { title: '云计算', desc: '从装系统到上线服务都亲手做过。', items: ['openEuler', '华为云 ECS', 'Docker', 'Nginx'] },
      { title: '数据库', desc: '会建模、会调优。', items: ['MySQL', 'Redis', 'SQLite'] },
      { title: '常用工具', desc: '工程化与协作的好帮手。', items: ['VS Code', 'Linux 终端', 'Postman'] },
    ],
    certName: '华为云计算认证 · openEuler',
    certMeta: 'Huawei Certified ICT Associate · 2026 年取得',
    certDesc: '覆盖 Linux 系统管理、openEuler 基础运维、云服务器（ECS）部署与管理、容器（Docker）与基础自动化。学习过程中在真实云环境中完成过 Web 服务部署、系统监控与故障排查练习。',
    certTags: ['openEuler 22.03', '华为云 ECS', 'Linux 运维', 'Docker'],
    certStatus: '持证 · 可验证',
    certOthers: [
      { name: 'CET-4 / CET-6', desc: '英语读写基础，可阅读英文文档' },
      { name: '全国计算机等级考试', desc: '二级 Python' },
      { name: '持续学习中', desc: '华为云 Developer · 大数据方向' },
    ],
    projects: [
      { title: '高校成绩数据分析系统', year: '2026 · 课程设计', desc: '采集并清洗全校 2 万+ 条成绩数据，用 Pandas 计算挂科率/绩点分布等指标，ECharts 输出可视化大屏。', stack: ['Python', 'Pandas', 'ECharts', 'MySQL'] },
      { title: 'openEuler 云上 Web 服务部署', year: '2026 · 认证实践', desc: '在华为云 ECS（openEuler 22.03）上完成 Nginx + 前后端容器化部署，配置安全组与 HTTPS，shell 脚本实现健康检查与自动重启。', stack: ['openEuler', '华为云 ECS', 'Docker', 'Nginx', 'Shell'] },
      { title: '校园二手交易平台 · 数据层', year: '2025 · 团队课设', desc: 'MySQL 表结构与索引优化，热门查询从 800ms 降到 60ms；Redis 缓存热点数据，接口 QPS 提升约 4 倍。', stack: ['MySQL', 'Redis', 'Python'] },
    ],
    timeline: [
      { when: '2023.09 — 2027.06', title: '本科 · 数据计算及应用', desc: '主修：Python 程序设计、数据结构与算法、数据库原理、云计算基础、数据挖掘。GPA 3.6 / 4.0。' },
      { when: '2026.03 — 2026.08', title: '华为云计算 · openEuler 认证备考', desc: '系统学习 Linux/openEuler 运维、云服务器部署、容器技术，并通过认证。' },
      { when: '2026.09 — 至今', title: '毕业设计 · 云计算方向', desc: '基于 openEuler + Docker 的轻量级数据服务部署方案设计（进行中）。' },
    ],
    contactHeading: '一起做点有意思的事？',
    contactSub: '正在寻找云计算 / 数据分析 / 后端方向的实习与全职机会，欢迎随时联系。',
    email: 'yuxuan.example@email.com',
    github: 'github.com/yuxuan',
    resumeNote: 'PDF 版 · 欢迎索取',
    footer: '© 2026 陈宇轩 · 数据计算及应用',
  },

  render(d) {
    const b = d
    const terms = (arr) => (arr || []).map((t) => `<span>${esc(t)}</span>`).join('')
    const iconFor = (kind) => ICON[kind] || ICON.folder
    return `
  <nav class="nav">
    <div class="container">
      <a class="logo" href="#top"><span class="mark">${esc(b.mark || 'P')}</span>${esc(b.name)}<span class="sub">.dev</span></a>
      <div class="links">
        <a href="#about">关于</a><a href="#skills">技能</a><a href="#cert">证书</a><a href="#projects">项目</a><a href="#contact">联系</a>
        <a class="cta" href="#contact">我要招人</a>
      </div>
    </div>
  </nav>
  <header class="hero" id="top">
    <div class="container">
      <div class="grid">
        <div>
          <span class="badge"><i></i>${esc(b.badge)}</span>
          <h1>你好，我是<span class="grad"> ${esc(b.name)}</span></h1>
          <div class="role">${esc(b.role)}</div>
          <p class="desc">${esc(b.desc)}</p>
          <div class="cta-row">
            <a class="btn btn-p" href="#projects">查看我的项目</a>
            <a class="btn btn-g" href="#contact">下载简历 ↓</a>
          </div>
          <div class="chips">${terms(b.chips)}</div>
        </div>
        <div>
          <div class="terminal">
            <div class="bar"><i class="r"></i><i class="y"></i><i class="g"></i><span>${esc(b.terminalTitle)}</span></div>
            <pre>${esc(b.terminal).split('\n').map((line, i) => line ? `<span class="c${(i % 4) + 1}">${line}</span>` : '<br>').join('\n')}${String(b.terminal || '').trimEnd().endsWith('$') ? '<span class="cursor"></span>' : ''}</pre>
          </div>
          <div class="cert-strip">
            <span class="logo">HC</span>
            <div class="txt"><b>${esc(b.certName)}</b><span>${esc(b.certMeta)}</span></div>
            <span class="tag">已认证</span>
          </div>
        </div>
      </div>
      <div class="proof">
        <div class="lbl">${esc(d.proofLabel || '常用技术栈')}</div>
        <div class="row">${(d.proof || []).map((p) => `<span>${esc(p)}</span>`).join('')}</div>
      </div>
    </div>
  </header>

  <section id="about" class="sec">
    <div class="container">
      <div class="head"><div class="eyebrow">01 · About</div><h2>关于我</h2><p>${esc(d.aboutTitle || '')}</p></div>
      <div class="about-grid">
        <div class="text">${(d.about || []).map((p) => `<p>${esc(p.text)}</p>`).join('')}</div>
        <div class="stats">${(d.stats || []).map((s) => `<div class="stat"><div class="num">${esc(s.num)}</div><div class="lbl">${esc(s.lbl)}</div></div>`).join('')}</div>
      </div>
    </div>
  </section>

  <section id="skills" class="sec">
    <div class="container">
      <div class="head"><div class="eyebrow">02 · Skills</div><h2>技能栈</h2><p>数据计算为里，云计算为用</p></div>
      <div class="bento">${(d.skills || []).map((s, i) => `
        <div class="bento-card${i === 0 ? ' wide' : ''}">
          <div class="ic ic-${SKILL_COLORS[i % 4]}">${iconFor(['cloud', 'chart', 'db', 'code'][i % 4])}</div>
          <h3>${esc(s.title)}</h3>
          <div class="d">${esc(s.desc)}</div>
          <div class="list">${terms(s.items)}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="cert" class="sec">
    <div class="container">
      <div class="head"><div class="eyebrow">03 · Certification</div><h2>证书与认证</h2><p>用认证证明：我不只是「学过」，而是「做过」</p></div>
      <div class="cert-card">
        <div class="seal">HCIA<br><small>Cloud · openEuler</small></div>
        <div>
          <h3>${esc(d.certName)}</h3>
          <div class="meta">${esc(d.certMeta)}</div>
          <p class="desc">${esc(d.certDesc)}</p>
          <div class="tags">${terms(d.certTags)}</div>
        </div>
        <span class="tag">${esc(d.certStatus)}</span>
      </div>
      <div class="cert-more">${(d.certOthers || []).map((c, i) => `
        <div class="cert-mini">
          <div class="ic ic-${['green', 'cyan', 'blue'][i % 3]}">${iconFor(['shield', 'doc', 'chart'][i % 3])}</div>
          <b>${esc(c.name)}</b><span>${esc(c.desc)}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="projects" class="sec">
    <div class="container">
      <div class="head"><div class="eyebrow">04 · Projects</div><h2>项目经历</h2><p>从课设到实践，用真实问题练手</p></div>
      <div class="projects">${(d.projects || []).map((p, i) => `
        <article class="project">
          <div class="top"><span class="folder ic-${SKILL_COLORS[i % 4]}">${iconFor(['folder', 'cloud', 'db'][i % 3])}</span><span class="year">${esc(p.year)}</span></div>
          <h3>${esc(p.title)}</h3>
          <div class="d">${esc(p.desc)}</div>
          <div class="stack">${terms(p.stack)}</div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section id="edu" class="sec">
    <div class="container">
      <div class="head"><div class="eyebrow">05 · Education</div><h2>教育背景</h2><p>一步一个脚印</p></div>
      <div class="timeline">${(d.timeline || []).map((t) => `
        <div class="tl-item">
          <div class="when">${esc(t.when)}</div>
          <h3>${esc(t.title)}</h3>
          <div class="desc">${esc(t.desc)}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="contact" class="sec">
    <div class="container">
      <div class="contact-box">
        <h2>${esc(d.contactHeading || '')}</h2>
        <p>${esc(d.contactSub || '')}</p>
        <div class="contact-row">
          <a class="contact-card" href="mailto:${esc(d.email)}">
            <span class="ic ic-cyan">${ICON.mail}</span><span><b>邮箱</b><span>${esc(d.email)}</span></span>
          </a>
          <a class="contact-card" href="https://${esc(d.github)}" target="_blank" rel="noopener">
            <span class="ic ic-blue">${ICON.github}</span><span><b>GitHub</b><span>${esc(d.github)}</span></span>
          </a>
          <a class="contact-card" href="mailto:${esc(d.email)}?subject=简历请求">
            <span class="ic ic-red">${ICON.file}</span><span><b>简历</b><span>${esc(d.resumeNote)}</span></span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer><div class="container">${esc(d.footer || '')}<br><span class="gen">made with PersonalPage Hub</span></div></footer>`
  },

  css: `
:root{--bg:#0A0F1E;--card:#111B33;--card2:#16213D;--border:#1E2A45;--fg:#E8EDF7;--fg2:#C7D2E8;--muted:#9FB3D1;--primary:#22D3EE;--on-primary:#062A36;--secondary:#3B82F6;--huawei:#E53E3E;--success:#34D399;--font:'Inter','PingFang SC','Microsoft YaHei',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--font);font-size:16px;line-height:1.7;background:var(--bg);color:var(--fg);overflow-x:hidden}
section{scroll-margin-top:72px}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:4px}
.container{max-width:1080px;margin:0 auto;padding:0 20px}
body::before{content:'';position:fixed;inset:0;z-index:-2;pointer-events:none;background:radial-gradient(600px 300px at 15% -10%,rgba(34,211,238,.10),transparent 60%),radial-gradient(700px 320px at 90% 8%,rgba(59,130,246,.10),transparent 60%),var(--bg)}
body::after{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(rgba(34,211,238,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.045) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,#000 30%,transparent 75%)}
.nav{position:sticky;top:0;z-index:60;background:rgba(10,15,30,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav .container{display:flex;align-items:center;height:60px;gap:20px}
.logo{display:flex;align-items:center;gap:8px;font-weight:700;font-size:17px}
.logo .mark{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,var(--primary),var(--secondary));display:grid;place-items:center;font-family:var(--mono);font-size:13px;color:var(--on-primary);font-weight:800}
.logo .sub{font-weight:400;color:var(--muted);font-size:13px}
.links{display:flex;gap:4px;margin-left:auto;align-items:center}
.links a{font-size:14px;color:var(--muted);padding:6px 12px;border-radius:8px}
.links a:hover{color:var(--fg)}
.links .cta{background:var(--primary);color:var(--on-primary);font-weight:600;border-radius:999px;padding:8px 18px}
.hero{padding:72px 0 56px}
.hero .grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.badge{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--primary);border:1px solid rgba(34,211,238,.35);background:rgba(34,211,238,.08);padding:5px 14px;border-radius:999px;font-family:var(--mono)}
.badge i{width:7px;height:7px;border-radius:50%;background:var(--success);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.hero h1{font-size:clamp(38px,5.6vw,58px);font-weight:800;line-height:1.12;margin:18px 0 6px;letter-spacing:-.5px;animation:fadeUp .7s ease-out both}
.grad{background:linear-gradient(92deg,var(--primary),var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent}
.role{font-size:clamp(18px,2.4vw,22px);color:var(--fg2);font-weight:600;animation:fadeUp .7s ease-out .1s both}
.desc{margin:16px 0 26px;color:var(--muted);max-width:28em;font-size:16.5px;animation:fadeUp .7s ease-out .18s both}
.cta-row{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;min-height:46px;padding:0 24px;border-radius:999px;font-size:15px;font-weight:600}
.btn-p{background:var(--primary);color:var(--on-primary)}
.btn-g{border:1px solid var(--border);color:var(--fg2)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}
.chip,.tags span,.stack span{font-size:12.5px;font-family:var(--mono);color:var(--muted);border:1px solid var(--border);padding:4px 12px;border-radius:999px;background:rgba(17,27,51,.6)}
.terminal{background:var(--card);border:1px solid var(--border);border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,.35);overflow:hidden;font-family:var(--mono);font-size:13px;line-height:1.75}
.terminal .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:var(--card2);border-bottom:1px solid var(--border)}
.terminal .bar i{width:11px;height:11px;border-radius:50%}
.terminal .bar .r{background:#FF5F57}.terminal .bar .y{background:#FEBC2E}.terminal .bar .g{background:#28C840}
.terminal .bar span{margin-left:8px;color:var(--muted);font-size:12px}
.terminal pre{padding:14px 16px;overflow-x:auto;color:var(--fg2)}
.c1{color:#67E8F9}.c2{color:#93C5FD}.c3{color:#6EE7B7}.c4{color:var(--muted)}
.cursor{display:inline-block;width:8px;height:15px;background:var(--primary);vertical-align:-2px;animation:blink 1.1s step-end infinite}
@keyframes blink{50%{opacity:0}}
.cert-strip{margin-top:16px;display:flex;align-items:center;gap:14px;background:linear-gradient(90deg,rgba(229,62,62,.12),rgba(229,62,62,.04));border:1px solid rgba(229,62,62,.4);border-radius:12px;padding:12px 16px}
.cert-strip .logo{width:40px;height:40px;border-radius:10px;background:var(--huawei);color:#fff;display:grid;place-items:center;font-size:20px;font-weight:800}
.cert-strip .txt b{display:block;font-size:14px}
.cert-strip .txt span{font-size:12px;color:var(--muted)}
.cert-strip .tag,.cert-card .tag{font-size:11.5px;color:var(--huawei);border:1px solid rgba(229,62,62,.5);padding:3px 10px;border-radius:999px;white-space:nowrap}
.proof{margin-top:44px;padding-top:26px;border-top:1px solid var(--border)}
.proof .lbl{font-size:12px;color:var(--muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.proof .row{display:flex;flex-wrap:wrap;gap:12px 28px}
.proof .row span{font-family:var(--mono);font-size:15px;color:var(--fg2);opacity:.85}
.sec{padding:56px 0 24px}
.head{margin-bottom:36px}
.eyebrow{color:var(--primary);font-family:var(--mono);font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px}
.head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700}
.head p{color:var(--muted);margin-top:6px;font-size:15px}
.about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;align-items:start}
.text p{color:var(--fg2);margin-bottom:14px}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.stat{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 16px}
.stat .num{font-size:28px;font-weight:800;font-family:var(--mono);color:var(--primary)}
.stat .lbl{font-size:13px;color:var(--muted);margin-top:4px}
.bento{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.bento-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px}
.bento-card.wide{grid-column:span 2}
.bento-card .ic{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;margin-bottom:14px}
.bento-card .ic svg{width:22px;height:22px}
.bento-card h3{font-size:17px;font-weight:700}
.bento-card .d{font-size:13.5px;color:var(--muted);margin-top:4px}
.list{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.ic-cyan{background:rgba(34,211,238,.12);color:var(--primary)}
.ic-blue{background:rgba(59,130,246,.14);color:var(--secondary)}
.ic-green{background:rgba(52,211,153,.12);color:var(--success)}
.ic-red{background:rgba(229,62,62,.12);color:var(--huawei)}
.cert-card{display:flex;gap:22px;align-items:center;background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid rgba(229,62,62,.35);border-radius:16px;padding:26px}
.cert-card .seal{width:84px;height:84px;border-radius:18px;flex-shrink:0;background:linear-gradient(135deg,#D0201F,#A01210);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px;text-align:center;line-height:1.25;box-shadow:0 8px 24px rgba(229,62,62,.35)}
.cert-card .seal small{font-size:10px;font-weight:500;opacity:.9;display:block;margin-top:2px}
.cert-card h3{font-size:21px;font-weight:800}
.cert-card .meta{font-size:13px;color:var(--muted);margin-top:4px;font-family:var(--mono)}
.cert-card .desc{font-size:14px;color:var(--fg2);margin-top:10px;max-width:46em}
.cert-card .tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}
.cert-card .tags span{color:var(--huawei);border-color:rgba(229,62,62,.45);background:rgba(229,62,62,.08)}
.cert-more{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}
.cert-mini{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px}
.cert-mini .ic{width:34px;height:34px;border-radius:8px;display:grid;place-items:center;margin-bottom:10px}
.cert-mini .ic svg{width:18px;height:18px}
.cert-mini b{font-size:14px;display:block}
.cert-mini span{font-size:12px;color:var(--muted)}
.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.project{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px;display:flex;flex-direction:column}
.project .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.project .folder{width:38px;height:38px;border-radius:10px;display:grid;place-items:center}
.project .folder svg{width:20px;height:20px}
.project .year{font-size:12px;font-family:var(--mono);color:var(--muted)}
.project h3{font-size:16.5px;font-weight:700}
.project .d{font-size:13.5px;color:var(--muted);margin-top:6px;flex:1}
.project .stack{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.project .stack span{font-size:11.5px;color:var(--fg2);background:var(--card2);border-radius:8px}
.timeline{position:relative;padding-left:26px}
.timeline::before{content:'';position:absolute;left:7px;top:6px;bottom:6px;width:2px;background:var(--border)}
.tl-item{position:relative;padding:0 0 26px}
.tl-item::before{content:'';position:absolute;left:-25px;top:7px;width:12px;height:12px;border-radius:50%;background:var(--primary);border:3px solid var(--bg);box-shadow:0 0 0 2px rgba(34,211,238,.4)}
.tl-item .when{font-family:var(--mono);font-size:13px;color:var(--primary)}
.tl-item h3{font-size:17px;font-weight:700;margin-top:2px}
.tl-item .desc{font-size:14px;color:var(--muted);margin-top:4px}
.contact-box{background:linear-gradient(135deg,rgba(34,211,238,.09),rgba(59,130,246,.07));border:1px solid rgba(34,211,238,.3);border-radius:16px;padding:44px 32px;text-align:center}
.contact-box h2{font-size:clamp(24px,3.4vw,34px);font-weight:800}
.contact-box p{color:var(--muted);margin:10px auto 26px;max-width:30em}
.contact-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.contact-card{display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px 18px;min-width:190px}
.contact-card .ic{width:34px;height:34px;border-radius:8px;display:grid;place-items:center}
.contact-card .ic svg{width:18px;height:18px}
.contact-card b{display:block;font-size:14px}
.contact-card span{font-size:12px;color:var(--muted)}
footer{border-top:1px solid var(--border);margin-top:64px;padding:26px 0 34px;text-align:center;font-size:13px;color:var(--muted)}
.gen{margin-top:8px;font-size:12px;opacity:.75;font-family:var(--mono)}
@media(max-width:900px){
  .hero .grid,.about-grid{grid-template-columns:1fr;gap:32px}
  .bento{grid-template-columns:repeat(2,1fr)}
  .bento-card.wide{grid-column:span 2}
  .projects,.cert-more{grid-template-columns:1fr}
  .links{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;max-width:100%;mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent);-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 30px),transparent)}
  .links::-webkit-scrollbar{display:none}
  .links a{white-space:nowrap;flex-shrink:0}
}
@media(max-width:560px){
  .bento{grid-template-columns:1fr}
  .bento-card.wide{grid-column:span 1}
  .stats{grid-template-columns:repeat(2,1fr)}
  .cert-card{flex-direction:column;text-align:center}
  .cert-card .tag{margin-left:0}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`,
}
