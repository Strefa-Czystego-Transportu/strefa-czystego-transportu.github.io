import { Link, NavbarBrand } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function NavbarLogo() {

    const { t } = useTranslation();

    return (
        <NavbarBrand>
            <Link
                color="foreground"
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faBus} size="xl" className="text-primary" />
                <h1 className="font-extrabold text-inherit ml-2">{t("navbar.name")}</h1>
            </Link>
        </NavbarBrand>
    );
}