import React from 'react';
import './styles/Card.scss';

function Card (props){
    const {title, titleIcon, children, className} = props;

    return <div className={"card " + className}>
       {
           title === undefined ? null : <h2>
            {titleIcon} {title}
            </h2>
       } 
        <span className="text-content">
        {children}
        </span>
    </div>;
}

export default Card;