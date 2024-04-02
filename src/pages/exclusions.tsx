import CheckZTP from "../components/checkZTP";
import InformationCard from "../components/informationCard";
import { config } from "../config/exclusionsConfig";

export default function Exclusions() {
    return (
        <div className="grid grid-cols-1 w-5/6 md:w-3/4 lg:w-1/2 xl:w-2/5 gap-4">
            {config.map((data, id) => <InformationCard key={id} data={data}/>)}
            <CheckZTP />
        </div>
    )
}
