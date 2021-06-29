import React from 'react';
import './style.css';
import Resume from '.';


function About() {
    return (
        <section className="bg-light about-page" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-center mt-0 about">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0">Matthew Cross is a Student Full-Stack Web Developer with Front End and Back End development experience. My current job interest is becoming a SQL Developer. I personally love working with databases and routing.</p>
                            <div>
                                <a href={Resume} target="blank" className="btn btn-outline-dark about-btn" role="button"><i class="fas fa-user-circle"></i> Resume</a>
                                <a href="https://github.com/MattCross01" className="btn btn-dark about-btn btn-outline-light" target="blank" role="button"><i className="fab fa-github"></i> Github</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;