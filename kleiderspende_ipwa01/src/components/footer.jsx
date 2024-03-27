import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return <div class="footer py-5 fw-light mt-4">
        &copy; 2023 Style for All
   
        <a href="/" id="impressumLink" class="rechtliche-links mx-2">Impressum</a>
       
        <a href="/" id="datenschutzLink" class="rechtliche-links ">Datenschutz</a>
    </div>
    }
}
 
export default Footer;