import React from 'react';
import EmpleadoRow from './EmpleadoRow';
const EmpleadoList = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "../../public/empleado.jpeg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "../../public/empleado.jpeg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "../../public/empleado.jpeg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "../../public/empleado.jpeg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "../../public/empleado.jpeg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "../../public/empleado.jpeg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "../../public/empleado.jpeg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "../../public/empleado.jpeg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "../../public/empleado.jpeg" },
]

    return (
        <div className='row justify-content-center'>
            {empleados.map((empleado, empleadoKey)=>(
                <EmpleadoRow key={empleadoKey} empleado={empleado}></EmpleadoRow>
            ))}
        </div>
    );
};

export default EmpleadoList;