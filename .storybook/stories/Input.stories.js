import React, { useState } from 'react';
import Input from '../../src/components/Input';

export default {
    component: Input,
    title: 'Input'
};

export const Default = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="text" placeholder="" value={value} onChange={setValue}></Input>
    );
};

export const Username = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="text" placeholder="Username" icon="user" value={value} onChange={setValue}></Input>
    );
};

export const Password = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="password" placeholder="Password" icon="password" value={value} onChange={setValue}></Input>
    );
};

