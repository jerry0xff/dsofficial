import PageOne from "./page-1"
import PageTwo from "./page-2"
import PageThree from "./page-3"
import PageFour from "./page-4"
import PageFive from "./page-5"

export default function Home() {
  return (
    <div className="bg-[var(--ColorBackDefault)]">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 text-white" aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="mb-4 text-3xl">Stock buying guides · 股票购买指南</h2>
        <p className="mb-6 max-w-2xl leading-8 text-gray-300">Compare buying options, asset rights, fees and risks before you trade. 了解美股、港股的购买方式与股票相关链上产品的区别。</p>
        <ul className="space-y-4 text-[#21d2d2]">
          <li><a className="underline underline-offset-4" href="/guides/buy-us-stocks/">美股怎么买？购买方式、流程、费用与风险</a></li>
          <li><a className="underline underline-offset-4" href="/guides/buy-hk-stocks/">港股怎么买？购买渠道与交易成本</a></li>
          <li><a className="underline underline-offset-4" href="/guides/usdt-stock-trading/">USDT 买美股是什么意思？</a></li>
          <li><a className="underline underline-offset-4" href="/guides/tokenized-stocks-vs-broker/">代币化股票与券商买股有什么区别？</a></li>
          <li><a className="underline underline-offset-4" href="/guides/fees-and-risks/">手续费与风险说明</a></li>
          <li><a className="underline underline-offset-4" href="/guides/">全部购买指南 / All guides</a></li>
        </ul>
        <p className="mt-8 text-sm leading-7 text-gray-400">仅供教育参考，不构成投资建议。服务不面向中国大陆及美国地区用户；产品资格、资产权利和交易条件以现行文件为准。</p>
      </section>
    </div>
  )
}
