import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "..";
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap,
} from "./styledSidebar";

const Sidebar = () => {
    const [sidebar, setSideBar] = useState(false);
    
    const showSidebar = () => setSideBar(!sidebar);

    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {SidebarData.map((item, index) => (
                        <SubMenu key={index} item={item} />
                    ))}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;
