// src/components/stats-bar/index.tsx
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"
import RollingNumber from "./RollingNumber"

export default function StatsBar() {
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
        <div className={styles.label}>HK Stocks</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>
          <RollingNumber value={3789} />
        </div>
        <div className={styles.label}>Nasdaq Stocks</div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.number}>
          <RollingNumber value={500} />
        </div>
        <div className={styles.label}>New York Stocks</div>
      </div>
    </div>
  )
}
