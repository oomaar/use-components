import styled from 'styled-components/macro';
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    font-family: 'Roboto', sans-serif;
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 100;
`;

export const Logo = styled.h1``;

export const NavLink = styled(Link)`
    color: rgb(226, 226, 226);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-transform: capitalize;

    &.active {
        color: #15cdfc;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
    `;

export const NavBtnLink = styled(Link)`
    color: rgb(226, 226, 226);
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: capitalize;
    
    &:hover {
        background: #fff;
        color: #010606;
    }
`;

export const Bars = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;

    @media (max-width: 768px ) {
        display: block;
    }
`;

export const Line = styled.div`
    width: 20px;
    height: 3px;
    margin: 5px auto;
    background: #fff;
`;
