import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Writter.css';

const Writter = (props) => {
    const {image, name, type, age, country, fee} = props.writter;
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (

        <div className="col">
            <div className="card py-3">
                <img src={image} className="card-img-top img-thumbnail rounded-circle mx-auto" alt="{name}" style={{height: "150px", width: "150px"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <table className="table">
                        <tbody className="text-start">
                            <tr>
                                <th>Type</th>
                                <th>:</th>
                                <th>{type}</th>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <th>:</th>
                                <th>{age}</th>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <th>:</th>
                                <th>{country}</th>
                            </tr>
                            <tr>
                                <th>Fee</th>
                                <th>:</th>
                                <th>${fee}</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-danger" onClick={ () => props.handleAddToCart(props.writter)}>{element} Add To Cart</button>
                </div>
            </div>
        </div>


            
    );
};

export default Writter;