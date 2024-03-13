import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ImageSlider from './imagSlider';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <ImageSlider/>
        </React.Fragment>;
    }
}
 
export default App;