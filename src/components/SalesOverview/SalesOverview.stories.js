import React from 'react';
import SalesOverview from './SalesOverview';

export default {
    title: 'Dashboard/SalesOverview',
    component: SalesOverview,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed SalesOverview',
            }
        }
    },
};

const Template = (args) => <SalesOverview />;

export const SalesOverviewList = Template.bind({});
SalesOverviewList.storyName = 'SalesOverview';