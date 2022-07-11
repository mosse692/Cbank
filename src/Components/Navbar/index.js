import React, { useEffect, useState } from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

function Navbar({toggle}) {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        window.scrollTo({top: 0, behavior: 'smooth' })
    }

  return <>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}> 
                  CBank
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="discover">Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="services">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="signup">Sign Up</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
  </>;
}

export default Navbar;
