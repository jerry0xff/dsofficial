import build1 from "@/assets/build-1.svg"
import build2 from "@/assets/build-2.svg"
import build3 from "@/assets/build-3.svg"
import build4 from "@/assets/build-4.svg"
import buildForEdge from "@/assets/build-for-edge.svg"
import build1H5 from "@/assets/h5-build-1.svg"
import build2H5 from "@/assets/h5-build-2.svg"
import build3H5 from "@/assets/h5-build-3.svg"
import build4H5 from "@/assets/h5-build-4.svg"
import buildForEdgeH5 from "@/assets/h5-build-for-edge.svg"
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
      <img src={isPC ? buildForEdge : buildForEdgeH5} className={styles.buildForEdge} />
      <div className={styles.desc}>{t.fourthSection.description}</div>
      <div className={styles.content}>
        <img src={isPC ? build1 : build1H5} className={styles.itemImg} />
        <img src={isPC ? build2 : build2H5} className={styles.itemImg} />
        <img src={isPC ? build3 : build3H5} className={styles.itemImg} />
        <img src={isPC ? build4 : build4H5} className={styles.itemImg} />
      </div>
    </section>
  )
}
