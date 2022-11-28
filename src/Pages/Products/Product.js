import React from 'react';

const Product = ({ product }) => {
    const { image, productName, originalprice, date, seller, resalePrice } = product;
    console.log(product);
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
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;