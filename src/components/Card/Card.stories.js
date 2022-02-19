import React from 'react';
import Card from './Card';

export default {
    title: 'Dashboard/Card',
    component: Card,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Card',
            }
        }
    },
};

const Template = (args) => <Card />;

export const CardList = Template.bind({});
CardList.storyName = 'Card';