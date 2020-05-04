import React from 'react';
import Input from '../../src/components/Input';

export default {
    component: Input,
    title: 'Input',
    excludeStories: /.*Data$/
};

const actionData = () => {
    console.log('clicked');
}

export const Default = () => {
    return (
        <Input type="text" placeholder="text" value="text" onChange={actionData}></Input>
    );
};

export const Username = () => {
    return (
        <Input type="text" placeholder="Username" icon="user" value="text" onChange={actionData}></Input>
    );
};

export const Password = () => {
    return (
        <Input type="password" placeholder="Password" icon="password" value="text" onChange={actionData}></Input>
    );
};

