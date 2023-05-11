import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
const HomeBannar = () => {
    return (
        <div className="carousel w-full my-5 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide4" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg text-white">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide1" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide2" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide3" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide4" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full h-[90vh]" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10">
                    <a href="#slide5" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-error">❯</a>
                </div>
                <div className='absolute pt-44 px-16 w-[50%] bg-gradient-to-r from-black h-full'>
                    <h1 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car Servicing</h1>
                    <p className='text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        
                        <button className="btn btn-error mr-5 rounded font-bold text-lg">Discover More</button>
                        <button className="btn bg-transparent border-white text-white rounded hover:bg-white hover:text-black hover:border-white font-bold text-lg">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBannar;