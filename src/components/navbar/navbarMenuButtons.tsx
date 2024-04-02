import { Link, NavbarMenuItem } from "@nextui-org/react";


import { Entry, FlatEntry, GroupEntry, config } from "../../config/navbarConfig";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { checkActive } from "./utils";

function FlatEntryComponent({ entry, refresh, isActive }: { entry: FlatEntry, refresh?: () => void, isActive: boolean }) {

    const { t } = useTranslation();

    return <NavbarMenuItem className="flex center">
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
    </NavbarMenuItem>
}

function GroupEntryComponent({ entry, refresh, isActive }: { entry: GroupEntry, refresh?: () => void, isActive: boolean }) {

    const { t } = useTranslation();

    const [hideOptions, setHideOptions] = useState(true)

    const variants = {
        open: { opacity: 1, height: "100%" },
        closed: { opacity: 0, height: 0 },
    }

    const toggle = <Link
        isBlock
        showAnchorIcon
        anchorIcon={<FontAwesomeIcon icon={hideOptions ? faChevronDown : faChevronUp} className="ml-2" />}
        color={isActive ? "primary" : "foreground"}
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
                onPress={refresh}
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

export default function NavbarMenuButtons() {

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