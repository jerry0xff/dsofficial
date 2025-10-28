import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function ForthSection() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <section
      className={cx(styles.forthSection, {
        [styles.h5]: !isPC,
      })}
    >
      <img
        src={isPC ? t.fourthSection.buildForEdgeSvg : t.fourthSection.h5_investorsAndPartners}
        className={cx(styles.buildForEdge, {
          [styles.zhH5]: !isPC && lang === "zh",
        })}
      />
      <div className={styles.desc}>{t.fourthSection.description}</div>
      <div className={styles.content}>
        <img src={isPC ? t.fourthSection.build1Svg : t.fourthSection.build1H5Svg} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build2Svg : t.fourthSection.build2H5Svg} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build3Svg : t.fourthSection.build3H5Svg} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build4Svg : t.fourthSection.build4H5Svg} className={styles.itemImg} />
      </div>
    </section>
  )
}
