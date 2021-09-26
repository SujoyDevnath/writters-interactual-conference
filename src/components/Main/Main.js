import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writter from '../Writter/Writter';
import './Main.css';

const Main = () => {

    // all states are here
    const [writters, setWritters] = useState([]);
    const [cart, setCart] = useState([]);

    // this is useEffect function
    useEffect( () => {
        fetch('./writters.json')
        .then(res => res.json())
        .then(data => setWritters(data))
    }, [])
    
    // handle add to cart function
    const handleAddToCart = (writter) => {
        // checking if the new writter id exists to the oldWritter array
        const writters = cart.filter(oldWritter => oldWritter.id !== writter.id)
        const newCart = [...writters, writter];
        setCart(newCart);
    }

    return (
        <div>
            {/* this is container of both writter and cart component */}
            <div className="container main">
                {/* this is writters container */}
                <div className="writters-container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {
                        writters.map(writter => <Writter 
                            key={writter.id}
                            writter={writter}
                            handleAddToCart={handleAddToCart}
                            ></Writter>)
                    }
                    </div>
                </div>
                {/* this is cart container */}
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;