import styles from './index.module.less'
import cx from 'classnames'
import { isPC } from '@/utils/platform'
import c from '@/assets/c.svg'
import github from '@/assets/github.svg'
import x from '@/assets/x.svg'
import discord from '@/assets/discord.svg'

export default function Footer() {
    return <footer className={cx(styles.footer, {
        [styles.h5]: !isPC,
    })}>
        <div className={styles.left}>
            <img src={c} className={styles.c} />
            2025 deshare International Ltd.All rights reserved.
        </div>
        <div className={styles.right}>
            <img src={github} className={styles.github} />
            <img src={discord} className={styles.discord} />
            <img src={x} className={styles.x} />
        </div>
    </footer>;
}
