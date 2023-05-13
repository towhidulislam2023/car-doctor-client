import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';
import chekoutimg from '../../assets/images/checkout/checkout.png';
import swal from 'sweetalert';

const Checkout = () => {
    const { user } = useContext(authProviderContex)
    const servicesData = useLoaderData()
    const { _id, price, title, img } = servicesData
    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            date,
            email,
            title,
            price,
            img
        }
        fetch("https://car-doctor-server-jade.vercel.app/bookingServices", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You Added To Cart!",
                        icon: "success",
                        button: "Ok!",
                    });

                }
            });
    }
    return (
        <div>
            <div className='bg-red-50 relative mb-10'>
                <img className='h-[40vh]   w-[100vw]' src={chekoutimg} alt="" />
                <div className='absolute top-0 w-[50%] rounded-lg bg-gradient-to-r from-black h-full pt-28 px-6'>
                    <h1 className='text-6xl mb-5   text-white font-bold '>CheckOut</h1>
                    <h2 className=' text-3xl px-2 text-white '>{title} </h2>
                </div>
            </div>

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} readOnly className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default Checkout;