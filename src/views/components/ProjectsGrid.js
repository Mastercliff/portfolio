import React from 'react';
import projectsList from '../../data/ProjectsList';
import ProjectsGridItem from './ProjectsGridItem';
import './styles/ProjectsGrid.scss'


function ProjectsGrid(){
    return <div className="projects-grid">
        {projectsList.map((item, index) =>{
            return <ProjectsGridItem project={item} />
        })}
    </div>;
}

export default ProjectsGrid;