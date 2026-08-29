import React from 'react'
import { createRoot } from 'react-dom/client'
// 字体（@fontsource，随构建内联，离线可用）
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(<App />)
