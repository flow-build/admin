import React from 'react';
import Input from '../../src/components/Input/index';
import CenterStorybook from '../../src/components/CenterStorybook/index';

export default {
    component: Input,
    title: 'Input',
    excludeStories: /.*Data$/
};

export const Default = () => {
    return (
        <CenterStorybook>
            <Input styleName="input-content" type="text" placeholder="text"></Input>
        </CenterStorybook>
    );
};

export const Username = () => {
    return (
        <CenterStorybook>
            <Input styleName="input-content input-content-icon" type="text" placeholder="Username" icon="user"></Input>
        </CenterStorybook>
    );
};

export const Password = () => {
    return (
        <CenterStorybook>
            <Input styleName="input-content input-content-icon" type="password" placeholder="Password" icon="password"></Input>
        </CenterStorybook>
    );
};

