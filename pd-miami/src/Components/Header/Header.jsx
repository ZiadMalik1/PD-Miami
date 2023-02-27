import { React, useState } from "react";
import classes from "./Header.module.scss";
import Logo from "../../UI/Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight size={30} onClick={handleMenuToggle} />
  ) : (
    <CgClose size={30} onClick={handleMenuToggle} />
  );

  return (
    <>
      <header className={classes.header}>
        <Logo />
        <Navbar />
        <div className={classes.header__menu}>
          <div className={classes.header__menu__toggle}>{menuToggle}</div>
          <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
            <Navbar isMenu menuToggle={handleMenuToggle} />
          </aside>
        </div>
      </header>
    </>
  );
};

export default Header;
