import React, { FC } from 'react';
import { NavbarElementWrapper, SpanStyle, ButtonStyle } from './NavbarElement.styled';

interface NavbarElementProps {
   texto: string
}

const NavbarElement: FC<NavbarElementProps> = ({texto}: NavbarElementProps) => (
 <NavbarElementWrapper>
   <ButtonStyle href= "#" >
      <SpanStyle>{texto}</SpanStyle>
   </ButtonStyle>
 </NavbarElementWrapper>
);

export default NavbarElement;
