import mainWord from "@/assets/main-word.svg"
import Header from "@/components/header"
import { isPC } from "@/utils/platform"
import { launchApp } from "@/utils/utils"
import cx from "classnames"
import styles from "./index.module.less"
import StatsBar from "./stats-bar"

export default function FirstSection() {
  return (
    <section
      className={cx(styles.firstSection, {
        [styles.h5]: !isPC,
      })}
    >
      <Header></Header>
      <div className={styles.content}>
        <img src={mainWord} alt="mainWord" className={styles.mainWord} />
        <div className={styles.desc}>The Most Comprehensive Tokenized Stock Trading Market</div>
        <StatsBar />
        <button className={styles.btn} onClick={launchApp}>
          Launch App
        </button>
      </div>
    </section>
  )
}
