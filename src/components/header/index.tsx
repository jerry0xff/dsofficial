import langSwitch from "@/assets/lang-switch.svg"
import logoText from "@/assets/logo-text.svg"
import logo from "@/assets/logo.svg"
import { isPC } from "@/utils/platform"
import { launchApp } from "@/utils/utils"
import cx from "classnames"
import { useState } from "react"
import styles from "./index.module.less"

export default function Header() {
  // 简单的中英文开关，本地状态版
  const [lang, setLang] = useState<"en" | "zh">("en")

  function toggleLang() {
    setLang((prev) => (prev === "en" ? "zh" : "en"))
    // 这里如果你后面接 i18n，可以在这里塞真正的语言切换逻辑
  }

  return (
    <header
      className={cx(styles.header, {
        [styles.h5]: !isPC,
      })}
    >
      {/* 左侧：Logo */}
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.logoText} src={logoText} alt="DeShare" />
      </div>

      {/* 中间：导航链接（PC 显示，移动端可以隐藏或下拉） */}
      <nav
        className={cx(styles.nav, {
          [styles.hideOnMobile]: !isPC,
        })}
      >
        <a className={styles.navItem} href="#how-it-works">
          How it works
        </a>
        <a className={styles.navItem} href="#faq">
          FAQ
        </a>
        <a className={styles.navItem} href="#white-paper" target="_blank" rel="noopener noreferrer">
          White Paper
        </a>

        <span className={styles.divider} />

        {/* <button className={styles.langSwitcher} onClick={toggleLang}> */}
        <img className={styles.langIcon} src={langSwitch} alt="lang" onClick={toggleLang} />
        {/* <span className={styles.langText}>{lang === "en" ? "EN" : "中"}</span> */}
        {/* </button> */}

        <span className={styles.divider} />
        <button className={styles.launch} onClick={launchApp}>
          Launch App
        </button>
      </nav>
    </header>
  )
}
