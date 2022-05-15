import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
function Card(props) {
    // const [cards, setCards] = useState(false);

    // const showSidebar = () => setCards(!cards);

    return (
        <div className="card">
            <div className="product-tomb">
                <img src={props.item.img} className="img-item" alt={props.item.alt} />
            </div>
            <div className="product-details">
                <h4 className="cardh">
                    <a href="">{props.item.title}</a>
                </h4>
                <p>{props.item.info}</p>
                <div className="product-bottom-details">
                    <div className="product-price">{props.item.price}$</div>
                    <div className="product-links">
                        <a href=""><i className="fa fa-heart"/></a>
                        <a href=""><i className="fa fa-shopping-cart"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
