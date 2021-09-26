import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writter from '../Writter/Writter';
import './Main.css';

const Main = () => {

    const [writters, setWritters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./writters.json')
        .then(res => res.json())
        .then(data => setWritters(data))
    }, [])
    
    const handleAddToCart = (writter) => {

            const writters = cart.filter(oldWritter => oldWritter.id !== writter.id)

        const newCart = [...writters, writter];
        setCart(newCart);
    }

    return (
        <div>
            <div className="container main">
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
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>



            {/* <div className="container px-4">
                <div className="row gx-5">
                    <div className="col-lg-9">
                        <div className="bg-info">first</div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info">second</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Main;