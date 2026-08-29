import { useEffect, useRef, useState } from 'react'

/**
 * 视口懒加载容器：元素进入视口（提前 300px 预加载）才渲染 children；
 * 一旦渲染后保持挂载（不随滚出销毁，避免重复渲染开销）。
 * 用于市场卡片缩略图：避免一次性渲染几十个大 iframe 导致卡顿。
 */
export default function LazyCover({ children, className, style }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setShow(true); return }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShow(true)
            io.disconnect()
            break
          }
        }
      },
      { rootMargin: '300px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={style} aria-hidden="true">
      {show ? children : null}
    </div>
  )
}
