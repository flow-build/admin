import React from 'react';
import SideBarItem from '../../src/components/SideBar/SideBarItem';

export default {
    component: SideBarItem,
    title: 'SideBarItem'
};

export const Dashboard = () => {
    return (
        <SideBarItem icon="Dashboard" name="Dashboard" to="/" />
    );
};

export const Blueprint = () => {
    return (
        <SideBarItem icon="Blueprint" name="Blueprint Manager" to="/" />
    );
};

export const Workflow = () => {
    return (
        <SideBarItem icon="Workflow" name="Workflow Monitoring" to="/" />
    );
};

export const Insights = () => {
    return (
        <SideBarItem icon="Insights" name="Insights" to="/" />
    );
};

export const Toolbox = () => {
    return (
        <SideBarItem icon="Toolbox" name="Toolbox" to="/" />
    );
};
export const Settings = () => {
    return (
        <SideBarItem icon="Settings" name="Settings" to="/"/>
    );
};
