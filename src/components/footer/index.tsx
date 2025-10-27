import c from "@/assets/c.svg"
import discord from "@/assets/discord.svg"
import github from "@/assets/github.svg"
import x from "@/assets/x.svg"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import styles from "./index.module.less"

export default function Footer() {
  return (
    <footer
      className={cx(styles.footer, {
        [styles.h5]: !isPC,
      })}
    >
      <div className={styles.left}>
        <img src={c} className={styles.c} />
        2025 deshare International Ltd.All rights reserved.
      </div>
      <div className={styles.right}>
        <img src={github} className={styles.github} />
        <img src={discord} className={styles.discord} />
        <a href="https://x.com/Deshare_finance" target="_blank">
          <img src={x} className={styles.x} />
        </a>
      </div>
    </footer>
  )
}
