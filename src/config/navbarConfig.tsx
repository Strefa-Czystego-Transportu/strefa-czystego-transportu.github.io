import { faLightbulb, faMap } from "@fortawesome/free-regular-svg-icons"
import { faSection, faListCheck, faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface FlatEntry {
    type: "flat",
    translationKey: string,
    route: string,
    icon?: JSX.Element,
}

export interface GroupEntry {
    type: "group",
    translationKey: string,
    childs: FlatEntry[],
}

export type Entry = FlatEntry | GroupEntry

export const config: Entry[] = [
    {
        type: "flat",
        translationKey: "navbar.pages.about",
        route: "#/about",
        icon: <FontAwesomeIcon icon={faLightbulb} className="ml-2" />
    },
    {
        type: "group",
        translationKey: "navbar.pages.importantInfo",
        childs: [
            {
                type: "flat",
                translationKey: "navbar.pages.news",
                route: "#/news",
                icon: <FontAwesomeIcon icon={faNewspaper} className="ml-2" />
            },
            {
                type: "flat",
                translationKey: "navbar.pages.regulations",
                route: "#/regulations",
                icon: <FontAwesomeIcon icon={faSection} className="ml-2" />
            },
            {
                type: "flat",
                translationKey: "navbar.pages.exclusions",
                route: "#/exclusions",
                icon: <FontAwesomeIcon icon={faListCheck} className="ml-2" />
            },
        ]
    },
    {
        type: "flat",
        translationKey: "navbar.pages.map",
        route: "#/map",
        icon: <FontAwesomeIcon icon={faMap} className="ml-2" />
    },
]