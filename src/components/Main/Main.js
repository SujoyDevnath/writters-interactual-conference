import React, { useEffect, useState } from 'react';

const Main = () => {

    const [writters, setWritters] = useState([]);

    useEffect( () => {
        fetch('./writters.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col-lg-9">
                        <div className="bg-info">first</div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info">second</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;