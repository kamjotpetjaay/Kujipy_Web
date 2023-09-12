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
        <NavbarElement texto = "INICIO" link='/'/>
        <NavbarElement texto = "EVENTOS" link='/events'/>
        <NavbarElement texto = "CONTRATACIONES" link='/hiring'/>
        <NavbarElement texto = "GALERIA" link='/galery'/>
        <NavbarElement texto = "ACERCA DE" link='/about'/>
    </NavbarElementsStyle>
 </NavbarKujipy>
);

export default Navbar;
