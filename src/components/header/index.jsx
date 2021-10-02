import React, { useState, useEffect } from "react";

import { FaBars, FaMusic, FaStar, FaTheaterMasks } from "react-icons/fa";
import { TiTicket } from "react-icons/ti";
import { GoSearch } from "react-icons/go";

import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Search,
  SearchInput,
} from "./headerElements";

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
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <Search>
                <GoSearch
                  size={24}
                  style={{ color: "#d5d5d5", margin: "0 10" }}
                />
                <SearchInput placeholder="conciertos, teatro y más"></SearchInput>
              </Search>
              <NavItem>
                <NavLinks>
                  Destacados
                  {/* <FaStar style={{ margin: "0 5" }} /> */}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  Música
                  {/* <FaMusic style={{ margin: "0 5" }} /> */}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  Teatro
                  {/* <FaTheaterMasks style={{ margin: "0 5" }} /> */}
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true.toString()}
                duration={500}
                spy={true.toString()}
                exact="true"
                offset={-80}
              >
                Iniciar sesión
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
