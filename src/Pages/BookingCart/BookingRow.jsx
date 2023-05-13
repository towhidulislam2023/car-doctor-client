import React, { useState } from 'react';
import swal from 'sweetalert';

const BookingRow = ({ booked, bookedServices, setBookedServices, handleConfirm, }) => {
    const { _id, title, img, price, date, status } = booked

    const handelDelletProduct = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://car-doctor-server-jade.vercel.app/deletebookings/${id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingProduct = bookedServices.filter(bookedservice => bookedservice._id !== id)
                                setBookedServices(remainingProduct)
                                swal("Poof! Your order has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal("Ok!");
                }
            });
    }
    return (
        <tr>
            <th>
                <button onClick={() => handelDelletProduct(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* <label className='mr-3'>
                    <input type="checkbox" className="checkbox" />
                </label> */}

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-24 h-24 ">
                            <img src={img} className='rounded-sm' alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{"$" + " " + price}</td>
            <td>{date ? date : "Now"}</td>
            <th>
                {
                    status === "confirm" ? <button className="btn btn-success">Success</button> : <button onClick={() => handleConfirm(_id)} className="btn btn-error">Pending</button>
                }


            </th>
        </tr>
    );
};

export default BookingRow;