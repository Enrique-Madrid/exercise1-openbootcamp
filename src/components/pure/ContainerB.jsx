import React from 'react';
import PropTypes from 'prop-types';
import { CONTACTS } from '../../models/contacts';


const ContainerB = ({ props }) => {

    return (
        <div>
            <h1>Nombre: { props.nombre } { props.apellido }</h1>
            <h2>Email: { props.email }</h2>
            <h2>{ props.conectado ? 'Contacto En Línea':'Contacto No Disponible' }</h2>
        </div>
    );
};


ContainerB.propTypes = {
    props : PropTypes.instanceOf(CONTACTS)
};


export default ContainerB;
