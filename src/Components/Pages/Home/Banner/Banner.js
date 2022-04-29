import React from 'react';
import './Banner.css';
import { Carousel, CarouselItem, NavItem } from 'react-bootstrap';
import img1 from '../../../../images/banner/img1.png'
import img2 from '../../../../images/banner/img2.png'
import img3 from '../../../../images/banner/img3.png'

const Banner = () => {

    return (
        <div className='background-img'>
            <div className='container w-75'>
                <div className='text-center'>
                    <h3 className='pt-5'>Welcome to</h3>
                    <h3>Master Computer</h3>
                    <h3 className='mb-0 pb-5'> Warehouse Management System</h3>
                </div>
                <div className='highlighting pb-5'>
                    <div>
                        <img className='img-size' src={img1} alt="" />
                        <h5>User Friendly Software</h5>
                    </div>
                    <div>
                        <img className='img-size' src={img2} alt="" />
                        <h5>Easy Warehouse Management</h5>
                    </div>
                    <div>
                        <img className='img-size' src={img3} alt="" />
                        <h5>Hassle Free Navigation</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;