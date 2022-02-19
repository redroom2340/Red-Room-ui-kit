import React from 'react';
import SessionsbyDevice from './SessionsbyDevice';

export default {
    title: 'Dashboard/SessionsbyDevice',
    component: SessionsbyDevice,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed SessionsbyDevice',
            }
        }
    },
};

const Template = (args) => <SessionsbyDevice />;

export const SessionsbyDeviceList = Template.bind({});
SessionsbyDeviceList.storyName = 'SessionsbyDevice';