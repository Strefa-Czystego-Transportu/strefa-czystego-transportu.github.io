import { Link, NavbarBrand } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function NavbarLogo() {

    const { t } = useTranslation();

    return (
        <NavbarBrand>
            <Link
                href="/#"
                color="foreground"
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faBus} size="xl" className="text-primary" />
                <h1 className="hidden sm:flex font-extrabold text-inherit ml-2">{t("navbar.name")}</h1>
                <div className="sm:hidden flex flex-col justify-end max-h-12">
                    {t("navbar.name").split(" ").map(word => <p className="font-extrabold text-2xs ml-2">{word}</p>)}
                </div>
            </Link>
        </NavbarBrand>
    );
}