import React from 'react';
import NewUsers from './NewUsers';

export default {
    title: 'Dashboard/NewUsers',
    component: NewUsers,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed NewUsers',
            }
        }
    },
};

const Template = (args) => <NewUsers />;

export const NewUsersView = Template.bind({});
NewUsersView.storyName = 'NewUsers';