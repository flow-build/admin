import React from 'react';
import Button from '../../src/components/Button';

export default {
    component: Button,
    title: 'Button',
    excludeStories: /.*Data$/
};

const actionData = () => {
    console.log('clicked');
}

export const Default = () => {
    return (
        <Button title="text" onClick={actionData} />
    );
};

export const Red = () => {
    return(
        <Button color="red" title="text" onClick={actionData} />
    );
};

export const Disabled = () => {
    return(
        <Button disabled title="text" onClick={actionData} />
    );
};