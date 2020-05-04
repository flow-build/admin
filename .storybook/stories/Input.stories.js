import React from 'react';
import Input from '../../src/components/Input';

export default {
    component: Input,
    title: 'Input'
};

export const Default = () => {
    return (
        <Input type="text" placeholder="text"></Input>
    );
};

export const Username = () => {
    return (
        <Input type="text" placeholder="Username" icon="user"></Input>
    );
};

export const Password = () => {
    return (
        <Input type="password" placeholder="Password" icon="password"></Input>
    );
};

