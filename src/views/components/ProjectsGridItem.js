import React from "react";


function ProjectsGridItem (props){
    const {project} = props;
    return <div className="projects-grid-item">
        <img src={project.image} height="90px" width="100%" alt="project" />
        <h4 className="title"> {project.name} </h4>
        <p className="foudation"><strong> {project.foudation} </strong></p>
    </div>;
}

export default ProjectsGridItem;