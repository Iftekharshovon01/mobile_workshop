import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='grid grid-cols-2 gap-5 items-center justify-items-center py-5'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;