import React from 'react';
import HeaderBar from '../../src/components/HeaderBar/index';

export default {
    component: HeaderBar,
    title: 'HeaderBar',
    excludeStories: /.*Data$/
};

export const Default = () => {
    return (
        <HeaderBar />
    );
};
