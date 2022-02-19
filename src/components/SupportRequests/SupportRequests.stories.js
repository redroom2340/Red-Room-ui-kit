import React from 'react';
import SupportRequests from './SupportRequests';

export default {
    title: 'Dashboard/SupportRequests',
    component: SupportRequests,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed SupportRequests',
            }
        }
    },
};

const Template = (args) => <SupportRequests />;

export const SupportRequestsList = Template.bind({});
SupportRequestsList.storyName = 'SupportRequests';