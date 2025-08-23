import { isPC } from '@/utils/platform'
import styles from './index.module.less'
import cx from 'classnames'
import buildForEdge from '@/assets/build-for-edge.svg'
import build1 from '@/assets/build-1.svg'
import build2 from '@/assets/build-2.svg'
import build3 from '@/assets/build-3.svg'
import build4 from '@/assets/build-4.svg'
import buildForEdgeH5 from '@/assets/h5-build-for-edge.svg'
import build1H5 from '@/assets/h5-build-1.svg'
import build2H5 from '@/assets/h5-build-2.svg'
import build3H5 from '@/assets/h5-build-3.svg'
import build4H5 from '@/assets/h5-build-4.svg'



export default function ForthSection() {
    return <section className={cx(styles.forthSection, {
        [styles.h5]: !isPC,
      })}>
        <img src={isPC ? buildForEdge : buildForEdgeH5} className={styles.buildForEdge} />
        <div className={styles.desc}>
            All underlying assets are held in segregated accounts at NYSE-listed Interactive Brokers (IBKR), ensuring maximum security and regulatory compliance for your investments.
        </div>
        <div className={styles.content}>
            <img src={isPC ? build1 : build1H5} className={styles.itemImg} />
            <img src={isPC ? build2 : build2H5} className={styles.itemImg} />
            <img src={isPC ? build3 : build3H5} className={styles.itemImg} />
            <img src={isPC ? build4 : build4H5} className={styles.itemImg} />
        </div>
    </section>;
}
