import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TimelineDivider() {
    return <>
        <div className="col-span-5"></div>
        <div className="col-span-1 flex flex-row items-center justify-center lg:py-2">
            <FontAwesomeIcon icon={faMinus} rotation={90} size="xl" className="text-default-400 dark:text-default"/>
        </div>
        <div className="col-span-5"></div>
    </>
}