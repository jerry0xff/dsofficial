import AppLayout from "@/layouts/AppLayout"
import Home from "@/pages/Homepage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
])
