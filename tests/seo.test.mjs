import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { URL } from 'node:url'

const read = path => readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8')
const slugs = ['buy-us-stocks', 'buy-hk-stocks', 'usdt-stock-trading', 'tokenized-stocks-vs-broker', 'fees-and-risks']

test('every guide serves indexable text and its own canonical without JavaScript', () => {
  for (const slug of slugs) {
    assert.ok(existsSync(new URL(`../dist/guides/${slug}/index.html`, import.meta.url)), `missing static page: ${slug}`)
    const html = read(`guides/${slug}/index.html`)
    assert.match(html, /<html lang="zh-Hans">/)
    assert.match(html, /<h1>[^<]+<\/h1>/)
    assert.match(html, /<meta name="description" content="[^"]+"/)
    assert.ok(html.includes(`rel="canonical" href="https://deshare.finance/guides/${slug}/"`))
    assert.match(html, /application\/ld\+json/)
    assert.match(html, /https:\/\/app\.deshare\.finance\//)
    assert.doesNotMatch(html, /<script(?! type="application\/ld\+json")/)
    const article = html.match(/<article>([\s\S]*?)<\/article>/)?.[1] ?? ''
    const articleText = article.replace(/<[^>]*>/g, '')
    assert.ok(articleText.length > 600, 'article must contain substantive text, not just shared chrome')
    assert.ok((article.match(/<section>/g) ?? []).length >= 4, 'article needs explanatory sections')
  }
})

test('sitemap lists public canonical pages, never private app or fragment URLs', () => {
  const xml = read('sitemap.xml')
  for (const slug of slugs) assert.ok(xml.includes(`https://deshare.finance/guides/${slug}/`))
  assert.doesNotMatch(xml, /portfolio|app\.deshare|#|region-restricted/)
  assert.match(read('robots.txt'), /Sitemap: https:\/\/deshare\.finance\/sitemap.xml/)
})

test('homepage has initial crawlable links and social metadata; missing pages are not indexable', () => {
  const html = read('index.html')
  assert.match(html, /property="og:title"/)
  assert.match(html, /name="twitter:card"/)
  assert.match(html, /rel="canonical" href="https:\/\/deshare.finance\/"/)
  assert.ok(html.includes('href="/guides/"'))
  assert.match(read('404.html'), /noindex/)
  assert.ok(read('guides/index.html').includes('美股怎么买'))
})
