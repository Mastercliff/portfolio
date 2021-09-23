import React from 'react';
import '../styles/Skills.scss';
import SkillsList from './components/SkillsList';


function Skills (){
    return <div className="skills">
        <h2>
            <span className="hashtag">#</span> Habilidades
        </h2>

        <div className="title mb-3">
        <img src="icons/infographic.png" height="200px"/>
        </div>
        <SkillsList />
    </div>
}

export default Skills;