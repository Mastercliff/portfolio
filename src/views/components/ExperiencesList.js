import React from "react";
import experiencesList from "../../data/ExperiencesList";
import './styles/ExperiencesList.scss';
import {FiCheckCircle, FiAtSign, FiBookmark} from 'react-icons/fi';
import Chip from "../../components/shared-components/Chip";


function ExperiencesList(){
    return <div>
        <ul className="experiences-list">
            {experiencesList.map((item, index) => {
                return <li key={index} className="experiences-list-item">
                    
                    <p className="title"> 
                    <FiCheckCircle className="icon" /> {item.title}
                    {
                        item.techs.map((item, index) =>{
                            return <Chip className="ml-1">
                                {item}
                            </Chip>
                        })
                    }<br/> 
                    {item.duration} 
                    </p>

                    <p className="description"> 
                    <FiAtSign /> {item.company} <br/> 
                    <FiBookmark /> {item.description} 
                    </p>
              
                </li>
            })}
        </ul>
    </div>
}


export default ExperiencesList;