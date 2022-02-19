import React from 'react';
import ButtonsGroup from './ButtonsGroup';

export default {
    title: 'Dashboard/ButtonsGroup',
    component: ButtonsGroup,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed ButtonsGroup',
            }
        }
    },
};

const Template = (args) => <ButtonsGroup />;

export const ButtonsGroupList = Template.bind({});
ButtonsGroupList.storyName = 'ButtonsGroup';