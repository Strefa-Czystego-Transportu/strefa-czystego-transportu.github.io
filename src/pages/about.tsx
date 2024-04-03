import InformationCard from "../components/informationCard"
import Timeline from "../components/about/timeline"
import { config as faqConfig } from "../config/faqConfig"
import { useEffect } from "react"
import { useAppDispatch } from "../hooks"
import { setRoute } from "../stores/currentRoute"

export default function About({ route }: { route: string }) {

  const dispatch = useAppDispatch()

  useEffect(() => { dispatch(setRoute(route)) })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 lg:gap-12 w-5/6 lg:w-3/4">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4">
          {
            faqConfig.map((data, id) => <InformationCard data={data} key={id} />)
          }
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Timeline alternate={true} />
      </div>
    </div>
  )
}