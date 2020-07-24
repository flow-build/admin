import React from 'react';
import Workflow from '../../src/components/Workflow';

export default {
    component: Workflow,
    title: 'Workflow'
};

const listStatus = [
    {
        icon: "Finalizado",
        value: '27'
    },
    {
        icon: "Andamento",
        value: '27'
    },
    {
        icon: "Atencao",
        value: '27'
    },
    {
        icon: "Erro",
        value: '27'
    },
];

export const Default = () => {
    return (
        <Workflow
            name="Nome"
            version={1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            listStatus={listStatus}
        /> // TODO: Alterar o nome das props quando integrar com o back
    );
};

export const Simpler = () => {
    return (
        <Workflow
            name="Nome"
            version={1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
        />
    )
}
