import React, { Suspense } from 'react';

import { addDecorator } from '@storybook/react';

import CenterStorybook from '../src/components/CenterStorybook';

import { MemoryRouter } from 'react-router-dom';

import '../src/index.scss';


addDecorator((storyFn, context) => (
    <Suspense fallback="Loading...">
        <MemoryRouter>
            <CenterStorybook>
                {storyFn(context)}
            </CenterStorybook>
        </MemoryRouter>
    </Suspense>
));
