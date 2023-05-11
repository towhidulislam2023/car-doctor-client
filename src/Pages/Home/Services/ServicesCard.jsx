import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServicesCard = ({ service ,  }) => {
    return (
        <div className="card w-96 bg-base-200 rounded-md">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{service.title}</h2>
                <p className='text-error font-bold text-xl'>Price :{service.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${service._id}`}><FaArrowRight className='text-2xl text-error font-extrabold'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;