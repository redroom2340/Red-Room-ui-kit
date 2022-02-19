import React from 'react';
import UsersbyCountry from './UsersbyCountry';

export default {
    title: 'Dashboard/UsersbyCountry',
    component: UsersbyCountry,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed UsersbyCountry',
            }
        }
    },
};

const Template = (args) => <UsersbyCountry />;

export const UsersbyCountryList = Template.bind({});
UsersbyCountryList.storyName = 'UsersbyCountry';