/**
 * 共享字体 + 基线层（注入到所有模板生成的独立 HTML 中）
 *
 * 1) 西文字体：@fontsource woff2 经 vite `?inline` 内联为 data URI（构建时打进
 *    单文件 bundle），生成 @font-face，font-display:swap —— 下载的模板 HTML
 *    离线打开也能正确显示 Inter / Space Grotesk / Poppins / JetBrains Mono。
 * 2) 中文字体兜底：Google Fonts 加载 Noto Sans SC / Noto Serif SC（display=swap），
 *    国内网络不通时静默回退到系统字体栈（PingFang / 微软雅黑 / 宋体 等，模板 CSS
 *    的 font-family 里已有回退）。
 * 3) 基线 CSS：焦点环 / prefers-reduced-motion / 滚动条 / 图片约束，
 *    让 9 套模板共享同一套「产品家族」底层规范，风格层各自覆盖。
 */
import inter400 from '@fontsource/inter/files/inter-latin-400-normal.woff2?inline'
import inter600 from '@fontsource/inter/files/inter-latin-600-normal.woff2?inline'
import inter700 from '@fontsource/inter/files/inter-latin-700-normal.woff2?inline'
import inter800 from '@fontsource/inter/files/inter-latin-800-normal.woff2?inline'
import sg500 from '@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2?inline'
import sg700 from '@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2?inline'
import pop600 from '@fontsource/poppins/files/poppins-latin-600-normal.woff2?inline'
import pop700 from '@fontsource/poppins/files/poppins-latin-700-normal.woff2?inline'
import jbm400 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2?inline'
import jbm600 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2?inline'
import jbm700 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2?inline'
import jbm800 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-800-normal.woff2?inline'

const ff = (family, weight, url) =>
  `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:swap;src:url(${url}) format('woff2')}`

/** 自托管西文字体（内联 data URI，离线可用） */
export const FONT_FACE_CSS = [
  ff('Inter', 400, inter400), ff('Inter', 600, inter600), ff('Inter', 700, inter700), ff('Inter', 800, inter800),
  ff('Space Grotesk', 500, sg500), ff('Space Grotesk', 700, sg700),
  ff('Poppins', 600, pop600), ff('Poppins', 700, pop700),
  ff('JetBrains Mono', 400, jbm400), ff('JetBrains Mono', 600, jbm600), ff('JetBrains Mono', 700, jbm700), ff('JetBrains Mono', 800, jbm800),
].join('')

/** 中文字体兜底（Google Fonts；失败自动回退系统栈，不阻塞） */
export const FONT_LINKS = [
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700&display=swap',
].map((href) => `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">`).join('')

/**
 * 共享基线 CSS（放在模板 CSS 之前，模板可覆盖）：
 * - 统一焦点环（WCAG 2.4.7）
 * - prefers-reduced-motion 全关动画
 * - 滚动条 / 选中色 / 图片约束
 */
export const BASELINE_CSS = `
:focus-visible{outline:2px solid #6D5BFF;outline-offset:2px;border-radius:4px}
img{max-width:100%;height:auto}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-thumb{background:#c8c8c8;border-radius:999px;border:2px solid transparent;background-clip:content-box}
::selection{background:rgba(109,91,255,.22)}
/* 一次性 hero 进入动画（模板在 hero 标题上引用；只动一次，不循环） */
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}
}`

/** 注入到模板 HTML <head> 的完整字体 + 基线块 */
export function sharedHeadBlock() {
  return `<style>${FONT_FACE_CSS}</style>${FONT_LINKS}<style>${BASELINE_CSS}</style>`
}
