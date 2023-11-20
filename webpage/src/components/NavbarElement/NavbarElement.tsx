import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarElementWrapper, SpanStyle } from './NavbarElement.styled';
import "./NavbarElement.css"

interface NavbarElementProps {
   texto: string
   link: string
   customStyle: string
   buttonName: string
   clickEvent: (active: string) => void
}

const NavbarElement = ({texto, link, customStyle, buttonName, clickEvent}: NavbarElementProps) => {
    return (
      <NavbarElementWrapper>
        <Link className={'ButtonStyle'} to={link} style={{ padding: 5 }} onClick={ () => clickEvent(buttonName)}>
           <SpanStyle className={customStyle}>{texto}</SpanStyle>
        </Link>
      </NavbarElementWrapper>
     );
}


export default NavbarElement;
