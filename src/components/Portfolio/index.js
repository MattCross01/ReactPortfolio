import React from 'react';
import techblog from './images/techblog.png';
import Pokemon from './images/pokemondb.png';
import Ecommerce from './images/ecommerce.gif';
import Directory from './images/EMS.png';
import EAS from './images/EAS.png';
import WD from './images/weatherdashboard.png';
import Readme from './images/Readmegenerator.png';
import Password from './images/password.png';
import './style.css';

function Portfolio () {
    return (
        <section id="portfolio">
            <div className="container">
            <div className="row justify-content-center">
            <h2 className="text-center mt-5 portfolio">Portfolio</h2>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={techblog} className="card-img-top" alt="ppco" />
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog</h5>
                            <a href="https://techbloghwv3.herokuapp.com/" target="blank" className="btn btn-dark btn-outline-light">Go to Application</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Pokemon} className="card-img-top" alt="npwa" />
                        <div className="card-body">
                            <h5 className="card-title">Pokemon Database Project</h5>
                            <a href="https://thepokemonlookupproject.herokuapp.com/" target="blank" className="btn btn-dark btn-outline-light">Go to Application</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Ecommerce} className="card-img-top" alt="mvc" />
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Back End</h5>
                            <a href="https://github.com/MattCross01/EcommerceBackEnd" target="blank" className="btn btn-dark btn-outline-light">Go to Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Directory} className="card-img-top" alt="notebook" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <a href="https://github.com/MattCross01/EmployeeManagmentSystem" target="blank" className="btn btn-dark btn-outline-light">Go to Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={EAS} className="card-img-top" alt="weatherdashboard" />
                        <div className="card-body">
                            <h5 className="card-title">Node EAS Alert Generator</h5>
                            <a href="https://github.com/MattCross01/Node-EAS-Alert-Generator" target="blank" className="btn btn-dark btn-outline-light">Go to Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={WD} className="card-img-top" alt="dayplanner" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <a href="https://mattcross01.github.io/LocalWeatherDashboard/" target="blank" className="btn btn-dark btn-outline-light">Go to Application</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Password} className="card-img-top" alt="passwordgen" />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <a href="https://github.com/MattCross01/Random-Pass-Gen" target="blank" className="btn btn-dark btn-outline-light">Go to Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Readme} className="card-img-top" alt="readmegen" />
                        <div className="card-body">
                            <h5 className="card-title">README-Generator</h5>
                            <a href="https://github.com/MattCross01/Professional-README-Generator" target="blank" className="btn btn-dark btn-outline-light">Go to Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Portfolio;