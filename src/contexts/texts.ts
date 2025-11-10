// src/i18n/texts.ts
import build1 from "@/assets/build-1.svg"
import build2 from "@/assets/build-2.svg"
import build3 from "@/assets/build-3.svg"
import build4 from "@/assets/build-4.svg"
import buildForEdge from "@/assets/build-for-edge.svg"
import cn_build1 from "@/assets/cn-build-1.svg"
import cn_build2 from "@/assets/cn-build-2.svg"
import cn_build3 from "@/assets/cn-build-3.svg"
import cn_build4 from "@/assets/cn-build-4.svg"
import cn_buildForEdge from "@/assets/cn-build-for-edge.svg"
import cn_investorsAndPartners from "@/assets/cn-investors-and-partners.svg"
import cn_mainWord from "@/assets/cn-main-word.svg"
import cn_nextGen from "@/assets/cn-next-gen.svg"
import cn_real from "@/assets/cn-real.svg"
import build1H5 from "@/assets/h5-build-1.svg"
import build2H5 from "@/assets/h5-build-2.svg"
import build3H5 from "@/assets/h5-build-3.svg"
import build4H5 from "@/assets/h5-build-4.svg"
import cn_build1H5 from "@/assets/h5-cn-build-1.svg"
import cn_build2H5 from "@/assets/h5-cn-build-2.svg"
import cn_build3H5 from "@/assets/h5-cn-build-3.svg"
import cn_build4H5 from "@/assets/h5-cn-build-4.svg"
import cn_h5_investorsAndPartners from "@/assets/h5-cn-investors-and-partners.svg"
import h5_investorsAndPartners from "@/assets/h5-investors-and-partners.svg"
import investorsAndPartners from "@/assets/investors-and-partners.svg"
import mainWord from "@/assets/main-word.svg"
import nextGen from "@/assets/next-gen.svg"
import real from "@/assets/real.svg"
import { Converter } from "opencc-js"

export type Lang = "en" | "zh" | "zh-Hant"

const toHant = Converter({ from: "cn", to: "tw" })

const en = {
  header: {
    howItWorks: "How it works",
    faq: "FAQ",
    whitePaper: "White Paper",
    launchApp: "Launch App",
  },
  firstSection: {
    description: "The Most Comprehensive Tokenized Stock Trading Market",
    launchButton: "Launch App",
    hkStocks: "HK Stocks",
    nasdaqStocks: "Nasdaq Stocks",
    newYorkStocks: "New York Stocks",
    mainWordSvg: mainWord,
  },
  secSection: {
    barrierFreeTrading: "Barrier-Free Global Stock Trading",
    aroundClockTrading: "24/7 Trading",
    stocks2000Plus: "2000+ Stocks",
    trulyDecentralized: "Truly decentralized, ",
    noPreDeposit: "No Pre-Deposit",
    nextGenSvg: nextGen,
  },
  thirdSection: {
    feature1: { title: "Non-Custodial Architecture", desc1: "Assets remain fully on-chain under user control", desc2: "Users retain full ownership of their funds" },
    feature2: { title: "Contract Security Audits", desc1: "Multi-layered audit mechanism", desc2: "Continuous security monitoring" },
    feature3: { title: "Zero Pooling Risk", desc1: "1:1 asset anchoring to real-world stocks", desc2: "Transparent asset audits" },
    realSvg: real,
  },
  fourthSection: {
    description: "All underlying assets are held in segregated accounts at NYSE-listed Interactive Brokers (IBKR), ensuring maximum security and regulatory compliance for your investments.",
    buildForEdgeSvg: buildForEdge,
    build1Svg: build1,
    build2Svg: build2,
    build3Svg: build3,
    build4Svg: build4,
    build1H5Svg: build1H5,
    build2H5Svg: build2H5,
    build3H5Svg: build3H5,
    build4H5Svg: build4H5,
    h5_investorsAndPartners: h5_investorsAndPartners,
  },
  fifthSection: {
    investorsAndPartners: investorsAndPartners,
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
    howItWorks: "机制介绍",
    faq: "常见问题",
    whitePaper: "白皮书",
    launchApp: "启动App",
  },
  firstSection: {
    description: "最全的代币化股票交易市场",
    launchButton: "启动App",
    hkStocks: "港股",
    nasdaqStocks: "纳斯达克",
    newYorkStocks: "纽交所",
    mainWordSvg: cn_mainWord,
  },
  secSection: {
    barrierFreeTrading: "无门槛交易",
    aroundClockTrading: "7*24小时交易",
    stocks2000Plus: "2000+股票",
    trulyDecentralized: "完全去中心化，",
    noPreDeposit: "无需预充值",
    nextGenSvg: cn_nextGen,
  },
  thirdSection: {
    feature1: { title: "非托管架构", desc1: "资产完全在链上，由用户自主掌控", desc2: "用户始终拥有资金的完全所有权" },
    feature2: { title: "合约安全审计", desc1: "多层审计机制", desc2: "持续的安全监控" },
    feature3: { title: "零资金池风险", desc1: "与现实世界股票1:1锚定", desc2: "透明的资产审计" },
    realSvg: cn_real,
  },
  fourthSection: {
    description: "所有底层资产均存放于纽交所上市公司盈透证券的独立隔离账户，全面保障投资安全与监管合规",
    buildForEdgeSvg: cn_buildForEdge,
    build1Svg: cn_build1,
    build2Svg: cn_build2,
    build3Svg: cn_build3,
    build4Svg: cn_build4,
    build1H5Svg: cn_build1H5,
    build2H5Svg: cn_build2H5,
    build3H5Svg: cn_build3H5,
    build4H5Svg: cn_build4H5,
    h5_investorsAndPartners: cn_h5_investorsAndPartners,
  },
  fifthSection: {
    investorsAndPartners: cn_investorsAndPartners,
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
  }
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

