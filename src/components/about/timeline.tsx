import { config } from "../../config/timelineConfig";
import TimelineDivider from "./timelineDivider";
import TimelineEntry from "./timelineEntry";

export default function Timeline({ alternate }: { alternate?: boolean }) {
    return (
        <div className="grid grid-cols-11 mb-4">
            {
                config.flatMap((data, id) => [
                    <TimelineEntry key={id} data={data} ltr={!!(alternate && id % 2)} />,
                    <TimelineDivider key={id + config.length} />
                ]).slice(0, -1)
            }
        </div>
    )
}
