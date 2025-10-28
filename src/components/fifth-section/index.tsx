import Binance from "@/assets/investors/Binance.svg"
import Bingx from "@/assets/investors/bingx.svg"
import Dgcap from "@/assets/investors/DGCapital.svg"
import Gate from "@/assets/investors/Gate.svg"
import IBKR from "@/assets/investors/IBKR.svg"
import Iobc from "@/assets/investors/IOBC.svg"
import Itiger from "@/assets/investors/Itiger.svg"
import Okx from "@/assets/investors/OKX.svg"
import { useLanguage } from "@/contexts/LanguageContext"
import { texts } from "@/contexts/texts"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

const logos = [
  { src: Binance, url: "https://x.com/BinanceWallet" },
  { src: Iobc, url: "https://x.com/iobc_capital" },
  { src: Bingx, url: "https://x.com/BingXOfficial" },
  { src: Dgcap, url: "https://x.com/DG__Capital" },
  { src: Okx, url: "https://x.com/wallet" },
  { src: Gate, url: "https://x.com/GateWeb3_HQ" },
  { src: IBKR, url: "https://x.com/IBKR" },
  { src: Itiger, url: "https://www.itiger.com/hk/" },
]

export default function FifthSection() {
  const { lang } = useLanguage()
  const t = texts[lang]
  return (
    <section
      className={cx(styles.fifthSection, {
        [styles.h5]: !isPC,
      })}
    >
      <img src={t.fifthSection.investorsAndPartners} className={styles.investorsAndPartners} />

      {/* 横向滚动容器 */}
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {[...logos, ...logos].map((item, idx) => (
            <div className={styles.logoItem} key={idx}>
              <a href={item.url} target="_blank">
                <img className={styles.logoImg} src={item.src} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
