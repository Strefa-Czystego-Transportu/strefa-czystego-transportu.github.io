import { useEffect } from "react"
import { useAppDispatch } from "../hooks"
import { setRoute } from "../stores/currentRoute"

export default function Home({ route }: { route: string }) {

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(setRoute(route)) })

    return (
        <div>Home</div>
    )
}
