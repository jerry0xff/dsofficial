import nextBg from '@/assets/next-gen.svg';
import styles from './index.module.less';
import { isPC } from '@/utils/platform';
import cx from 'classnames';
import gupiao from '@/assets/gupiao.svg';
import quanqiu from '@/assets/quanqiu.svg';
import jiaoyi from '@/assets/jiaoyi.svg';

export default function SecSection() {
    return <section className={cx(styles.secSection, {
        [styles.h5]: !isPC,
    })}>
        <img src={nextBg} alt="nextBg" className={styles.nextBg} />
        <div className={styles.content}>
            <div className={styles.item}>
                <img src={quanqiu} className={styles.itemImg} />
                <span className={styles.itemTitle}>Barrier-Free Global Stock Trading</span>
            </div>
            <div className={styles.item}>
                <img src={jiaoyi} className={styles.itemImg} />
                <span className={styles.itemTitle}>24/7 Trading</span>
            </div>
            <div className={styles.item}>
                <img src={gupiao} className={styles.itemImg} />
                <span className={styles.itemTitle}>50x Leverage</span>
            </div>
        </div>
    </section>;
}
