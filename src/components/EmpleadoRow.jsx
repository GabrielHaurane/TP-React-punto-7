import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';
const EmpleadoRow = ({empleado}) => {
    return (
        <>
        <Card className='w-75 mb-2'>
            <Card.Body>
                <div className='container'>
                    <div className='w-100 row'>
                        <div className='w-25'>
                            <EmpleadoAvatar
                            key={empleado.fullName}
                            fullName={empleado.fullName}
                            pic={empleado.pic}
                            ></EmpleadoAvatar>
                        </div>
                    <div className='w-75'>
                        
                            <h3>{empleado.fullName}</h3>
                            <span>{empleado.title}</span>
                            <Badge bg="info" className='ms-3'>{empleado.department}</Badge>
                        
                    </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </>
    );
};

export default EmpleadoRow;