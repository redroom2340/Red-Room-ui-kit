import React from 'react';
import Notifications from './Notifications';

export default {
    title: 'Dashboard/Notifications',
    component: Notifications,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Notifications',
            }
        }
    },
};

const Template = (args) => <Notifications />;

export const NotificationsList = Template.bind({});
NotificationsList.storyName = 'Notifications';