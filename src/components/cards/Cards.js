import React from "react";
import PropTypes from "prop-types";
import "./cards.scss";

export const cardsData = [
    {
        component: <h3>Card 1</h3>,
        style: {
            width: "auto",
            height: "200px"
        }
    }, {
        component: <h3>Card 2</h3>,
        style: {
            width: "50%",
            height: "100px"
        }
    }, {
        component: <h3>Card 3</h3>,
        style: {
            width: "400px",
            height: "400px"
        }
    },
    {
        component: <h3>Card 4</h3>,
        style: {
            width: "auto",
            height: "400px"
        }
    }
];

export default function Cards({
    className,
    style,
    children
}) {
    return <div className={`a-cards${className ? ` ${className}` : ''}`} style={style}>{children}</div>
};

Cards.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.element
};
