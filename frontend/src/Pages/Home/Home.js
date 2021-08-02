import React from 'react';
import './Home.css';
import Product from './'

const Home = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product />
            </div>
        </div>
    );
}

export default Home;
