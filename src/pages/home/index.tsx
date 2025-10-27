import FirstSection from "@/components/first-section"
import { isPC } from "@/utils/platform"
import cx from "classnames"
import { lazy } from "react"
import styles from "./index.module.less"
const SecSection = lazy(() => import("@/components/sec-section"))
const ThirdSection = lazy(() => import("@/components/third-section"))
const ForthSection = lazy(() => import("@/components/forth-section"))
const FifthSection = lazy(() => import("@/components/fifth-section"))
const SixthSection = lazy(() => import("@/components/sixth-section"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  return (
    <div
      className={cx(styles.wrapper, {
        [styles.h5]: !isPC,
      })}
    >
      <FirstSection />
      <SecSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  )
}
