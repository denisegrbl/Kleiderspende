import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <div>
            <nav className='container'>
                <img src={logo} alt='logo' className='logo'/>
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li className='nav-link'>
                        <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='program' smooth={true} offset={-260} duration={500}>Unser Program</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='about' smooth={true} offset={0} duration={500}>Über uns</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='spenden' smooth={true} offset={-260} duration={500} >Spenden</Link>
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
  )
}

export default Navbar
