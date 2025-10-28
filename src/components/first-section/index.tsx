import Header from "@/components/header"
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import { launchApp } from "@/utils/utils"
import cx from "classnames"
import styles from "./index.module.less"
import StatsBar from "./stats-bar"

export default function FirstSection() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <section
      className={cx(styles.firstSection, {
        [styles.h5]: !isPC,
      })}
    >
      <Header></Header>
      <div className={styles.content}>
        <img src={t.firstSection.mainWordSvg} alt="mainWord" className={styles.mainWord} />
        <div className={styles.desc}>{t.firstSection.description}</div>
        <StatsBar />
        <button className={styles.btn} onClick={launchApp}>
          {t.firstSection.launchButton}
        </button>
      </div>
    </section>
  )
}
