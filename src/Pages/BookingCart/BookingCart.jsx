import React, { useContext, useEffect, useState } from 'react';
import chekoutimg from '../../assets/images/checkout/checkout.png';
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const BookingCart = () => {
    const {user}=useContext(authProviderContex)
    const [bookedServices, setBookedServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookkedServices?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setBookedServices(data))
    }, [])
    console.log(bookedServices);
    return (
        <div className='my-24'>
            <div className='bg-red-50 relative mb-10'>
                <img className='h-[40vh]   w-[100vw]' src={chekoutimg} alt="" />
                <div className='absolute top-0 w-[50%] rounded-lg bg-gradient-to-r from-black h-full pt-28 px-6'>
                    <h1 className='text-6xl mb-5   text-white font-bold '>Cart Details</h1>
                    <h2 className=' text-3xl px-2 text-white '>Product Details</h2>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           
                            {bookedServices && bookedServices.map(booked => <BookingRow key={booked._id} bookedServices={bookedServices} setBookedServices={setBookedServices} booked={booked} ></BookingRow>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default BookingCart;