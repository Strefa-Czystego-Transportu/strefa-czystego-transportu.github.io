import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Entry } from "../../config/timelineConfig";
import { useTranslation } from "react-i18next";

export default function TimelineEntry({ data, ltr }: { data: Entry, ltr?: boolean }) {

    const { t } = useTranslation();

    const descCol = <p className="text-sm">{t(data.translationKey)}</p>

    const dateCol = <p className="font-bold text-sm">{data.date}</p>

    const [leftCol, rightCol] = ltr ? [descCol, dateCol] : [dateCol, descCol]

    return (
        <>
            <div className="col-span-5 flex flex-col items-right justify-center mx-2 lg:mx-0 text-right h-14">
                {leftCol}
            </div>
            <div className="col-span-1 flex flex-row items-center justify-center">
                <FontAwesomeIcon icon={faCalendar} size="xl" className="text-default-400 dark:text-default" />
            </div>
            <div className="col-span-5 flex flex-col items-left justify-center mx-2 lg:mx-0 text-left h-14">
                {rightCol}
            </div>
        </>
    )
}


