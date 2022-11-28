import React, { useState } from 'react';

const Product = ({ product, setModalProduct }) => {
    const { image, productName, originalprice, date, seller, resalePrice, email } = product;


    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w2/4'><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Original Price:{originalprice}</p>
                    <p>Resale Price:{resalePrice}</p>
                    <p>Post Date:{date}</p>
                    <p>Seller Name:{seller}</p>
                    <p>Seller eamil:{email}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setModalProduct(product)} htmlFor="bookmodal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;