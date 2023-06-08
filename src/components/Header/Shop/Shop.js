import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>This is for products</h2>
            </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;