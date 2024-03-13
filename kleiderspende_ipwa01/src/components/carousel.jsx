import React, { Component } from 'react';

class Carousel extends Component {
    state = {  } 
    render() { 
        return <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/img/packen.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/img/übergabe.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/img/vorort.jpg" className="d-block w-100" alt="..." />
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
      </div>;
    }
}
 
export default Carousel;
