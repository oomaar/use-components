import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
    color: #e1e9fc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 17px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    border-left: 4px solid transparent;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

export const IconContainer = styled.div``;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

export const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    
    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;