import langswitchCn from "@/assets/lang-switch-cn.svg"
import langSwitchEn from "@/assets/lang-switch-en.svg"
import logoText from "@/assets/logo-text.svg"
import logo from "@/assets/logo.svg"
import { isPC } from "@/utils/platform"
import { launchApp } from "@/utils/utils"
import cx from "classnames"
import { useState } from "react"
import styles from "./index.module.less"

export default function Header() {
  const [lang, setLang] = useState<"en" | "zh">(() => (localStorage.getItem("lang") as "en" | "zh") || "en")

  const toggleLang = () => {
    const next = lang === "en" ? "zh" : "en"
    setLang(next)
    localStorage.setItem("lang", next)
  }

  return (
    <header
      className={cx(styles.header, {
        [styles.h5]: !isPC,
      })}
    >
      {/* ===================== PC layout ===================== */}
      {isPC && (
        <>
          {/* 左侧：Logo */}
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            <img className={styles.logoText} src={logoText} alt="DeShare" />
          </div>

          {/* 中间 / 右侧：导航 + 语言 + Launch */}
          <nav className={styles.nav}>
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

            <img
              className={styles.langIcon}
              src={lang === "en" ? langSwitchEn : langswitchCn}
              alt="lang"
              onClick={toggleLang}
            />

            <span className={styles.divider} />

            <button className={styles.launch} onClick={launchApp}>
              Launch App
            </button>
          </nav>
        </>
      )}

      {/* ===================== Mobile layout ===================== */}
      {!isPC && (
        <div className={styles.mobileWrapper}>
          {/* 第一行：左logo + 右侧语言按钮&Launch按钮 */}
          <div className={styles.mobileTopRow}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={logo} alt="logo" />
              <img className={styles.logoText} src={logoText} alt="DeShare" />
            </div>

            <div className={styles.mobileRight}>
              <img
                className={styles.langIcon}
                src={lang === "en" ? langSwitchEn : langswitchCn}
                alt="lang"
                onClick={toggleLang}
              />
              <button className={styles.launch} onClick={launchApp}>
                Launch App
              </button>
            </div>
          </div>

          {/* 第二行：导航（整行平铺） */}
          <div className={styles.mobileNavBar}>
            <a className={styles.mobileNavItem} href="#how-it-works">
              How it works
            </a>
            <a className={styles.mobileNavItem} href="#faq">
              FAQ
            </a>
            <a className={styles.mobileNavItem} href="#white-paper" target="_blank" rel="noopener noreferrer">
              White Paper
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
