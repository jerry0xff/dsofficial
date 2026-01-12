import PageOne from "./page-1"
import PageTwo from "./page-2"
import PageThree from "./page-3"
import PageFour from "./page-4"
import PageFive from "./page-5"

export default function Home() {
  return (
    <div className="bg-[#0A0A17]">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  )
}
