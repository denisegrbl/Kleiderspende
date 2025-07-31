import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
    <div>
        <nav className="container">
            <img src={logo} alt="Kleiderspende Logo" className="logo" />
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/#program">Unser Programm</Link>
                </li>
                <li className="nav-link">
                    <Link to="/#spenden">Spenden</Link>
                </li>  
                <li className="nav-link">
                    <Link to="/#about">Über uns</Link>
                </li>           
            </ul>
            <img
            src={menu_icon}
            alt="Navigation öffnen"
            className="menu-icon"
            onClick={toggleMenu}
            />
        </nav>
        </div>
    );
};

export default Navbar;
