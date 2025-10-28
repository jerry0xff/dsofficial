import gupiao from "@/assets/gupiao.svg"
import jiaoyi from "@/assets/jiaoyi.svg"
import nextBg from "@/assets/next-gen.svg"
import quanqiu from "@/assets/quanqiu.svg"
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function SecSection() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <section
      className={cx(styles.secSection, {
        [styles.h5]: !isPC,
      })}
    >
      <img src={nextBg} alt="nextBg" className={styles.nextBg} />
      <div className={styles.content}>
        <div className={styles.item}>
          <img src={quanqiu} className={styles.itemImg} />
          <span className={styles.itemTitle}>{t.secSection.barrierFreeTrading}</span>
        </div>
        <div className={styles.item}>
          <img src={jiaoyi} className={styles.itemImg} />
          <span className={styles.itemTitle}>{t.secSection.aroundClockTrading}</span>
        </div>
        <div className={styles.item}>
          <img src={gupiao} className={styles.itemImg} />
          <span className={styles.itemTitle}>
            {t.secSection.stocks2000Plus}
            <br />
            {isPC ? (
              <>
                {t.secSection.trulyDecentralized}
                {t.secSection.noPreDeposit}
              </>
            ) : (
              <>
                {t.secSection.trulyDecentralized}
                <br />
                {t.secSection.noPreDeposit}
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  )
}
