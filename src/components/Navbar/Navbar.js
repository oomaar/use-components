import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavMenu,
    NavLink,
    Logo,
    Bars,
    Line,
    NavBtn,
    NavBtnLink,
} from "./styledNavbar";

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">
                <Logo>LOGO</Logo>
            </NavLink>
            <Bars>
                {/* <Line></Line>
                <Line></Line>
                <Line></Line> */}
                <FaBars />
            </Bars>
            
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
                <NavLink to="/services" activeStyle>
                    services
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    projects
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/login">
                    login
                </NavBtnLink>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;
