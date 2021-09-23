import React from "react";
import { Section } from 'react-scroll-section';
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
                    <Projects />
                </Section>

                <Section id="certications" datatype="certications">
                    <Projects />
                </Section>

                <Section id="about" datatype="about">
                    <Projects />
                </Section>

                <Section id="contact" datatype="contact">
                    <Projects />
                </Section>
            </div>
        </div>
    );
    
}

export default AppContent;