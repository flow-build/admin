import React, { useState } from 'react';
import Input from '../../src/components/Input';

export default {
    component: Input,
    title: 'Input',
    excludeStories: /.*Data$/
};

export const Default = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="text" placeholder="text" value={value} setValue={setValue}></Input>
    );
};

export const Username = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="text" placeholder="Username" icon="user" value={value} setValue={setValue}></Input>
    );
};

export const Password = () => {
    const [value, setValue] = useState('');
    return (
        <Input type="password" placeholder="Password" icon="password" value={value} setValue={setValue}></Input>
    );
};

