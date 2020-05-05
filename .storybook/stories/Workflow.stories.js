import React from 'react';
import Workflow from '../../src/components/Workflow';

export default {
    component: Workflow,
    title: 'Workflow'
};

export const Default = () => {
    return (
        <Workflow 
        name="Nome" 
        version="1" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" 
        process="27"
        value1="17"
        value2="15"
        value3="29"
        value4="42" /> // TODO: Alterar o nome das props quando integrar com o back
    );
};


