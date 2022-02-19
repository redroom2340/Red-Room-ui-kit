import React from 'react';
import SalesRevenue from './SalesRevenue';

export default {
    title: 'Dashboard/SalesRevenue',
    component: SalesRevenue,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed SalesRevenue',
            }
        }
    },
};

const Template = (args) => <SalesRevenue />;

export const SalesRevenueList = Template.bind({});
SalesRevenueList.storyName = 'SalesRevenue';