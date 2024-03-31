import { NavbarItem, Link, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

import { Entry, FlatEntry, GroupEntry, config } from "./navbarConfig";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FlatEntryComponent({ entry, refresh, isActive }: { entry: FlatEntry, refresh?: () => void, isActive: boolean }) {

    const { t } = useTranslation();

    return <NavbarItem className="flex center">
        <Link
            color={isActive ? "primary" : "foreground"}
            href={entry.route}
            isBlock
            showAnchorIcon={!!entry.icon}
            anchorIcon={entry.icon}
            onPress={refresh}
        >
            {t(entry.translationKey)}
        </Link>
    </NavbarItem>
}

function GroupEntryComponent({ entry, refresh, isActive }: { entry: GroupEntry, refresh?: () => void, isActive: boolean }) {

    const { t } = useTranslation();

    return <NavbarItem className="flex center">
        <Dropdown>
            <DropdownTrigger>
                <Link
                    isBlock
                    className="cursor-pointer"
                    showAnchorIcon
                    anchorIcon={<FontAwesomeIcon icon={faChevronDown} className="ml-2" />}
                    color={isActive ? "primary" : "foreground"}
                >
                    {t(entry.translationKey)}
                </Link>
            </DropdownTrigger>
            <DropdownMenu
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {
                    entry.childs.map((entry, childId) => (
                        <DropdownItem
                            key={childId}
                            endContent={entry.icon ? entry.icon : <FontAwesomeIcon icon={faChevronRight} />}
                        >
                            <Link
                                href={entry.route}
                                color="foreground"
                                onPress={refresh}
                            >
                                {t(entry.translationKey)}
                            </Link>
                        </DropdownItem>
                    ))
                }

            </DropdownMenu>
        </Dropdown>
    </NavbarItem>
}

function checkActive(entry: Entry) {
    if (entry.type === "flat") {
        return location.href.includes(entry.route)
    } else {
        return entry.childs.map(child => location.href.includes(child.route)).filter(x => x).length > 0
    }
}

export default function NavbarButtons() {

    const [activeEntry, setActiveEntry] = useState(config.reduce<Entry | undefined>((acc, entry) => checkActive(entry) ? entry : acc, undefined))

    return <>
        {
            config.map(
                (entry, id) => entry.type === "flat"
                    ? <FlatEntryComponent key={id} entry={entry} refresh={() => setActiveEntry(entry)} isActive={activeEntry == entry} />
                    : <GroupEntryComponent key={id} entry={entry} refresh={() => setActiveEntry(entry)} isActive={activeEntry == entry} />
            )
        }
    </>

}