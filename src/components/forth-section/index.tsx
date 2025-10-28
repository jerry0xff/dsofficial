import build1H5 from "@/assets/h5-build-1.svg"
import build2H5 from "@/assets/h5-build-2.svg"
import build3H5 from "@/assets/h5-build-3.svg"
import build4H5 from "@/assets/h5-build-4.svg"
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
        <img src={isPC ? t.fourthSection.build1Svg : build1H5} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build2Svg : build2H5} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build3Svg : build3H5} className={styles.itemImg} />
        <img src={isPC ? t.fourthSection.build4Svg : build4H5} className={styles.itemImg} />
      </div>
    </section>
  )
}
