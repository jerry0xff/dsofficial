import type { WrapperProps } from '.';
import styles from './index.pc.module.less';

export default function Wrapper(props: WrapperProps) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
