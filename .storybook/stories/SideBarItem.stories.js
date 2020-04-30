import React from 'react';
import SideBarItem from '../../src/components/SideBar/SideBarItem/index';
import CenterStorybook from '../../src/components/CenterStorybook/index'

export default {
    component: SideBarItem,
    title: 'SideBarItem',
    excludeStories: /.*Data$/
};

export const Dashboard = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Dashboard" name="Dashboard"/>
        </CenterStorybook>
    );
};

export const Blueprint = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Blueprint" name="Blueprint Manager"/>
        </CenterStorybook>
    );
};

export const Workflow = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Workflow" name="Workflow Monitoring"/>
        </CenterStorybook>
    );
};

export const Insights = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Insights" name="Insights"/>
        </CenterStorybook>
    );
};

export const Toolbox = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Toolbox" name="Toolbox"/>
        </CenterStorybook>
    );
};
export const Settings = () => {
    return (
        <CenterStorybook>
            <SideBarItem icon="Settings" name="Settings"/>
        </CenterStorybook>
    );
};
