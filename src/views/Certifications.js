import React from 'react';
import '../styles/Certifications.scss';
import CertificationsList from './components/CertificationsList';


function Certifications (){
    return <div className="certifications">
        <h2>
            <span className="hashtag">#</span> Certificações
        </h2>
        <CertificationsList/>
    </div>
}

export default Certifications;