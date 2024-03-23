import React, { Component } from 'react';
import  Navbar from "./components/navbar.jsx"
import ImageSlider from './components/imagSlider.jsx';

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