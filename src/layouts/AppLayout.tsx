import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function AppLayout() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      // Avoid flicker around 0 by using a small threshold.
      setIsAtTop(window.scrollY <= 2)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Header />

      <main className="flex-1 pt-[60px]">
        <div
          className="fixed left-0 right-0 bottom-0 top-[60px] z-0 hidden items-center justify-center pointer-events-none md:flex"
          style={{ transform: "translateY(-5%)" }}
        >
          <div className="relative w-full h-full max-w-[1272px] max-h-[660px] aspect-[1272.48/660.6]">
            <img
              src="/assets/page-1/map-empty.svg"
              className={["w-full h-full", isAtTop ? "opacity-0" : "opacity-100"].join(" ")}
              alt=""
            />
          </div>
        </div>
        <div className="fixed left-1/2 top-[146px] z-0 flex w-[100vw] -translate-x-1/2 justify-center pointer-events-none md:hidden mt-[40px]">
          <div className="h-[348px] w-[670px] flex-none">
            <img src="/assets/page-1/map-empty.svg" alt="" className="h-full w-full" />
          </div>
        </div>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
