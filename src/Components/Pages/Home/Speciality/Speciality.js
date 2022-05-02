import React from 'react';
import { Link } from 'react-router-dom';
import './Speciality.css'

const Speciality = () => {
    return (
        <div className='container my-5'>
            <div className='row d-flex  align-items-center'>
                <div className='col-sm-4'>
                    <h3 className=''>WELCOME TO <br /><span className='custom-color'> MASTER COMPUTER</span></h3>
                    <p className='text '><strong>Master Computer</strong> is one of the well-known leading retail tech product seller company in Bangladesh. We are committed to provide 100% authentic product to our customers. That is why we are dealing business with top brands from all over the world and collecting products directly from company warehouse. Customer happiness is our first priority.</p>
                    <Link to='/about' className='btn-design text-decoration-none text-white'>About Us</Link>
                </div>
                <div className='row g-3 text-center col-sm-8 flexing'>
                    <div className='col-sm-5 custom-box'>
                        <h6>Cost Saving</h6>
                        <p>Save your money with our logistics service taking advantage of quickly delivery.</p>
                    </div>
                    <div className='col-sm-5 custom-box'>
                        <h6>Secure Services</h6>
                        <p>
                            We provide security of your delivery. You can use our online tracking system to check where your cargo is.</p>
                    </div>
                    <div className='col-sm-5 custom-box'>
                        <h6>Cargo express</h6>
                        <p>Our educated couriers deliver your cargo in the right place at the right time safely.</p>
                    </div>
                    <div className='col-sm-5 custom-box'>
                        <h6>Proven Experience</h6>
                        <p>Thousands of happy clients, hundreds of permanent customers are the result of our work.</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Speciality;