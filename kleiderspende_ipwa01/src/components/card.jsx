import React, { Component } from 'react';
const Afrika = require('../assets/afrika.jpg');
const Asien = require('../assets/asien.jpg');
const NahOsten = require('../assets/NahOsten.jpg');
const Europa = require('../assets/europa.jpg');

class Card extends Component {
    state = {  } 
    render() { 
        return <div className="container mt-5">
                    <h1 className="knallblau fw-semibold"> Warum Spenden?</h1>
                    <p />Das Spenden von Kleidung an Krisengebiete ist von großer Bedeutung, da diese Regionen oft von Konflikten, Naturkatastrophen oder humanitären Krisen betroffen sind. <br />In solchen Situationen sind die Menschen auf der Suche nach Grundbedürfnissen wie Nahrung, Unterkunft und Kleidung. Kleiderspenden ermöglichen es den Betroffenen, angemessene Kleidung zu erhalten, um sich vor den Elementen zu schützen und ihre Würde zu wahren.<br /> Darüber hinaus kann Kleidung in Krisengebieten ein Stück Normalität und Komfort inmitten von Chaos und Unsicherheit bieten. Durch Kleiderspenden können wir praktische Unterstützung leisten und Solidarität mit den Menschen in Krisengebieten zeigen.<p />
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-0.5 mb-4 ">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={Afrika} className="card-img-top" alt="Afrika"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Afrika</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={Asien} className="card-img-top" alt="Asien"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Asien</h5>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 ">
                                    <img src={NahOsten} className="card-img-top" alt="NahOsten"/>
                                    <div className="card-body">
                                        <h5 className="card-title">NahOsten</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 ">
                                    <img src={Europa} clasNames="card-img-top" alt="Europa"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Europa</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
    }
}
 
export default Card;