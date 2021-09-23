import React from "react";
import {FiLink} from 'react-icons/fi';
import Card from "../../components/shared-components/Card";


function ProjectsGridItem (props){
    const {project} = props;
    return <div className="projects-grid-item">
        <img src={project.image} height="100px" width="100%" alt="Project Image" />
        <h4 className="title"> {project.name} </h4>
        <p className="foudation"><strong> {project.foudation} </strong></p>
        
       
    </div>;
}

export default ProjectsGridItem;