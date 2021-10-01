import React from 'react';
import Card from '../../components/shared-components/Card';
import skillList from '../../data/SkillsList';
import './styles/SkillsList.scss';

const statusMap = {
    "1" : [
        "status-1 ml-1",
        "status ml-1",
        "status ml-1",
        "status ml-1",
    ],
    "2" : [
        "status-1 ml-1",
        "status-2 ml-1",
        "status ml-1",
        "status ml-1",
    ],
    "3" : [
        "status-1 ml-1",
        "status-2 ml-1",
        "status-3 ml-1",
        "status ml-1",
    ],
    "4" : [
        "status-1 ml-1",
        "status-2 ml-1",
        "status-3 ml-1",
        "status-4 ml-1",
    ],
}

function SkillsList (){
    return <Card>
        <div className="skill-list">
            {skillList.map((item, index)=>{
                return <div className="skill-list-item">
                    <div className="skill-color"></div>
                    <span>
                        {item.name}
                    </span>
                    {statusMap[item.status].map((item, index) =>{ 
                        console.log(item);
                        return <div className={item}> </div>;
                    })}
                </div>
            })}
        </div>
    </Card>
}

export default SkillsList;