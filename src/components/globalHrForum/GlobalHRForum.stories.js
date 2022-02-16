import React from 'react';
import GlobalHRForum from './GlobalHRForum';

export default {
    title: 'Dashboard/Global HR Forum',
    component: GlobalHRForum,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Global HR Forum',
            }
        }
    },
};

const Template = (args) => <GlobalHRForum />;

export const GlobalHRForumView = Template.bind({});
GlobalHRForumView.storyName = 'Global HR Forum';