import React from 'react';

const Product = ({ product }) => {
    const { picture, name, original_price, reseale_price, saler_name } = product;
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w2/4'><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Original Price:{original_price}</p>
                    <p>Resale Price:{reseale_price}</p>
                    <p>Seller Name:{saler_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;