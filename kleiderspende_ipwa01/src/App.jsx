import React, { Component } from 'react';
import Navbar from "./components/navbar.jsx"
import Carousel from './components/carousel.jsx';
import Card from './components/card.jsx';
import Spenden from './components/spenden.jsx';
import ÜberUns from './components/ueberuns.jsx';
import Footer from './components/footer.jsx';
class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <Carousel/>
            <Card/>
            <Spenden/>
            <ÜberUns/>
            <Footer/>
        </React.Fragment>;
    }
}
 
export default App;