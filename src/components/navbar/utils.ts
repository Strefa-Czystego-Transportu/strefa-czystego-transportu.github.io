import { Entry } from "../../config/navbarConfig"

export function checkActive(entry: Entry) {
    if (entry.type === "flat") {
        return location.href.includes(entry.route)
    } else {
        return entry.childs.map(child => location.href.includes(child.route)).filter(x => x).length > 0
    }
}