import React from 'react';
import './styles/Chip.scss';


function Chip(props){
    const { className, children, style } = props;
    return <div className={"chip " + className} style={style}>
        {children}
    </div>
}


export default Chip;