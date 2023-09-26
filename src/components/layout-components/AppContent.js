import React from "react";
import { Section } from 'react-scroll-section';
import Certifications from "../../views/Certifications";
import Contact from "../../views/Contact";
import Experiences from "../../views/Experiences";
import Home from "../../views/Home";
import Projects from "../../views/Projects";
import Skills from "../../views/Skills";
import './styles/AppContent.scss';


function AppContent(){

    return (
        <div className="app-content">
            <div className="container">
                <Section id="home" datatype="home">
                    <Home />
                </Section>

                <Section id="projects" datatype="projects">
                    <Projects />
                </Section>

                <Section id="skills" datatype="skills">
                    <Skills />
                </Section>

                <Section id="experiences" datatype="experiences">
                    <Experiences />
                </Section>

                <Section id="certifications" datatype="certifications">
                    <Certifications />
                </Section>

                <Section id="contact" datatype="contact">
                    <Contact />
                </Section>
            </div>
        </div>
    );
    
}

export default AppContent;