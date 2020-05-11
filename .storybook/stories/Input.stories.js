import React, { useState } from 'react';
import Input from '../../src/components/Input';

export default {
    component: Input,
    title: 'Input'
};

export const Default = () => {
    const [value, setValue] = useState('');
    return (
        <Input elementType="input" type="text" placeholder="" value={value} onChange={setValue}></Input>
    );
};

export const Username = () => {
    const [value, setValue] = useState('');
    return (
        <Input elementType="input" type="text" placeholder="Username" icon="User" value={value} onChange={setValue}></Input>
    );
};

export const Password = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="password" placeholder="Password" icon="Password" value={value} onChange={setValue}></Input>
    );
};

export const Search = () => {
    const [value, setValue] = useState('');
    return (
        <Input elementType="input" icon="Search" placeholder="" value={value} onChange={setValue}></Input>
    );
};

export const Textarea = () => {
    const [value, setValue] = useState('');
    return (
        <Input elementType="textarea" placeholder="" value={value} onChange={setValue}></Input>
    );
};

export const Select = () => {
    const [value, setValue] = useState('');
    const options = ['1', '2', '3', '4', '5'];
    return (
        <Input options={options} elementType="select" placeholder="" value={value} onChange={setValue}></Input>
    );
};


