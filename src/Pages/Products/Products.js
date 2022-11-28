import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Modal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();



    const [modalProduct, setModalProduct] = useState(null);

    const handlesetProduct = (product) => {
        setModalProduct(product);
    }

    return (
        <div className='grid grid-cols-2 gap-5 items-center justify-items-center py-5'>
            {
                products.map(product => <Product key={product._id} setModalProduct={setModalProduct} product={product} ></Product>)
            }
            <>
                {modalProduct && <BookingModal modalProduct={modalProduct}  ></BookingModal>}
            </>
        </div>
    );
};

export default Products;