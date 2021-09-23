import React from 'react';
import Card from '../../components/shared-components/Card';
import skillList from '../../data/SkillsList';
import './styles/SkillsList.scss';

const statusMap = {
    "1" : [
        <div className="status-1 ml-1"> </div>,
        <div className="status ml-1"> </div>,
        <div className="status ml-1"> </div>
    ],
    "2" : [
        <div className="status-1 ml-1"> </div>,
        <div className="status-2 ml-1"> </div>,
        <div className="status ml-1"> </div>
    ],
    "3" : [
        <div className="status-1 ml-1"> </div>,
        <div className="status-2 ml-1"> </div>,
        <div className="status-3 ml-1"> </div>
    ],
}

function SkillsList (){
    return <Card>
        <div className="skill-list">
            {skillList.map((item, index)=>{
                return <div className="skill-list-item">
                    <span>
                        {item.name}
                    </span>
                    {statusMap[item.status].map((item, index) =>{ 
                        return item;
                    })}
                </div>
            })}
        </div>
    </Card>
}

export default SkillsList;