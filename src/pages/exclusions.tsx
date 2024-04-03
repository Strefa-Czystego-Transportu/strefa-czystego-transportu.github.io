import { useEffect } from "react";
import CheckZTP from "../components/checkZTP";
import InformationCard from "../components/informationCard";
import { config } from "../config/exclusionsConfig";
import { useAppDispatch } from "../hooks";
import { setRoute } from "../stores/currentRoute";

export default function Exclusions({ route }: { route: string }) {

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(setRoute(route)) })
    
    return (
        <div className="grid grid-cols-1 w-5/6 md:w-3/4 lg:w-1/2 xl:w-2/5 gap-4">
            {config.map((data, id) => <InformationCard key={id} data={data}/>)}
            <CheckZTP />
        </div>
    )
}
