import { useState } from "react"
import ExpandableCard from "./ExpandableCard"

const faqs = [
  {
    title: "How do you ensure the stocks I purchase are backed by real underlying assets?",
    content:
      "We guarantee 1:1 anchoring to real-world stocks through a secure, transparent custodial structure. All underlying assets are held in segregated accounts with our partner broker, Interactive Brokers (a NYSE-listed company), ensuring full regulatory compliance and asset safety. Every transaction is recorded on-chain, providing traceable and immutable proof of asset backing.",
  },
  {
    title: "How do I fund my account?",
    content:
      "As a non-custodial platform, we do not hold user funds. To trade, simply ensure your connected decentralized wallet (e.g., MetaMask) holds sufficient USDT. When you place an order, the smart contract will directly deduct USDT from your wallet. Upon selling, proceeds are automatically sent back to your wallet in USDT.",
  },
  {
    title: "Will my stock purchase price have slippage, and could it be higher than broker prices?",
    content:
      "Our order liquidity is supported by a dual-layer model: it draws from both our native on-chain liquidity pool and the aggregated liquidity of our partnered brokerages. By intelligently combining these two sources, we ensure your orders are executed with liquidity that is comparable to—if not better than—traditional brokerage platforms, guaranteeing you the best possible price.",
  },
]

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col items-center gap-6">
      {faqs.map((item, index) => (
        <ExpandableCard
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
        />
      ))}
    </div>
  )
}
