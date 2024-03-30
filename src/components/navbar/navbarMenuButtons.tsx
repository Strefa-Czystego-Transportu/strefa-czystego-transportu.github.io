import { Link, NavbarMenuItem } from "@nextui-org/react";


import { FlatEntry, GroupEntry, config } from "./navbarConfig";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavbarMenuButtons() {

    const [hideOptions, setHideOptions] = useState(true)

    const { t } = useTranslation();

    function generateFlatEntry(entry: FlatEntry, id?: number): JSX.Element {
        return <NavbarMenuItem key={id} className="flex center">
            <Link
                color="foreground"
                href={entry.route}
                isBlock
                showAnchorIcon={!!entry.icon}
                anchorIcon={entry.icon}
            >
                {t(entry.translationKey)}
            </Link>
        </NavbarMenuItem>
    }

    function generateGroupEntry(entry: GroupEntry, id?: number): JSX.Element {
        const variants = {
            open: { opacity: 1, height: "100%" },
            closed: { opacity: 0, height: 0 },
        }

        const toggle = <Link
            key={id}
            isBlock
            showAnchorIcon
            anchorIcon={<FontAwesomeIcon icon={hideOptions ? faChevronDown : faChevronUp} className="ml-2" />}
            color="foreground"
            className="cursor-pointer"
            onClick={() => setHideOptions(!hideOptions)}
        >
            {t(entry.translationKey)}
        </Link>


        const items = entry.childs.map(
            (entry, id) => <NavbarMenuItem key={id} className="flex center pl-6">
                <Link
                    isBlock
                    showAnchorIcon={!!entry.icon}
                    anchorIcon={entry.icon}
                    color="foreground"
                    href={entry.route}
                >
                    {t(entry.translationKey)}
                </Link>
            </NavbarMenuItem>
        )

        return <NavbarMenuItem>
            {toggle}
            <div className="overflow-hidden">
                <motion.div
                    initial={false}
                    animate={hideOptions ? "closed" : "open"}
                    variants={variants}
                >
                    {items}
                </motion.div>
            </div>
        </NavbarMenuItem>
    }

    return (
        config.map(
            (entry, id) => entry.type === "flat" ? generateFlatEntry(entry, id) : generateGroupEntry(entry, id)
        )
    );
}