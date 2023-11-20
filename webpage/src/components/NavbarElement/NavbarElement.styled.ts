import styled from 'styled-components';

export const NavbarElementWrapper = styled.div`
    display: inline-block;
    margin: 0 auto;
`;


export const SpanStyle = styled.span`
    align-items: center;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background .5s ease;
    width: 100%;
    padding: 0 10px;
    &:hover ${this} {
        background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
        padding: 0 10px;
    };
    &:active  ${this} {
        background-image: linear-gradient(to right, #002175 0%, #00a750 100%);
        padding: 0 10px;
    };
`;
