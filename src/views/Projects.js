import { Component } from 'react';
import '../styles/Projects.scss';
import ProjectsGrid from './components/ProjectsGrid';


function Projects (){
    return (
        <div className="projects">
           <h2>
               <span className="hashtag">#</span> Projetos
           </h2>
           <ProjectsGrid/>
        </div>
    );
}

export default Projects;