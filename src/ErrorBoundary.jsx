import { Component } from 'react'
import Icon from './engine/Icon.jsx'

/** 全局错误边界：任何渲染异常都显示可读错误页，而不是整页白屏 */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="hub">
          <div style={{ maxWidth: 640, margin: '80px auto', padding: '0 20px' }}>
            <div className="empty-state">
              <div className="ring"><Icon name="alert" size={40} /></div>
              <h3>页面渲染出错</h3>
              <p style={{ textAlign: 'left', fontSize: 12.5, whiteSpace: 'pre-wrap', background: 'var(--danger-soft)', color: 'var(--danger)', padding: 12, borderRadius: 'var(--radius-md)', marginTop: 8 }}>
                {String(this.state.error?.message || this.state.error)}
              </p>
              <button className="btn btn-p" onClick={() => { this.setState({ error: null }); window.location.hash = '' }}>回到模板市场</button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
