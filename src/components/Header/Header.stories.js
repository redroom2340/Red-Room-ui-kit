import React from 'react';
import Header from './Header';

export default {
    title: 'Dashboard/Header',
    component: Header,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Header',
            }
        }
    },
};

const Template = (args) => <Header />;

export const headerView = Template.bind({});
headerView.storyName = 'Header';