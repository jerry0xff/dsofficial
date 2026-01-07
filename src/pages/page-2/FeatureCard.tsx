type FeatureCardProps = {
  title: string
  subtitle: string
  description: string
}

export default function FeatureCard({ title, subtitle, description }: FeatureCardProps) {
  return (
    <div className="group flex h-[420px] w-[480px] flex-col items-center justify-center text-center text-white transition">
      <h3 className="text-[48px] font-bold text-white font-['TASA_Orbiter',system-ui,sans-serif] tight-sm">{title}</h3>
      <div className="mt-3 text-[14px] font-bold text-[#21D2D2] geist-mono leading-[1.5]">{subtitle}</div>
      <p className="mt-3 text-[12px] text-white/80 geist-mono leading-[1.5]">{description}</p>
    </div>
  )
}
