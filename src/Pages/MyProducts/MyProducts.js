import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const MyProducts = () => {

    const [products, setproducts] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://mobile-workshop-server.vercel.app/products/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })
    }, [user?.email, products]);

    const handleDelete = product => {
        fetch(`https://mobile-workshop-server.vercel.app/products/${product?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`deleted ${product.name} successfully`);
                }

            })
    }
    if (loading) {
        return <>
            <h2>loading data</h2>
        </>
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>My Products</h3>

        </div>
    );
};

export default MyProducts;