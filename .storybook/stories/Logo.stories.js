import React from 'react';
import Logo from '../../src/components/Logo/index';
import CenterStorybook from '../../src/components/CenterStorybook/index';

export default {
    component: Logo,
    title: 'Logo',
    excludeStories: /.*Data$/
};

export const Default = () => {
    return (
        <CenterStorybook>
            <Logo styleName="logo"></Logo>
        </CenterStorybook>
    );
};
