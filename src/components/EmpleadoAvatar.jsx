import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const EmpleadoAvatar = ({pic, fullName}) => {
    return (
        <div>
            <img className='avatar' src={pic} alt= {`foto de ${fullName}`} />
        </div>
    );
};

export default EmpleadoAvatar;