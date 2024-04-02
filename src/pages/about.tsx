import Faq from "../components/about/faq"
import Timeline from "../components/about/timeline"
import { config as faqConfig } from "../config/faqConfig"

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 lg:gap-0">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 w-5/6 lg:w-3/4">
          {
            faqConfig.map((data, id) => <Faq data={data} key={id} />)
          }
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Timeline alternate={true} />
      </div>
    </div>
  )
}
