const REF_STORAGE_KEY = "ds_ref"

export function getRef(): string | null {
  if (typeof window === "undefined") return null

  try {
    const params = new URLSearchParams(window.location.search)
    const refFromUrl = params.get("ref")
    if (refFromUrl) {
      try {
        sessionStorage.setItem(REF_STORAGE_KEY, refFromUrl)
      } catch {}
      return refFromUrl
    }
  } catch {}

  try {
    return sessionStorage.getItem(REF_STORAGE_KEY)
  } catch {
    return null
  }
}

export function withRef(url: string): string {
  const ref = getRef()
  if (!ref) return url

  const hashIndex = url.indexOf("#")
  const beforeHash = hashIndex === -1 ? url : url.slice(0, hashIndex)
  const hashPart = hashIndex === -1 ? "" : url.slice(hashIndex)

  const queryIndex = beforeHash.indexOf("?")
  if (queryIndex !== -1) {
    const existing = new URLSearchParams(beforeHash.slice(queryIndex + 1))
    if (existing.has("ref")) return url
    existing.set("ref", ref)
    return `${beforeHash.slice(0, queryIndex)}?${existing.toString()}${hashPart}`
  }

  return `${beforeHash}?ref=${encodeURIComponent(ref)}${hashPart}`
}

export function withRefInHash(url: string): string {
  const ref = getRef()
  if (!ref) return url

  const hashIndex = url.indexOf("#")
  if (hashIndex === -1) {
    return `${url}#?ref=${encodeURIComponent(ref)}`
  }

  const beforeHash = url.slice(0, hashIndex)
  const hashBody = url.slice(hashIndex + 1)

  const queryIndex = hashBody.indexOf("?")
  if (queryIndex !== -1) {
    const hashPath = hashBody.slice(0, queryIndex)
    const existing = new URLSearchParams(hashBody.slice(queryIndex + 1))
    if (existing.has("ref")) return url
    existing.set("ref", ref)
    return `${beforeHash}#${hashPath}?${existing.toString()}`
  }

  return `${beforeHash}#${hashBody}?ref=${encodeURIComponent(ref)}`
}
