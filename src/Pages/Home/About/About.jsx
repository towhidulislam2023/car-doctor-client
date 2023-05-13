import React from 'react';
import parson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className='flex items-center flex-col md:flex-row px-5'>
                <div className='md:w-[50%] md:py-24 '>
                    <div className='relative '>
                        <img className='md:w-[70%] h-full rounded-lg mx-auto' src={parson} alt="" />
                        <img className='w-64 rounded-lg absolute -bottom-10 right-4 border-white border-8' src={parts} alt="" />
                    </div>
                </div>
                <div className=' md:w-[50%] py-24 px-5'>
                    <h3 className="text-xl text-error font-bold">About Us</h3>
                    <div className='my-5'>
                        <h1 className="text-4xl font-bold mb-3">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className='mb-5 w-[75%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <p className='w-[75%]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <button className='btn btn-error text-white my-6 rounded-sm'>Get More Info</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;