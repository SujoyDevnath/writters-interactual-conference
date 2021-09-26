import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let total = 0;
    for (const writter of cart) {
        total = total + writter.fee;
    }

    return (
        <div className="shadow py-3 position-fixed" style={{minHeight: '200px', width: '310px', background: 'burlywood'}}>
            <h4>Writters Added : {props.cart.length}</h4>
            <h5>Total Cost : {total}</h5>
            <h4 className="p-3">Writters name : </h4>
            <ol className="ol">
                {
                    props.cart.map(writter => <li key={writter.id} className="li">
                        <div><img src={writter.image} className="img-fluid image" alt="" /></div>
                        <div className="text">{writter.name}</div>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Cart;