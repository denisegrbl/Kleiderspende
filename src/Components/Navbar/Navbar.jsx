import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div>
            <nav className='container'>
                <img src={logo} alt='logo' className='logo'/>
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li className='nav-link'>
                        <ScrollLink to='hero' smooth={true} duration={500}>Home</ScrollLink>
                    </li>
                    <li className='nav-link'>
                        <ScrollLink to='program' smooth={true} duration={500}>Unser Program</ScrollLink>
                    </li>
                    <li className='nav-link'>
                        <ScrollLink to='about' smooth={true} duration={500}>Über uns</ScrollLink>
                    </li>
                    <li className='nav-link'>
                        <ScrollLink to='spenden' smooth={true} duration={500}>Spenden</ScrollLink>
                    </li>

                    <li>
                        <a href="/" className="icon-link">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/" className="icon-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/" className="icon-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </ul>
                <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
            </nav>
        </div>
    );
};

export default Navbar;
