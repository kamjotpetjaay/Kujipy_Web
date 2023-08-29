import React, { FC } from 'react';
import { NavbarKujipy,  NavbarLogoStyle, NavbarElementsStyle} from './Navbar.styled';
import NavbarElement from '../NavbarElement/NavbarElement';
import NavbarLogo from '../NavbarLogo/NavbarLogo';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
 <NavbarKujipy>
    <NavbarLogoStyle>
        <NavbarLogo/>
    </NavbarLogoStyle>
    <NavbarElementsStyle>
        <NavbarElement/>
    </NavbarElementsStyle>
 </NavbarKujipy>
);

export default Navbar;
