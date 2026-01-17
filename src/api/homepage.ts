import { apiGet } from "./client"

export type HomepageStockItem = {
  symbol: string
  price: number
  name: string
  name_cn: string
  change_pct: number
  last_10_closes: number[]
  last_10_close?: number[]
}

export type HomepageIndexItem = {
  symbol: string
  value: number
  change_pct: number
}

type ApiListResponse<T> = {
  items: T[]
}

type ApiResponse<T> = {
  data: T
}

let hotCache: ApiListResponse<HomepageStockItem> | null = null
let hotPromise: Promise<ApiListResponse<HomepageStockItem>> | null = null

export function getHomepageHot(signal?: AbortSignal) {
  return apiGet<ApiResponse<ApiListResponse<HomepageStockItem>>>("/homepage/hot", { signal }).then(
    (response) => response.data
  )
}

export function getHomepageHotCached() {
  if (hotCache) {
    return Promise.resolve(hotCache)
  }
  if (!hotPromise) {
    hotPromise = getHomepageHot()
      .then((data) => {
        hotCache = data
        return data
      })
      .catch((error) => {
        hotPromise = null
        throw error
      })
  }
  return hotPromise
}

export function getHomepageIndices(signal?: AbortSignal) {
  return apiGet<ApiResponse<ApiListResponse<HomepageIndexItem>>>("/homepage/indices", { signal }).then(
    (response) => response.data
  )
}

export function getHomepageTopGainers(signal?: AbortSignal) {
  return apiGet<ApiResponse<ApiListResponse<HomepageStockItem>>>("/homepage/top-gainers", { signal }).then(
    (response) => response.data
  )
}

export function getHomepageNewListings(signal?: AbortSignal) {
  return apiGet<ApiResponse<ApiListResponse<HomepageStockItem>>>("/homepage/new-listings", { signal }).then(
    (response) => response.data
  )
}
