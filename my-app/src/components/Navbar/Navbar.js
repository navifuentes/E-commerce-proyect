import React from "react";
import Logo from "./Logo/Logo.js";
import Categorias from "./Categorias/Categorias.js";
import PerfilIcon from "./PerfilIcon/PerfilIcon.js";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu.js";

const Navbar = () => {
  return (
    <nav className="sticky h-1/4 flex flex-row justify-between mx-auto top-0 z-10 bg-blue-200 dark:bg-blue-950">
      <Logo />
      <div className="flex flex-row justify-between">
        <Categorias />
        <HamburgerMenu />
        <PerfilIcon />
      </div>
    </nav>
  );
};

export default Navbar;
