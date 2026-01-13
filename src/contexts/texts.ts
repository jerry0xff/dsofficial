// src/i18n/texts.ts
import { Converter } from "opencc-js"

export type Lang = "en" | "zh" | "zh-Hant"

const toHant = Converter({ from: "cn", to: "tw" })

const en = {
  header: {
    market: 'MARKET',
    trade: 'TRADE',
    portfolio: 'PORTFOLIO',
    faq: "FAQ",
    whitePaper: "WHITEPAPER",
    launchApp: "LAUNCH APP",
  },
  page1: {
    mobileHero: {
      line1: "Borderless, Barrier-Free",
      line2: "Invest in Global Stocks On-Chain",
      subtitle: "Decentralized Global Stock Platform",
    },
    desktopHero: {
      title: "Trade global stock with crypto",
      subtitle: "The Most Comprehensive Tokenized Stock Trading Market",
    },
    stats: {
      hkStocks: "HK STOCKS",
      nasdaqStocks: "NASDAQ STOCKS",
      newYorkStocks: "NEW YORK STOCKS",
    },
    tradeNow: "Trade now",
    partnersTitle: "Investors & Partners",
    mapSubtitles: {
      nyc: "Manhattan Exchange",
      sf: "Bay Area Hub",
      sh: "Pudong Market",
      tokyo: "Shinjuku Desk",
    },
    tickerNames: {
      tencent: "Tencent Holdings Holdings",
      alibabaGroup: "Alibaba Group",
      apple: "Apple Inc.",
      microsoft: "Microsoft Corp.",
      nvidia: "NVIDIA Corp.",
      toyota: "Toyota Motor",
      tesla: "Tesla, Inc.",
      alibabaAdr: "Alibaba ADR",
      amazon: "Amazon.com, Inc.",
      alphabet: "Alphabet Class A",
      meta: "Meta Platforms",
    },
    tickerAlt: {
      up: "Up",
      down: "Down",
    },
  },
  faq: {
    list: [
      {
        q: 'How do you ensure the stocks I purchase are backed by real underlying assets?',
        a: 'We guarantee 1:1 anchoring to real-world stocks through a secure, transparent custodial structure. All underlying assets are held in segregated accounts with our partner broker, Interactive Brokers (a NYSE-listed company), ensuring full regulatory compliance and asset safety. Every transaction is recorded on-chain, providing traceable and immutable proof of asset backing.'
      },
      {
        q: 'How do I fund my account?',
        a: 'As a non-custodial platform, we do not hold user funds. To trade, simply ensure your connected decentralized wallet (e.g., MetaMask) holds sufficient USDT. When you place an order, the smart contract will directly deduct USDT from your wallet. Upon selling, proceeds are automatically sent back to your wallet in USDT.',
      },
      {
        q: 'Will my stock purchase price have slippage, and could it be higher than broker prices?',
        a: 'Our order liquidity is supported by a dual-layer model: it draws from both our native on-chain liquidity pool and the aggregated liquidity of our partnered brokerages. By intelligently combining these two sources, we ensure your orders are executed with liquidity that is comparable to—if not better than—traditional brokerage platforms, guaranteeing you the best possible price.'
      }
    ]
  }
} as const

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string
  : T[K] extends (infer U)[] ? DeepString<U>[]
  : T[K] extends object ? DeepString<T[K]>
  : T[K]
}
type TextSchema = DeepString<typeof en>

const zh: TextSchema = {
  header: {
    market: '市场',
    trade: '交易',
    portfolio: '个人中心',
    faq: "常见问题",
    whitePaper: "白皮书",
    launchApp: "启动App",
  },
  faq: {
    list: [
      {
        q: '如何确保我买到的股票有真实的底层资产？',
        a: '我们通过安全的机构级资产托管架构，确保所有链上股票与真实世界股票 1:1 锚定。底层资产全部存放于纽交所上市公司盈透证券的独立隔离账户中，并接受严格监管。每一笔交易均通过链上记录可追溯，资产透明性有保障。',
      },
      {
        q: '我如何将资金充值到我的账户？​',
        a: '平台采用 非托管架构，无需充值至中心化账户。只需确保您的去中心化钱包（如 MetaMask）持有足够的 USDT。买入时，智能合约直接从钱包扣除 USDT；卖出后，资金将通过合约自动返还至您的钱包。',
      },
      {
        q: '我股票买入价格是否会有滑点，会比券商价格高吗？',
        a: '我们的订单流动性来源于双重保障：既依托于平台自身的链上流动性，也聚合了合作券商的传统流动性。通过整合这两种资源，我们确保您的订单能够获得优于或至少不逊于传统券商平台的交易价格和流动性体验。',
      }
    ]
  },
  page1: {
    mobileHero: {
      line1: "无国界，无壁垒",
      line2: "链上投资全球股票",
      subtitle: "去中心化全球股票平台",
    },
    desktopHero: {
      title: "用加密货币交易全球股票",
      subtitle: "最全面的代币化股票交易市场",
    },
    stats: {
      hkStocks: "港股",
      nasdaqStocks: "纳斯达克股票",
      newYorkStocks: "纽约股票",
    },
    tradeNow: "立即交易",
    partnersTitle: "投资方与合作伙伴",
    mapSubtitles: {
      nyc: "曼哈顿交易所",
      sf: "湾区枢纽",
      sh: "浦东市场",
      tokyo: "新宿交易台",
    },
    tickerNames: {
      tencent: "腾讯控股",
      alibabaGroup: "阿里巴巴集团",
      apple: "苹果公司",
      microsoft: "微软公司",
      nvidia: "英伟达公司",
      toyota: "丰田汽车",
      tesla: "特斯拉",
      alibabaAdr: "阿里巴巴ADR",
      amazon: "亚马逊公司",
      alphabet: "Alphabet A类",
      meta: "Meta Platforms",
    },
    tickerAlt: {
      up: "上涨",
      down: "下跌",
    },
  },
}

function makeZhHantFrom<T>(source: T): T {
  const cache = new WeakMap<object, any>()
  const walk = (val: any): any => {
    if (val == null) return val
    const t = typeof val
    if (t === "string") return toHant(val)
    if (t !== "object") return val
    if (cache.has(val)) return cache.get(val)

    if (Array.isArray(val)) {
      const arr = val.map(walk)
      cache.set(val, arr)
      return arr
    }
    const out: any = {}
    cache.set(val, out)
    for (const k in val) out[k] = walk(val[k])
    return out
  }
  return walk(source)
}

const zhHant: TextSchema = makeZhHantFrom<TextSchema>(zh)

const textsBase: Record<Exclude<Lang, "zh-Hant">, TextSchema> = { en, zh }

export function getTexts(lang: Lang): TextSchema {
  if (lang === "zh-Hant") return zhHant
  return textsBase[lang] // "en" | "zh"
}

/** 也可保留旧的导出形式（可选） */
export const texts = {
  en,
  zh,
  "zh-Hant": zhHant,
} satisfies Record<Lang, TextSchema>

