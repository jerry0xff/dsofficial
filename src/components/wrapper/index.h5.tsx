import type { WrapperProps } from '.';
import styles from './index.h5.module.less';

export default function Wrapper(props: WrapperProps) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
