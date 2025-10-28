// src/components/stats-bar/index.tsx
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"
import RollingNumber from "./RollingNumber"

export default function StatsBar() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <div
      className={cx(styles.statsBar, {
        [styles.h5]: !isPC,
      })}
    >
      <div className={styles.statItem}>
        <div className={styles.number}>
          <RollingNumber value={1214} />
        </div>
        <div className={styles.label}>{t.firstSection.hkStocks}</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>
          <RollingNumber value={3789} />
        </div>
        <div className={styles.label}>{t.firstSection.nasdaqStocks}</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>
          <RollingNumber value={500} />
        </div>
        <div className={styles.label}>{t.firstSection.newYorkStocks}</div>
      </div>
    </div>
  )
}
