const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="basis-[300px] flex-none bg-[#0A0A17] text-white" style={{ height: 300, minHeight: 300 }}>
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col" style={{ padding: "100px 0 40px" }}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <img src="/assets/logo.svg" alt="DeShare" className="h-[24px] w-[129px]" />
            <div className="flex flex-col gap-2 text-[12px] font-normal uppercase geist-mono text-white">
              <span>Borderless, Barrier-Free</span>
              <span>Invest in Global Stocks On-Chain</span>
            </div>
          </div>

          <div className="flex pr-4 text-[12px] uppercase geist-mono">
            <div className="flex flex-col gap-2" style={{ marginRight: "80px" }}>
              <span className="font-bold text-white">Documentation</span>
              <span className="font-normal text-white/80">Whitepaper</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-white">Community</span>
              <span className="font-normal text-white/80">Telegram</span>
              <span className="font-normal text-white/80">X (Twitter)</span>
            </div>
          </div>
        </div>

        <div className="mt-auto text-center text-[12px] font-normal uppercase geist-mono text-white/80">
          © {currentYear} DeShare International Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
