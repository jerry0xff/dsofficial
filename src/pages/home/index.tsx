import styles from './index.module.less';
import cx from 'classnames';
import { isPC } from '@/utils/platform';
import FirstSection from '@/components/first-section';
import { lazy } from 'react';
const SecSection = lazy(() => import('@/components/sec-section'));
const ThirdSection = lazy(() => import('@/components/third-section'));
const ForthSection = lazy(() => import('@/components/forth-section'));
const Footer = lazy(() => import('@/components/footer'));

export default function Home() {
  return <div className={cx(styles.wrapper, {
    [styles.h5]: !isPC,
  })}>
    <FirstSection />
    <SecSection />
    <ThirdSection />
    <ForthSection />
    <Footer />
  </div>;
}
