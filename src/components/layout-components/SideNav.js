import { Component, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import navMenuElements from "./SideNavConfig";
import './styles/SideNav.scss';


function SideNav (props){
    const [state, setState] = useState({ menuElements : navMenuElements});
    const sections = useScrollSections();

    function toggleMenuItem(index){
        const elements = state.menuElements;
        const selectedEl = elements.findIndex((value)=> value.selected === true);
        elements[selectedEl].selected = false;

        elements[index].selected = true;

        setState({
            menuElements: elements,
        });
    }
    const { menuElements } = state;
    const { history, match} = props;
    return (
        <div className="side-nav">
            <div className="container">
            <img className="circle-image" src="photo.jpg" alt="circle-image"/>
                <div className="header">
                    <div> 
                    <div className="name-title"> 
                        Elias Sousa Garrido 
                    </div>
                    <div className="subtile">Desenvolvedor Full-Stack</div> 
                    </div>
                </div>

                <ul className="menu-list">
                {menuElements.map((item, index) =>{
                    return <li key={item.title.toLowerCase()} className={item.selected ? "active": ""} onClick={()=>{
                        sections[index].onClick();
                        toggleMenuItem(index);
                    }}> 
                        <item.icon className="menu-item-icon" />
                        <span> {item.title} </span> 
                        </li>;
                })}
                </ul>
            </div>
        </div>
    )
}

export default SideNav;