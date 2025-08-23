import logo from '@/assets/logo.svg';
import styles from './index.module.less';
import { isPC } from '@/utils/platform';
import cx from 'classnames';
import { launchApp } from '@/utils/utils';

export default function Header() {
  return <header className={cx(styles.header, {
    [styles.h5]: !isPC,
  })}>
    <img className={styles.logo} src={logo} alt="logo" />
    <button className={styles.launch} onClick={launchApp}>Launch App</button>
  </header>;
}
