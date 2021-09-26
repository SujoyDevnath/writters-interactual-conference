import React from 'react';
import './Writter.css';

const Writter = (props) => {
    console.log(props.writter.name)
    const {image, name, type, age, country, fee} = props.writter
    return (

        <div className="col">
            <div className="card shadow py-3" style={{width: '18rem'}}>
                <img src={image} className="card-img-top rounded-circle mx-auto" alt="..." style={{height: "150px", width: "150px"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>:</td>
                                <td>{type}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>:</td>
                                <td>{age}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>:</td>
                                <td>{country}</td>
                            </tr>
                            <tr>
                                <td>Fee</td>
                                <td>:</td>
                                <td>{fee}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-danger">Add To Cart</button>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>


            
    );
};

export default Writter;