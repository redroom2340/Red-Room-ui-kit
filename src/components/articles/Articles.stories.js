import React from 'react';
import Articles from './Articles';

export default {
    title: 'Dashboard/Articles',
    component: Articles,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Articles',
            }
        }
    },
};

const Template = (args) => <Articles />;

export const ArticlesList = Template.bind({});
ArticlesList.storyName = 'Articles';