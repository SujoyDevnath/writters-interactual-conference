import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // destructuring props
    const { cart } = props;

    // counting total fee
    let total = 0;
    for (const writter of cart) {
        total = total + writter.fee;
    }

    return (
        <div className="cart py-3 position-fixed">
            <h4>Writters Added : {cart.length}</h4>
            <h5>Total Cost : ${total}</h5>
            <h4 className="p-3">Writters name : </h4>
            {/* this is writters name list */}
            <ol className="ol">
                {
                    props.cart.map(writter => <li key={writter.id} className="li">
                        <div><img src={writter.image} className="img-fluid image" alt={writter.name} /></div>
                        <div className="text">{writter.name}</div>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Cart;