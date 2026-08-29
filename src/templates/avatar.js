/**
 * 共享头像渲染：有图显图，无图显示抽象几何纹理（替代"首字母"廉价方案）。
 *
 * 用法（在模板 render 中）：
 *   ${avatarHtml(d.avatar, d.name, 'avatar')}
 * 模板 CSS 需提供：
 *   .avatar（容器尺寸/圆角/定位）
 *   .avatar img（object-fit:cover 撑满）
 *   .avatar-geo（几何纹理容器，用模板自己的色变量）
 *   .avatar-geo i（3 个抽象形状）
 *
 * 几何纹理不依赖任何图片，纯 CSS 渐变圆，观感上像"设计选择"而非"默认占位"。
 */
import { esc } from '../engine/export.js'

export function avatarHtml(avatar, name, cls = 'avatar') {
  if (avatar && String(avatar).trim()) {
    return `<span class="${cls}"><img src="${esc(String(avatar).trim())}" alt="${esc(name || '头像')}" loading="lazy"></span>`
  }
  return `<span class="${cls}"><span class="${cls}-geo" aria-hidden="true"><i></i><i></i><i></i></span></span>`
}

/** 几何纹理的基础 CSS 片段（模板可覆盖颜色/形状） */
export const avatarGeoCss = (cls = 'avatar') => `
.${cls}{position:relative;overflow:hidden;display:inline-block;line-height:0}
.${cls} img{width:100%;height:100%;object-fit:cover}
.${cls}-geo{position:absolute;inset:0;display:block;background:linear-gradient(150deg,var(--geo-a,#E9D8FF),var(--geo-b,#B8A8FF) 55%,var(--geo-c,#8F7BFF))}
.${cls}-geo i{position:absolute;border-radius:50%;display:block}
.${cls}-geo i:nth-child(1){width:68%;height:68%;left:14%;top:6%;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.55),rgba(255,255,255,0) 62%)}
.${cls}-geo i:nth-child(2){width:46%;height:46%;right:6%;bottom:12%;background:radial-gradient(circle at 40% 40%,rgba(255,255,255,.38),rgba(255,255,255,0) 66%)}
.${cls}-geo i:nth-child(3){width:20%;height:20%;right:22%;top:18%;background:rgba(255,255,255,.5);border-radius:2px;transform:rotate(24deg)}
`
