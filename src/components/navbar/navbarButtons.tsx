import { NavbarItem, Link, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

import { FlatEntry, GroupEntry, config } from "../../config/navbarConfig";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { checkActive } from "./utils";
import { useAppSelector } from "../../hooks";

function FlatEntryComponent({ entry, isActive }: { entry: FlatEntry, isActive: boolean }) {

    const { t } = useTranslation();

    return <NavbarItem className="flex center">
        <Link
            color={isActive ? "primary" : "foreground"}
            href={entry.route}
            isBlock
            showAnchorIcon={!!entry.icon}
            anchorIcon={entry.icon}
        >
            {t(entry.translationKey)}
        </Link>
    </NavbarItem>
}

function GroupEntryComponent({ entry, isActive }: { entry: GroupEntry, isActive: boolean }) {

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

export default function NavbarButtons() {

    const route = useAppSelector((state) => state.route.value)

    return <>
        {
            config.map(
                (entry, id) => entry.type === "flat"
                    ? <FlatEntryComponent key={id} entry={entry} isActive={checkActive(entry, route)} />
                    : <GroupEntryComponent key={id} entry={entry} isActive={checkActive(entry, route)} />
            )
        }
    </>

}