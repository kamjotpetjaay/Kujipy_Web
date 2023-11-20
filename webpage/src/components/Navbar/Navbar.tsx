import React, { useEffect, useState } from 'react';
import { NavbarKujipy,  NavbarLogoStyle, NavbarElementsStyle} from './Navbar.styled';
import NavbarElement from '../NavbarElement/NavbarElement';
import NavbarLogo from '../NavbarLogo/NavbarLogo';

interface NavbarProps {}

const Navbar = () => {
    function onClikElement(active: string){
        setButtonActive(active)
    }
    const [buttonActive, setButtonActive] = useState<string> ("")
    return (
    <NavbarKujipy>
        <NavbarLogoStyle>
            <NavbarLogo/>
        </NavbarLogoStyle>
        <NavbarElementsStyle>
            <NavbarElement texto = "INICIO" link='/' customStyle={buttonActive === 'INICIO' ? 'ButtonActive': ''} buttonName='INICIO'  clickEvent={onClikElement}/>
            <NavbarElement texto = "EVENTOS" link='/events' customStyle={buttonActive === 'EVENTOS' ? 'ButtonActive': ''} buttonName='EVENTOS' clickEvent={ onClikElement}/>
            <NavbarElement texto = "CONTRATACIONES" link='/hiring' customStyle={buttonActive === 'CONTRATACIONES' ? 'ButtonActive': ''} buttonName='CONTRATACIONES' clickEvent={onClikElement}/>
            <NavbarElement texto = "GALERIA" link='/galery' customStyle={buttonActive === 'GALERIA' ? 'ButtonActive': ''} buttonName='GALERIA' clickEvent={ onClikElement}/>
            <NavbarElement texto = "ACERCA DE" link='/about' customStyle={buttonActive === 'ACERCADE' ? 'ButtonActive': ''} buttonName='ACERCADE' clickEvent={ onClikElement}/>
            <NavbarElement texto = "TLAHUITOLTEPEC" link='/tlahuitoltepec' customStyle={buttonActive === 'TLAHUITOLTEPEC' ? 'ButtonActive': ''} buttonName='TLAHUITOLTEPEC' clickEvent={ onClikElement}/>
        </NavbarElementsStyle>
    </NavbarKujipy>
    );
}

export default Navbar;
