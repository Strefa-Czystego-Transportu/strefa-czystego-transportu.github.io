import { config } from "../../config/timelineConfig";
import TimelineDivider from "./timelineDivider";
import TimelineEntry from "./timelineEntry";

export default function Timeline({ alternate }: { alternate?: boolean }) {
    return (
        <div className="grid grid-cols-11 w-5/6 lg:w-3/4 mb-4">
            {
                config.flatMap((data, id) => [<TimelineEntry key={id} data={data} ltr={!!(alternate && id % 2)} />, <TimelineDivider key={id * 2} />]).slice(0, -1)
            }
        </div>
    )
}
