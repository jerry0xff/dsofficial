import FAQ from "@/assets/FAQ.svg"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import { useState } from "react"
import styles from "./index.module.less"

export default function SixthSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0) // 默认展开第0个，和设计稿一致

  const toggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx))
  }
  return (
    <section
      className={cx(styles.sixthSection, {
        [styles.h5]: !isPC,
      })}
    >
      <div className={styles.card}>
        <img src={FAQ} className={styles.FAQ} />

        {/* 列表 */}
        <ul className={styles.list}>
          {faqList.map((item, idx) => {
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

type FaqItem = {
  q: string
  a: React.ReactNode
}

const faqList: FaqItem[] = [
  {
    q: "MSX是什么？",
    a: (
      <>
        已上线100+股票代币及ETF代币；这是一个长串回答，这是一长串回答这是
        一长串回答这是⼀长串回答这是⼀长串回答这是⼀长串回答这是⼀长串回答 这是⼀长串回答...
      </>
    ),
  },
  {
    q: "目前可交易哪些代币？",
    a: (
      <>
        已上线100+股票代币及ETF代币；这是⼀长串回答这是⼀长串回答这是⼀长串回答这是... &nbsp;
        <a
          className={styles.answerLink}
          href="https://www.baidu.com/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.baidu.com/index.htm
        </a>
      </>
    ),
  },
  {
    q: "分红如何发放？",
    a: <>分红会按照持仓比例自动发放到你的账户中。</>,
  },
  {
    q: "分红如何发放？",
    a: <>这是第二个同名问题的占位示例，你之后可以改成别的问题。</>,
  },
  {
    q: "分红如何发放？",
    a: <>这是第三个同名问题的占位示例。</>,
  },
  {
    q: "分红如何发放？",
    a: <>这是第四个同名问题的占位示例。</>,
  },
]
