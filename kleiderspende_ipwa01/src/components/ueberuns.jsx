import React, { Component } from 'react';
const Team = require('../assets/team.jpg');

class ÜberUns extends Component {
    state = {  } 
    render() { 
        return  <div id="about" class="container">
            <h2 class="knallblau fw-semibold">Über uns</h2>
            <p class="mb-4" />Wir sind das engagierte Team hinter der Kleidungspende-Organisation. Unsere Mission ist es, Bedürftigen zu helfen und einen    positiven Einfluss auf die Gesellschaft zu haben, indem wir Kleidungsspenden sammeln und verteilen. Unser Team besteht aus leidenschaftlichen Freiwilligen, die sich für soziale Gerechtigkeit und Nachhaltigkeit einsetzen.<br /> Wir glauben fest daran, dass jeder Mensch das Recht auf angemessene Kleidung hat, unabhängig von ihrer sozialen oder wirtschaftlichen Situation.<br />Unser Team ist stolz darauf, einen positiven Beitrag in unserer Gemeinschaft zu leisten und das Leben von Menschen zu verbessern. <br />Wir laden Sie ein, sich unserer Bewegung anzuschließen und Teil unserer Kleidungspende-Familie zu werden. Gemeinsam können wir eine bedeutende Veränderung bewirken und Hoffnung in die Herzen derjenigen bringen, die es am dringendsten brauchen.<p />
            <div class="card" style={{width: '18rem'}}>
                <img src={Team} class="card-img-top " alt="Team" />
            </div>
        </div>
    }
}
 
export default ÜberUns;