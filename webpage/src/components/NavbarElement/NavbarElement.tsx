import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavbarElementWrapper, SpanStyle } from './NavbarElement.styled';
import "./NavbarElement.css"

interface NavbarElementProps {
   texto: string
   link: string
}

const NavbarElement: FC<NavbarElementProps> = ({texto, link}: NavbarElementProps) => (
 <NavbarElementWrapper>
   <Link className='ButtonStyle' to={link} style={{ padding: 5 }}>
      <SpanStyle>{texto}</SpanStyle>
   </Link>
 </NavbarElementWrapper>
);

export default NavbarElement;
