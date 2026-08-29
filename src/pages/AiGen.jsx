import { useEffect, useState } from 'react'
import { callDeepSeek, extractJson, buildTemplateFromOutput, getApiKey, setApiKey } from '../ai/generate.js'
import { saveCustomOutput, loadCustomOutputs } from '../templates/index.js'
import { downloadTemplate } from '../engine/export.js'
import { validateRenderBody } from '../engine/sandboxRenderer.js'
import PreviewFrame from '../engine/PreviewFrame.jsx'
import FullscreenPreview from '../engine/FullscreenPreview.jsx'
import Icon from '../engine/Icon.jsx'

const STYLE_OPTIONS = ['自动', '极简瑞士风', 'Bento 网格', '编辑杂志风', '暗色高级感', '玻璃拟态', '柔和暖色', '工业极客', '艺术实验']
const SECTION_OPTIONS = ['关于我', '技能', '项目', '证书', '教育', '联系方式']

/* 会话级持久化：切换页面（组件卸载）后恢复生成结果与记住勾选 */
const RESULT_SESSION = 'pph-last-result-id'
const REMEMBER_SESSION = 'pph-ds-remember'

export default function AiGen({ nav }) {
  const [career, setCareer] = useState('')
  const [style, setStyle] = useState('自动')
  const [sections, setSections] = useState(SECTION_OPTIONS)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [key, setKey] = useState(getApiKey())
  const [remember, setRemember] = useState(() => sessionStorage.getItem(REMEMBER_SESSION) === '1' || !!localStorage.getItem('pph-ds-key'))
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null) // { template }
  const [fs, setFs] = useState(false)

  // 挂载时恢复上次生成结果（模板已存 localStorage，按 id 重新组装）
  useEffect(() => {
    const id = sessionStorage.getItem(RESULT_SESSION)
    if (!id) return
    const output = loadCustomOutputs().find((o) => o.id === id)
    if (!output) return
    try {
      const t = buildTemplateFromOutput(output)
      setResult(t)
    } catch { /* 模板损坏则忽略 */ }
  }, [])

  const toggleSection = (s) => setSections((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s])
  const toggleRemember = (v) => {
    setRemember(v)
    sessionStorage.setItem(REMEMBER_SESSION, v ? '1' : '0')
  }

  const generate = async () => {
    setError(''); setResult(null)
    const apiKey = key.trim()
    if (!apiKey) { setError('请先填写你的 DeepSeek API Key（平台：platform.deepseek.com → API Keys）'); return }
    setApiKey(apiKey, remember)
    setBusy(true)
    try {
      const userPrompt = `请为一个【${career || '个人'}】的个人主页生成模板。
风格偏好：${style === '自动' ? '根据职业自动选择最合适的风格' : style}。
需要包含的板块：${sections.length ? sections.join('、') : '全部常用板块'}。
姓名示例：${name || '张三'}。
邮箱示例：${email || 'zhangsan@example.com'}。
请开始生成。`
      const text = await callDeepSeek(apiKey, userPrompt)
      const output = extractJson(text)
      const template = buildTemplateFromOutput(output)
      // 预检：语法编译检查（不执行，安全）；运行时错误由沙箱预览 iframe 兜底显示
      const check = validateRenderBody(output.renderBody)
      if (!check.ok) {
        throw new Error('AI 生成的模板代码无法解析：' + check.error + '\n（可点击重新生成重试）')
      }
      saveCustomOutput(output) // 自动存入本地自定义模板库（市场页可见）
      sessionStorage.setItem(RESULT_SESSION, output.id) // 记录结果 id，切页可恢复
      setResult(template)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <div className="hero-band" style={{ margin: '0 -20px 0', padding: '44px 24px 56px' }}>
        <div className="inner">
          <span className="hero-badge-pill"><span className="dot"></span>AI 生成 · 第二阶段</span>
          <h1>用一句话，生成你的<span className="grad">专属模板</span></h1>
          <p className="sub">告诉 AI 你的职业、风格与需要的板块，DeepSeek 会生成一个全新的、可编辑可下载的模板。Key 只存在你的浏览器里，直连 API，不经过任何服务器。</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 22, alignItems: 'start', marginTop: 26 }}>
        {/* 左侧：表单 */}
        <div className="card edit-panel" style={{ position: 'sticky', top: 72 }}>
          <h2>描述你的主页</h2>
          <p className="sub">填得越具体，生成越贴合</p>

          <div className="ed-group">
            <div className="ed-group-title">01 · 基本信息</div>
            <div className="ed-field">
              <label>职业 / 用途 *</label>
              <input type="text" placeholder="例：数据计算专业大四学生，云计算方向，求职中" value={career} onChange={(e) => setCareer(e.target.value)} />
            </div>
            <div className="ed-field">
              <label>姓名（示例）</label>
              <input type="text" placeholder="张三" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="ed-field">
              <label>邮箱（示例）</label>
              <input type="text" placeholder="zhangsan@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="ed-group">
            <div className="ed-group-title">02 · 风格与板块</div>
            <div className="ed-field">
              <label>风格偏好</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)}>
                {STYLE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="ed-field">
              <label>需要的板块（点击多选）</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {SECTION_OPTIONS.map((s) => (
                  <button key={s} className={`chip-btn ${sections.includes(s) ? 'active' : ''}`} onClick={() => toggleSection(s)}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="ed-group">
            <div className="ed-group-title">03 · API Key</div>
            <div className="ed-field">
              <label>DeepSeek API Key</label>
              <input type="password" placeholder="sk-..." value={key} onChange={(e) => setKey(e.target.value)} />
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--fg-2)', marginTop: 8, cursor: 'pointer' }}>
                <input type="checkbox" checked={remember} onChange={(e) => toggleRemember(e.target.checked)} style={{ width: 15, height: 15 }} />
                记住 Key（默认不记住，仅本次会话可用；勾选后存入 localStorage）
              </label>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 6 }}>Key 仅直连 api.deepseek.com，不经过任何服务器。在 platform.deepseek.com → API Keys 创建。</div>
            </div>
          </div>

          {error && <div style={{ color: 'var(--danger)', fontSize: 13, marginBottom: 12, background: 'var(--danger-soft)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>{error}</div>}

          <button className="btn btn-p" style={{ width: '100%' }} onClick={generate} disabled={busy}>
            {busy ? <><Icon name="refresh" size={16} className="spin" /> AI 生成中（约 30-60 秒）…</> : <><Icon name="sparkles" size={16} /> 生成我的模板</>}
          </button>
          <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 10, textAlign: 'center' }}>生成消耗少量 API 额度 · AI 内容建议核对后再使用</div>
        </div>

        {/* 右侧：结果 */}
        <div>
          {busy ? (
            <div className="empty-state">
              <div className="ring" style={{ animation: 'pulse 1.4s infinite' }}><Icon name="robot" size={40} /></div>
              <h3>AI 正在构思你的模板…</h3>
              <p>正在生成布局、配色与内容结构，请稍候（首次可能较慢）</p>
            </div>
          ) : result ? (
            <div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 20, fontWeight: 800 }}>{result.name}</h2>
                <span className="chip-btn" style={{ background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'default' }}>AI 生成</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                  <button className="btn btn-p" onClick={() => nav(`edit/new/${result.id}`)}><Icon name="pencil" size={15} /> 编辑我的信息</button>
                  <button className="btn btn-line" onClick={() => downloadTemplate(result, structuredClone(result.defaults), `${result.id}.html`)}><Icon name="download" size={15} /> 下载</button>
                  <button className="btn btn-line" onClick={generate} disabled={busy}><Icon name="refresh" size={15} /> 重新生成</button>
                </div>
              </div>
              <div className="preview-wrap">
                <PreviewFrame className="preview-frame" template={result} data={structuredClone(result.defaults)} title="AI 模板预览" cacheKey={`${result.id}|gen`} />
                <button className="fs-launch" onClick={() => setFs(true)}><Icon name="expand" size={14} /> 全屏预览</button>
              </div>
              {fs && <FullscreenPreview template={result} data={structuredClone(result.defaults)} onClose={() => setFs(false)} />}
            </div>
          ) : (
            <div className="empty-state">
              <div className="ring"><Icon name="sparkles" size={40} /></div>
              <h3>还没有生成结果</h3>
              <p>填好左侧表单，点击「生成我的模板」；生成的模板会自动保存，并出现在模板市场里（标注 AI 生成）</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
