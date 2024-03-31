import { faCheck, faCircleHalfStroke, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Link, NavbarItem } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { useTranslation } from 'react-i18next';

export default function Customization() {

    const { theme, setTheme } = useTheme()

    return (
        <>
            <NavbarItem>
                <LanguageDropdown />
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} color="primary" variant="ghost" isIconOnly onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
                    <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" />
                </Button>
            </NavbarItem>
        </>
    );
}

function LanguageDropdown() {

    const { t, i18n } = useTranslation();

    const dropdownItems = [
        ["en-EN", "english"],
        ["pl-PL", "polski"],
        ["uk-UK", "українська"]
    ]
        .map(([code, name]) => ([code, name, i18n.language === code] as [string, string, boolean]))
        .map(([code, name, isActive]) =>
            <DropdownItem
                key={code}
                startContent={<FontAwesomeIcon icon={faCheck} style={isActive ? {} : { color: "transparent" }} />}

            >
                {name}
            </DropdownItem>
        )

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button as={Link} color="primary" variant="ghost" isIconOnly>
                    <FontAwesomeIcon icon={faLanguage} size="xl" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" onAction={key => i18n.changeLanguage(key.toString())}>
                <DropdownSection title={t("navbar.chooseLanguage")}>
                    {dropdownItems}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}