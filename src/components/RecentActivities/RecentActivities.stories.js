import React from 'react';
import RecentActivities from './RecentActivities';

export default {
    title: 'Dashboard/RecentActivities',
    component: RecentActivities,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed RecentActivities',
            }
        }
    },
};

const Template = (args) => <RecentActivities />;

export const ArticlesList = Template.bind({});
ArticlesList.storyName = 'RecentActivities';