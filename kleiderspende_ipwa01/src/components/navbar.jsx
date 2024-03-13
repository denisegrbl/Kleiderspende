import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav class="navbar navbar-expand-lg bg-body-tertiary pt-lg-3 fs-4 fw-light sticky-top ">
            <div class="container">
            <img src="assets/img/logo.jpg" alt="LOGO" width="80" height="75" />
                <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-lg-2">
                            <a class="nav-link text-black active"  href="#">Start</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black " href="#donate">Spenden</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black " href="#about">Über uns</a>
                        </li>
                        <li class="d-flex align-items-center mt-2 mt-lg-0 mx-lg-2">
                            <a href="#" class="icon-link text-black "
                                ><i class="fab fa-instagram fa-lg me-2"></i>
                            </a>
                            <a href="#" class="icon-link text-black "
                                ><i class="fab fa-facebook fa-lg mx-2"></i>
                            </a>
                            <a href="#" class="icon-link text-black "
                                ><i class="fab fa-twitter fa-lg mx-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}
 
export default Navbar;