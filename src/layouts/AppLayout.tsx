import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1 pt-[60px]">
        <Outlet />
      </main>

      <footer className="h-16 border-t flex items-center justify-center text-sm text-gray-500">
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
