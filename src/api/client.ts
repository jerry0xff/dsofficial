export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function apiGet<T>(path: string, init: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, { method: "GET", ...init })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return (await res.json()) as T
}
