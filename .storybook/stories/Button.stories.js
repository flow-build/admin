import React from 'react';
import Buttom from '../../src/components/Buttom/index';
import CenterStorybook from '../../src/components/CenterStorybook/index';

export default {
    component: Buttom,
    title: 'Button',
    excludeStories: /.*Data$/
};

export const Default = () => {
    return (
        <CenterStorybook>
            <Buttom styleName="btn">text</Buttom>
        </CenterStorybook>
    );
};

export const Red = () => {
    return(
        <CenterStorybook>
            <Buttom styleName="btn btn--red">text</Buttom>
        </CenterStorybook>
    );
};

export const Disabled = () => {
    return(
        <CenterStorybook>
            <Buttom styleName="btn btn--disabled">text</Buttom>
        </CenterStorybook>
    );
};