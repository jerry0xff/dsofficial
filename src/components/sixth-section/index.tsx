import FAQ from "@/assets/FAQ.svg"
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import { useState } from "react"
import styles from "./index.module.less"

export default function SixthSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0) // 默认展开第0个，和设计稿一致
  const { lang } = useLanguage()
  const t = texts[lang]
  const toggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx))
  }
  return (
    <section
      id="faq"
      className={cx(styles.sixthSection, {
        [styles.h5]: !isPC,
      })}
    >
      {!isPC ? <img src={FAQ} className={styles.FAQ} /> : null}
      <div className={styles.card}>
        {isPC ? <img src={FAQ} className={styles.FAQ} /> : null}

        {/* 列表 */}
        <ul className={styles.list}>
          {t.faq.list.map((item, idx) => {
            const open = idx === activeIndex
            return (
              <li key={idx} className={cx(styles.row, { [styles.open]: open })}>
                <button className={styles.rowHeader} onClick={() => toggle(idx)}>
                  <span className={styles.question}>{item.q}</span>
                  <span
                    className={cx(styles.arrow, {
                      [styles.arrowOpen]: open,
                    })}
                  >
                    {/* 这个符号类似设计稿右边的小V： */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {open && <div className={styles.answer}>{item.a}</div>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
