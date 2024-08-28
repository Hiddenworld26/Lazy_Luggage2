import React, {useState} from 'react';
import './Card.css'
import image_new from './image1.webp';

export default function Card() {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
  
    const handleRemove = () => {
      alert("Item removed from the cart");
    
    };
  
    return (
       <div className="product-card">
         <img
        src={image_new}
        alt="Vintage Rubber Repair Denim"
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-title">VAST CUT</h3>
        <p className="product-description">Vintage Rubber Repair Denim</p>
        <p className="product-size">Size: 34</p>
        <p className="product-price">450 EUR</p>
        <div className="quantity-control">
          <span>Qty: {quantity}</span>
          <button className="qty-button" onClick={handleDecrease}>-</button>
          <button className="qty-button" onClick={handleIncrease}>+</button>
        </div>
        <button className="remove-button" onClick={handleRemove}>Remove</button>
      </div>
     
    </div>
    );
}
