import React, { useContext, useEffect, useState } from 'react';
import chekoutimg from '../../assets/images/checkout/checkout.png';
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const BookingCart = () => {
    const { user, logout } = useContext(authProviderContex)
    const [bookedServices, setBookedServices] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if(!user?.email) return;
        const url = `https://car-doctor-server-jade.vercel.app/bookkedServices?email=${user.email}`
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookedServices(data)
                }
                else {
                    // navigate("/")
                }

            })
    }, [user?.email , navigate])
    console.log(bookedServices);

    const handleConfirm = (id) => {
        console.log(id);
        fetch(`https://car-doctor-server-jade.vercel.app/updatebookingSattus/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const reaminingProduct = bookedServices.filter(bookedservice => bookedservice._id !== id)
                    const updatedProduct = bookedServices.find(updated => updated._id === id)
                    updatedProduct.status = "confirm"
                    const newUpdatedProduct = [updatedProduct, ...reaminingProduct]
                    setBookedServices(newUpdatedProduct)


                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });

                }
            })
            .catch(error => {
                console.error('Error updating booking status:', error);
                // Handle the error as appropriate (e.g. show an error message to the user)
            });
    }
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

                            {bookedServices && bookedServices.map(booked => <BookingRow key={booked._id} bookedServices={bookedServices} setBookedServices={setBookedServices} booked={booked} handleConfirm={handleConfirm} ></BookingRow>)}
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