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

            </div>
        </>
    );
};

export default BookingModal;