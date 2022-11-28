import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const AddProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const imageKey = process.env.REACT_APP_image_apiKey;
    const [date, setDate] = useState(new Date());
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://mobile-workshop-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [categories])

    const handleAddProduct = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`

        const email = user.email;
        const productName = data.ProductName;
        const condition = data.condition;
        const details = data.details;
        const phone = data.phone;
        const seller = data.seller;
        const originalprice = data.originalprice;
        const resalePrice = data.resalePrice;
        const location = data.location;
        const buyingdate = data.buyingdate;
        const company = data.company;



        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData);
                if (imageData.success) {
                    const product = {
                        image: imageData.data.url,
                        productName,
                        condition,
                        details,
                        date,
                        phone,
                        seller,
                        originalprice,
                        location,
                        buyingdate,
                        company,
                        resalePrice,
                        advertised: 'false',
                        email

                    }
                    fetch('https://mobile-workshop-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            navigate('/products')
                        });
                }
            })
    };


    const { register, handleSubmit } = useForm();
    return (
        <div className='my-5 '>
            <form onSubmit={handleSubmit(handleAddProduct)} className=' grid grid-cols-1 '>
                {/* <Header /> */}
                <input className="input input-bordered input-secondary w-full my-5" {...register("ProductName")} placeholder="Product Name" />
                <input type='number' className="input input-bordered input-secondary w-full my-5" {...register("phone")} placeholder="Phone" />
                <input className="input input-bordered input-secondary w-full my-5" {...register("location")} placeholder="Location" />
                <input className="input input-bordered input-secondary w-full my-5" {...register("price")} placeholder="Price" />
                <input className="input input-bordered input-secondary w-full my-5" {...register("buyingdate")} placeholder="Year of purchase" />
                <input className="input input-bordered input-secondary w-full my-5" {...register("seller")} placeholder="Seller'sname" />
                <input className="input input-bordered input-secondary w-full my-5" {...register("originalprice")} placeholder="Original price" />
                <input type='file' className="input input-bordered input-secondary w-full my-5" {...register("image")} placeholder="Product Name" />



                <select className="input input-bordered input-secondary w-full my-5" {...register("condition", { required: true })}>
                    <option >Excelent</option>
                    <option >Good</option>
                    <option >Bad</option>
                </select>

                <select className="input input-bordered input-secondary w-full my-5" {...register("company", { required: true })}>
                    <option disabled selected >Select Category</option>
                    {categories.map(category => <option value={category.company} key={category._id} >{category.company}</option>)}
                </select>

                {/* <p>{data}</p> */}
                <textarea className="input input-bordered input-secondary w-full my-5"  {...register("details")} placeholder="Details" />
                <input className='btn ' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;