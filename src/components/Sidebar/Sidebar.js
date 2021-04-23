import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
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
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;
