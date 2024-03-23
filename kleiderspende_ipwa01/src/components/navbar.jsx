import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const logo = require('../assets/logo.jpg');


class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar navbar-expand-lg bg-body-tertiary pt-lg-3 fs-4 fw-light sticky-top ">
            <div className="container">
            <img src={logo} alt="LOGO" width="80" height="75" />
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link text-black active"  href="/">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black " href="#donate">Spenden</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black " href="#about">Über uns</a>
                        </li>
                        <li className="d-flex align-items-center mt-2 mt-lg-0 mx-lg-2">
                            <a href="/" className="icon-link text-black a-lg me-2">
                            <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="/" className="icon-link text-black fa-lg mx-2">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="/" className="icon-link text-black fa-lg mx-2">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}
 
export default Navbar;