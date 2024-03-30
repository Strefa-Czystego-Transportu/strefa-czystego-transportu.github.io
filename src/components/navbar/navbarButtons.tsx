import { NavbarItem, Link, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";


import { FlatEntry, GroupEntry, config } from "./navbarConfig";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NavbarButtons() {

    const { t } = useTranslation();

    function generateFlatEntry(entry: FlatEntry): JSX.Element {
        return <NavbarItem className="flex center">
            <Link
                color="foreground"
                href={entry.route}
                isBlock
                showAnchorIcon={!!entry.icon}
                anchorIcon={entry.icon}
            >
                {t(entry.translationKey)}
            </Link>
        </NavbarItem>
    }

    function generateGroupEntry(entry: GroupEntry): JSX.Element {
        return <NavbarItem className="flex center">
            <Dropdown>
                <DropdownTrigger>
                    <Link
                        isBlock
                        className="cursor-pointer"
                        showAnchorIcon
                        anchorIcon={<FontAwesomeIcon icon={faChevronDown} className="ml-2" />}
                        color="foreground"
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
                        entry.childs.map(entry => (
                            <DropdownItem
                                key="autoscaling"
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

    return (
        config.map(
            entry => entry.type === "flat" ? generateFlatEntry(entry) : generateGroupEntry(entry)
        )
    );
}