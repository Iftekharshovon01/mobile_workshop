import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const MyOrders = () => {

    const [bookings, setBooking] = useState([]);
    // const [isLoading, setLoading] = useState({});
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://mobile-workshop-server.vercel.app/booking/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
            })
    }, [user?.email, bookings]);
    // if (loading) {
    //     return <>
    //         <h2>loading data</h2>
    //     </>
    // }

    return (

        <div>
            <h3 className='text-3xl font-semibold text-center'>My Orders</h3>
            <div className="overflow-x-auto my-7">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.productName}</td>
                                    <td>{booking.price}</td>
                                </tr>

                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;