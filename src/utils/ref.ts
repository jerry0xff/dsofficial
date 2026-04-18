const REF_STORAGE_KEY = "ds_ref"
const REFERRAL_CODE_STORAGE_KEY = "ds_referral_code"

type RefParam = { key: "referral_code" | "ref"; value: string }

function getRefParam(): RefParam | null {
  if (typeof window === "undefined") return null

  let params: URLSearchParams | null = null
  try {
    params = new URLSearchParams(window.location.search)
  } catch {}

  const referralFromUrl = params?.get("referral_code")
  if (referralFromUrl) {
    try {
      sessionStorage.setItem(REFERRAL_CODE_STORAGE_KEY, referralFromUrl)
    } catch {}
    return { key: "referral_code", value: referralFromUrl }
  }

  const refFromUrl = params?.get("ref")
  if (refFromUrl) {
    try {
      sessionStorage.setItem(REF_STORAGE_KEY, refFromUrl)
    } catch {}
    return { key: "ref", value: refFromUrl }
  }

  try {
    const cachedReferral = sessionStorage.getItem(REFERRAL_CODE_STORAGE_KEY)
    if (cachedReferral) return { key: "referral_code", value: cachedReferral }
    const cachedRef = sessionStorage.getItem(REF_STORAGE_KEY)
    if (cachedRef) return { key: "ref", value: cachedRef }
  } catch {}

  return null
}

export function withRef(url: string): string {
  const param = getRefParam()
  if (!param) return url
  const { key, value } = param

  const hashIndex = url.indexOf("#")
  const beforeHash = hashIndex === -1 ? url : url.slice(0, hashIndex)
  const hashPart = hashIndex === -1 ? "" : url.slice(hashIndex)

  const queryIndex = beforeHash.indexOf("?")
  if (queryIndex !== -1) {
    const existing = new URLSearchParams(beforeHash.slice(queryIndex + 1))
    if (existing.has(key)) return url
    existing.set(key, value)
    return `${beforeHash.slice(0, queryIndex)}?${existing.toString()}${hashPart}`
  }

  return `${beforeHash}?${key}=${encodeURIComponent(value)}${hashPart}`
}

export function withRefInHash(url: string): string {
  const param = getRefParam()
  if (!param) return url
  const { key, value } = param

  const hashIndex = url.indexOf("#")
  if (hashIndex === -1) {
    return `${url}#?${key}=${encodeURIComponent(value)}`
  }

  const beforeHash = url.slice(0, hashIndex)
  const hashBody = url.slice(hashIndex + 1)

  const queryIndex = hashBody.indexOf("?")
  if (queryIndex !== -1) {
    const hashPath = hashBody.slice(0, queryIndex)
    const existing = new URLSearchParams(hashBody.slice(queryIndex + 1))
    if (existing.has(key)) return url
    existing.set(key, value)
    return `${beforeHash}#${hashPath}?${existing.toString()}`
  }

  return `${beforeHash}#${hashBody}?${key}=${encodeURIComponent(value)}`
}
