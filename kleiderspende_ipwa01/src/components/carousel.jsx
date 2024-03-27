import React, { Component } from 'react';
const packen = require('../assets/packen.jpg');
const übergabe = require('../assets/übergabe.jpg');
const vorort = require('../assets/vorort.jpg');

class Carousel extends Component {
    state = {  } 
    render() { 
    return <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={packen} className="d-block w-100" alt="packen" />
                        </div>
                        <div className="carousel-item">
                        <img src={übergabe} className="d-block w-100" alt="übergabe" />
                        </div>
                        <div className="carousel-item">
                        <img src={vorort} className="d-block w-100" alt="vorort" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
        
    }
}
export default Carousel;