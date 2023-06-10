import React from 'react';
import './Product.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt={name} />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer : {seller}</p>
                <p className='product-rating'>Rating : {ratings}</p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='add-to-cart-button'>Add to Cart <BsFillCartPlusFill /></button>
        </div>
    );
};

export default Product;