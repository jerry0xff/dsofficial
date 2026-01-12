import { currentYear, footerSections, footerTagline } from "./footerData"

type FooterMobileProps = {
  className?: string
}

export default function FooterMobile({ className = "" }: FooterMobileProps) {
  return (
    <footer className={["flex-none bg-[#0A0A17] text-white pt-0", className].join(" ")} style={{ paddingTop: "10px" }}>
      <div className="mx-auto flex w-full max-w-[375px] flex-col items-center px-6 py-10 text-center">
        <img src="/assets/logo.svg" alt="DeShare" className="h-[24px] w-[129px]" />
        <div
          className=" flex flex-col gap-2 text-[10px] font-[400] uppercase geist-mono text-white/80"
          style={{ marginTop: "16px" }}
        >
          {footerTagline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        {/* <div className="grid w-full grid-cols-2 gap-6 text-[12px] uppercase geist-mono" style={{marginTop: "26px"}}>
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <span className="font-bold text-white">{section.title}</span>
              {section.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[10px] font-normal text-white/80"
                    target={link.target}
                    rel={link.rel}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="text-[10px] font-normal text-white/80">
                    {link.label}
                  </span>
                )
              )}
            </div>
          ))}
        </div> */}

        <div
          className="flex w-full justify-between px-4 text-[12px] uppercase geist-mono"
          style={{ marginTop: "36px" }}
        >
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2 text-center">
              <span className="font-bold text-white">{section.title}</span>
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  className="text-[10px] font-normal text-white/80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          className="text-center text-[10px] font-normal uppercase geist-mono text-white/80"
          style={{ margin: "36px 0 80px 0" }}
        >
          © {currentYear} DeShare International Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
