import { Entry } from "../../config/navbarConfig"

export function checkActive(entry: Entry, currentRoute: string) {
    if (entry.type === "flat") {
        return currentRoute == entry.route
    } else {
        return entry.childs.filter(child => currentRoute == child.route).length > 0
    }
}