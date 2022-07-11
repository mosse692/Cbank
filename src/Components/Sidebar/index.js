import React from 'react';
import {
        SidebarContainer, 
        Icon, 
        CloseIcon, 
        SideBarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrapp, 
        SideBarRoute
    } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapp>
                    <SideBarRoute to="/signin">Sign In</SideBarRoute>
                </SideBtnWrapp>
            </SideBarWrapper>
  </SidebarContainer>;
}

export default Sidebar;
