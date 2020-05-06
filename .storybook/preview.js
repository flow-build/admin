import React, { Suspense } from 'react';

import { addDecorator } from '@storybook/react';

import CenterStorybook from '../src/components/CenterStorybook';

import '../src/index.scss';


addDecorator((storyFn, context) => (
    <Suspense fallback="Loading...">
        <CenterStorybook>
            {storyFn(context)}
        </CenterStorybook>
    </Suspense>
));