import React, { FC } from 'react';
import { NavbarWrapper } from './Navbar.styled';
import NavbarElement from '../NavbarElement/NavbarElement';
import NavbarLogo from '../NavbarLogo/NavbarLogo';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
 <NavbarWrapper>
    <div className="navbar-kujipy">
        <div className='navbar-logo'>
            <NavbarLogo/>
        </div>
        <div className='navbar-elemnts'>
            <NavbarElement/>
        </div>
    </div>
 </NavbarWrapper>
);

export default Navbar;
