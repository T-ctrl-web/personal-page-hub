import { useEffect, useState } from 'react'
import Market from './pages/Market.jsx'
import Detail from './pages/Detail.jsx'
import Workspace from './pages/Workspace.jsx'
import Edit from './pages/Edit.jsx'
import AiGen from './pages/AiGen.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { TEMPLATES } from './templates/index.js'

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  const parts = h.split('/')
  return { path: parts[0] || 'market', param: parts.slice(1).map(decodeURIComponent).join('/') }
}

export default function App() {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const on = () => { setRoute(parseHash()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const nav = (path) => { window.location.hash = path }

  let page
  if (route.path === 'detail') {
    page = <Detail nav={nav} routeParam={route.param} />
  } else if (route.path === 'edit') {
    page = <Edit param={route.param} nav={nav} />
  } else if (route.path === 'workspace') {
    page = <Workspace nav={nav} />
  } else if (route.path === 'ai') {
    page = <AiGen nav={nav} />
  } else {
    page = <Market nav={nav} />
  }

  return (
    <ErrorBoundary>
      <div className="hub">
      <header className="hub-nav">
        <button className="hub-logo" onClick={() => nav('')}>
          <span className="hub-logo-mark">P</span>
          <span>PersonalPage <b>Hub</b></span>
        </button>
        <nav className="hub-tabs">
          <button className={route.path === 'market' ? 'active' : ''} onClick={() => nav('')}>模板市场</button>
          <button className={route.path === 'ai' ? 'active' : ''} onClick={() => nav('ai')}>AI 生成</button>
          <button className={route.path === 'workspace' ? 'active' : ''} onClick={() => nav('workspace')}>我的模板</button>
        </nav>
        <span className="hub-badge">{TEMPLATES.length} 内置模板</span>
      </header>
      <main className="hub-main">{page}</main>
      <footer className="hub-foot">PersonalPage Hub · 模板引擎 MVP · 数据保存在浏览器本地</footer>
      </div>
    </ErrorBoundary>
  )
}
