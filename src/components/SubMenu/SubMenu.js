import { useState } from "react";
import {
    SidebarLink,
    IconContainer,
    SidebarLabel,
    DropdownLink,
} from "./styledSubMenu";

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
                <IconContainer>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </IconContainer>
                <IconContainer>
                    {item.subNav && subnav
                    ? item.iconOpened 
                    : item.subNav
                    ? item.iconClosed 
                    : null}
                </IconContainer>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => (
                <DropdownLink key={index} to={item.path}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            ))}
        </>
    );
};

export default SubMenu;
