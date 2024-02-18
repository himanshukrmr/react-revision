import React from "react";
import './card.css'

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-description">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default Card;
