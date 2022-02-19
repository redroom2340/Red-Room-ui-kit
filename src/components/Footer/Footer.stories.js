import React from 'react';
import Footer from './Footer';

export default {
    title: 'Dashboard/Footer',
    component: Footer,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Footer',
            }
        }
    },
};

const Template = (args) => <Footer />;

export const FooterList = Template.bind({});
FooterList.storyName = 'Footer';