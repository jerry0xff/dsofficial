// src/components/stats-bar/index.tsx
import { useCountUp } from "@/hooks/useCountUp"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function StatsBar() {
  const hk = useCountUp({ end: 1214 })
  const nasdaq = useCountUp({ end: 3789 })
  const ny = useCountUp({ end: 500 })

  return (
    <div
      className={cx(styles.statsBar, {
        [styles.h5]: !isPC,
      })}
    >
      <div className={styles.statItem}>
        <div className={styles.number}>{hk}</div>
        <div className={styles.label}>HK Stocks</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>{nasdaq}</div>
        <div className={styles.label}>Nasdaq Stocks</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>{ny}</div>
        <div className={styles.label}>New York Stocks</div>
      </div>
    </div>
  )
}
