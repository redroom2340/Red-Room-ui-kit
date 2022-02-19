import React from 'react';
import Accordions from './Accordions';

export default {
    title: 'Dashboard/Accordions',
    component: Accordions,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Accordions',
            }
        }
    },
};

const Template = (args) => <Accordions />;

export const AccordionsList = Template.bind({});
AccordionsList.storyName = 'Accordions';