import React from 'react';
import Transaction from './Transaction';

export default {
    title: 'Dashboard/Transaction',
    component: Transaction,
    parameters: {
        docs: {
            description: {
                component: 'Dashboaed Transaction',
            }
        }
    },
};

const Template = (args) => <Transaction />;

export const TransactionList = Template.bind({});
TransactionList.storyName = 'Transaction';