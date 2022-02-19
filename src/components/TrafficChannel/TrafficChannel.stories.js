import React from 'react';
import TrafficChannel from './TrafficChannel';

export default {
    title: 'Dashboard/TrafficChannel',
    component: TrafficChannel,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed TrafficChannel',
            }
        }
    },
};

const Template = (args) => <TrafficChannel />;

export const TrafficChannelList = Template.bind({});
TrafficChannelList.storyName = 'TrafficChannel';