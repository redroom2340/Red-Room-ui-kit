import React from 'react';
import Carousels from './Carousels';

export default {
    title: 'Dashboard/Carousels',
    component: Carousels,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Carousels',
            }
        }
    },
};

const Template = (args) => <Carousels />;

export const ArticlesList = Template.bind({});
Carousels.storyName = 'Carousels';