import React, { useEffect, useState } from 'react';
import ServicesCard from './servicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://car-doctor-server-jade.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className="text-xl text-center font-bold text-error">Service</h4>
            <h1 className="text-center font-bold text-4xl">Our Service Area</h1>
            <p className="text-center w-[50%] mx-auto my-10">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <div className='my-10 grid grid-cols-3 gap-3'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;