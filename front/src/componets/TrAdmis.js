// import { useState } from "react";
import React from "react";

const TrAdmins = ({props}) => {
    // {id, tipoDocumento, cedula, nombre, apellido, fechaNacimiento}
    const {id, tipoDocumento, cedula, nombre, apellido, fechaNacimiento} = props
    // console.log(props)
    // console.log(id, tipoDocumento, cedula, nombre, apellido, fechaNacimiento)
    return (
        <tr>
            <td>{id}</td>
            <td>{tipoDocumento}</td>
            <td>{cedula}</td>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{new Date(fechaNacimiento).toDateString()}</td>
            {/* <td>
                <button>
                    actualizar
                </button>
            </td>
            <td>
                <button>
                    delete
                </button>
            </td>
            
             */}
        </tr> 
    )
}
export default TrAdmins