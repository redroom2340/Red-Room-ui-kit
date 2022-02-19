import React from 'react';
import Badges from './Badges';

export default {
    title: 'Dashboard/Badges',
    component: Badges,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Badges',
            }
        }
    },
};

const Template = (args) => <Badges />;

export const BadgesList = Template.bind({});
BadgesList.storyName = 'Badges';