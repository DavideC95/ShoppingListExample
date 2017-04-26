import React, {Component} from 'react';

const Product = (props) => (
    <div>
                <h3>{props.product}</h3>
                <h4>{props.price} Euro</h4>
                <h5> Totale {props.totale}</h5>
            </div>
);

export default Product;