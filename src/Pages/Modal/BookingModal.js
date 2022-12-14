import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const BookingModal = ({ modalProduct }) => {

    const { image, productName, resalePrice, } = modalProduct;
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const productName = form.productName.value;
        const meetinglocation = form.location.value;

        const booking = {
            name,
            productName,
            image,
            email,
            phone,
            price,
            meetinglocation
        }

        fetch('https://mobile-workshop-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Booking is confirmed");
                }
                else {
                    toast.error(data.message);
                }
            })
        form.reset();
    }

    return (
        <>
            <input type="checkbox" id='bookmodal' className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor='bookmodal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-primary text-center">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <p>Name</p>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        <p>email</p>
                        <input name='email' type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <p>Product name</p>
                        <input name='productName' type="text" defaultValue={productName} readOnly className="input input-bordered w-full" />
                        <p>Price</p>
                        <input name='price' type="text" defaultValue={resalePrice} readOnly className="input input-bordered w-full" />
                        <p>phone</p>
                        <input name='phone' type="text" placeholder="phone number" required className="input input-bordered w-full" />
                        <p>meeting location</p>
                        <input name='location' type="text" placeholder="meeting location" required className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;