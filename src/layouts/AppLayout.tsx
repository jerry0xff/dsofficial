import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1 pt-[60px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
