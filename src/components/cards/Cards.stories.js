import React from "react";
import Cards, { cardsData } from "./Cards";

export default {
    title: 'Components/Cards',
    component: Cards,
    
};

const Template = (args) => cardsData.map(card => {
    const { component, style } = card;
    return <Cards style={style}>{component}</Cards>;
});

export const CardsView = Template.bind({});

CardsView.storyName = 'Cards';