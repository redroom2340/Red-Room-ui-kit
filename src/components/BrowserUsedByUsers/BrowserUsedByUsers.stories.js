import React from 'react';
import BrowserUsedByUsers from './BrowserUsedByUsers';

export default {
    title: 'Dashboard/BrowserUsedByUsers',
    component: BrowserUsedByUsers,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed BrowserUsedByUsers',
            }
        }
    },
};

const Template = (args) => <BrowserUsedByUsers />;

export const BrowserUsedByUsersList = Template.bind({});
BrowserUsedByUsersList.storyName = 'BrowserUsedByUsers';