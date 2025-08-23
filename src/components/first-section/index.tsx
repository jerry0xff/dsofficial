import styles from './index.module.less';
import cx from 'classnames';
import { isPC } from '@/utils/platform';
import Header from '@/components/header';
import mainWord from '@/assets/main-word.svg';
import { launchApp } from '@/utils/utils';

export default function FirstSection() {

  return <section className={cx(styles.firstSection, {
    [styles.h5]: !isPC,
  })}>
    <Header></Header>
    <div className={styles.content}>
      <img src={mainWord} alt="mainWord" className={styles.mainWord} />
      <div className={styles.desc}>
        Revolutionizing cross-border stock trading with blockchain technology
      </div>
      <button className={styles.btn} onClick={launchApp}>
        Launch App
      </button>
    </div>
  </section>;
}
