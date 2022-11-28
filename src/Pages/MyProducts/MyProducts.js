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
            <div className="overflow-x-auto my-7">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => handleDelete(product)} className='btn btn-sm btn-error'>delete</button></td>
                                </tr>

                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;