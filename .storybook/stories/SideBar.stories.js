import React from 'react';
import SideBar from '../../src/components/SideBar/index';

export default {
    component: SideBar,
    title: 'SideBar',
    excludeStories: /.*Data$/
};

export const Default = () => {
    return (
        <SideBar />
    );
};
