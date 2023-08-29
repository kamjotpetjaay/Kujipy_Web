import React, { FC } from 'react';
import { NavbarLogoWrapper } from './NavbarLogo.styled';
import logo from '../../assets/kujipylogo.jpg';

interface NavbarLogoProps {}

const NavbarLogo: FC<NavbarLogoProps> = () => (
 <NavbarLogoWrapper>
      <img src={logo} className="App-logo" alt="logo" />
 </NavbarLogoWrapper>
);

export default NavbarLogo;
