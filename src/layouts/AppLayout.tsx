import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="h-16 border-b flex items-center px-6">
        <div className="font-semibold">My Website</div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="h-16 border-t flex items-center justify-center text-sm text-gray-500">
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
