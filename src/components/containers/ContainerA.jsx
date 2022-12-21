import React from 'react';
import { CONTACTS } from '../../models/contacts';
import ContainerB from '../pure/ContainerB';

const ContainerA = () => {

    const contact = new CONTACTS('Juan', 'Perez', 'juanperez24@gmail.com', true);

    return (
        <div>
            <ContainerB props={ contact }></ContainerB>
        </div>
    );
};


export default ContainerA;
