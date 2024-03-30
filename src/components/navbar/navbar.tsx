import { Navbar as NUINavbar, NavbarContent, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import { useState } from "react";

import NavbarLogo from "./navbarLogo";
import Customization from "./customization";

import NavbarButtons from "./navbarButtons";
import NavbarMenuButtons from "./navbarMenuButtons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NUINavbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
            <NavbarContent>
                <NavbarLogo />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            </NavbarContent>

            <NavbarContent justify="end">
                <div className="hidden md:flex gap-4 mr-1">
                    <NavbarButtons />
                </div>
                <Customization />
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuButtons />
            </NavbarMenu>
        </NUINavbar>
    );
}