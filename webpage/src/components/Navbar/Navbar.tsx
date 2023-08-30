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
        <NavbarElement texto = "INICIO"/>
        <NavbarElement texto = "EVENTOS"/>
        <NavbarElement texto = "CONTRATACIONES"/>
        <NavbarElement texto = "GALERIA"/>
        <NavbarElement texto = "ACERCA DE"/>
    </NavbarElementsStyle>
 </NavbarKujipy>
);

export default Navbar;
