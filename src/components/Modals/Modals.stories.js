import React from 'react';
import Modals from './Modals';

export default {
    title: 'Dashboard/Modals',
    component: Modals,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Modals',
            }
        }
    },
};

const Template = (args) => <Modals />;

export const ModalsList = Template.bind({});
ModalsList.storyName = 'Modals';