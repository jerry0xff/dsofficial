import third1 from "@/assets/third-1.svg"
import third2 from "@/assets/third-2.svg"
import third3 from "@/assets/third-3.svg"
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function ThirdSection() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <section
      className={cx(styles.thirdSection, {
        [styles.h5]: !isPC,
      })}
    >
      {/* {!isPC ? <div className={styles.tip}>Security System Screen</div> : null} */}
      <img
        src={t.thirdSection.realSvg}
        className={cx(styles.real, {
          [styles.zhH5]: !isPC && lang === "zh",
        })}
      />
      {/* {isPC ? <div className={styles.tip}>Security System Screen</div> : null} */}
      <div className={styles.content}>
        <div className={styles.item}>
          <img src={third1} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t.thirdSection.feature1.title}</div>
            <div className={styles.itemDesc}>
              <div>{t.thirdSection.feature1.desc1}</div>
              <div>{t.thirdSection.feature1.desc2}</div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={third2} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t.thirdSection.feature2.title}</div>
            <div className={styles.itemDesc}>{t.thirdSection.feature2.desc1}</div>
            <div className={styles.itemDesc}>{t.thirdSection.feature2.desc2}</div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={third3} className={styles.itemImg} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{t.thirdSection.feature3.title}</div>
            <div className={styles.itemDesc}>{t.thirdSection.feature3.desc1}</div>
            <div className={styles.itemDesc}>{t.thirdSection.feature3.desc2}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
