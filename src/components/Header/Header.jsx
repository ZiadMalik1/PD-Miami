import { React, useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import Logo from "../../UI/Logo/Logo";
import useWindowSize from "../../hooks/useWindowSize";
import classes from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";

const Header = ({ modalState, setModalState, onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

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
        <Navbar modalState={modalState} onClick={onClick} />
        <div className={classes.header__menu}>
          <div className={classes.header__menu__toggle}>{menuToggle}</div>
          <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
            <Navbar
              isMenu
              menuToggle={handleMenuToggle}
              onClick={onClick}
            />
          </aside>
        </div>
      </header>
    </>
  );
};

export default Header;
