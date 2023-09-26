import React from 'react';
import '../styles/views/Experiences.scss';
import ExperiencesList from './components/ExperiencesList';


function Experiences (){
    return <div className="experiences">
        <h2>
            <span className="hashtag">#</span> Experiências
        </h2>
        <ExperiencesList />
    </div>
}

export default Experiences;