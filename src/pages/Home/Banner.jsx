import React from 'react';
import ImageBox from './ImageBox';

const Banner = () => {
    return (
        <div className="hero text-white">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse  w-full justify-between items-center relative md:static">
                <div className='md:w-1/2'>
                    <ImageBox></ImageBox>
                </div>
                <div className='md:w-1/2 text-center md:text-left'>
                    <h1 className="md:text-5xl text-3xl font-bold">Your Best Medical Help Center</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className="btn text-white bg-[#F7A582] hover:bg-red-400">All Services</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;