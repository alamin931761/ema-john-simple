import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // total price and shipping charge
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + (product.shipping * product.quantity);
    }

    // tax 
    const tax = parseFloat((total * 0.1).toFixed(2));

    // grand total
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='grand-total'>Grand Total: ${grandTotal}</p>

            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;