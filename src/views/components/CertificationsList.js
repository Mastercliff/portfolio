import React from 'react';
import './styles/CertificationsList.scss';
import { BiBadge } from 'react-icons/bi';
import certificationsList from '../../data/CertifiationsList';
import Chip from '../../components/shared-components/Chip';

function CertificationsList(){

    return <div>
        <ul className="certifications-list">
            {certificationsList.map((item, index)=>{
                return <li key={index} className="certifications-list-item">
                   <div className="flex-row-center-left">
                        <BiBadge className="icon" />
                        <div>
                            <h3> {item.title} <Chip className="chip-color">
                                {item.status}    
                                </Chip>
                            </h3>
                            <p>
                                Situação: {item.status}<br/>
                                Data: {item.date} <br/> <br/>
                                Instituição: <b>{item.foudation}</b>
                            </p>
                        </div>
                  </div>
                </li>
            })}
        </ul>
    </div>;
}

export default CertificationsList;