import React from 'react';
import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const ExtraInfo = () => {
    return (
        <div className='h-60 bg-black rounded-md w-full my-10 grid grid-cols-3 text-white justify-center items-center px-10 '>
            <div className='flex items-center gap-5'>
                <div> <FaCalendarAlt className='text-4xl text-error'></FaCalendarAlt></div>
                <div>
                    <p className="text-xl">We are open monday-friday</p>
                    <h1 className="text-2xl">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div> <FaPhoneAlt className='text-4xl text-error'></FaPhoneAlt></div>
                <div>
                    <p className="text-sm">Have a question?</p>
                    <h1 className="text-2xl">+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div> <FaLocationArrow className='text-4xl text-error'></FaLocationArrow></div>
                <div>
                    <p className="text-sm">Need a repair? our address</p>
                    <h1 className="text-2xl">Liza Street, New York</h1>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraInfo;