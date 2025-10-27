import real from "@/assets/real.svg"
import third1 from "@/assets/third-1.svg"
import third2 from "@/assets/third-2.svg"
import third3 from "@/assets/third-3.svg"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function ThirdSection() {
  return (
    <section
      className={cx(styles.thirdSection, {
        [styles.h5]: !isPC,
      })}
    >
      {!isPC ? <div className={styles.tip}>Security System Screen</div> : null}
      <img src={real} className={styles.real} />
      {isPC ? <div className={styles.tip}>Security System Screen</div> : null}
      <div className={styles.content}>
        <div className={styles.item}>
          <img src={third1} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>Non-Custodial Architecture</div>
            <div className={styles.itemDesc}>
              <div>Assets remain fully on-chain under user control</div>
              <div>Users retain full ownership of their funds</div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={third2} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>Contract Security Audits</div>
            <div className={styles.itemDesc}>Multi-layered audit mechanism</div>
            <div className={styles.itemDesc}>Continuous security monitoring</div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={third3} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>Zero Pooling Risk</div>
            <div className={styles.itemDesc}>1:1 asset anchoring to real-world stocks</div>
            <div className={styles.itemDesc}>Transparent asset audits</div>
          </div>
        </div>
      </div>
    </section>
  )
}
