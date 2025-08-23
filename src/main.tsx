import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { isPC, deviceJudge } from './utils/platform.ts'

deviceJudge.watchScreenChange()

const setRem = function () {
  const designWidth = isPC ? 1440 : 375;
  const minWidth = isPC ? 1280 : 375;
  const baseFontSize = 100;
  function setRem() {
    const clientWidth = Math.max(Math.min(document.documentElement.clientWidth, designWidth), minWidth);
    const scale = clientWidth / designWidth;
    const effectiveScale = Math.max(scale, minWidth / designWidth);
    document.documentElement.style.fontSize = baseFontSize * effectiveScale + 'px';
  }
  window.addEventListener('resize', setRem);
  setRem();
}

setRem()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (isPC) {
  document.body.style.minWidth = '1280px';
}