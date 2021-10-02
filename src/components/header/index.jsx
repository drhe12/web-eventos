import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { TiTicket } from "react-icons/ti";

import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo } from "./headerElements";

export const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <TiTicket
                size={40}
                style={{ marginRight: 10, color: "#01bf71" }}
              />
              taquiYa
            </NavLogo>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
