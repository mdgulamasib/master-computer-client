import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    const copy = '©'
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <footer className="text-white text-center text-lg-start bg-dark">

                <div className="container p-4">

                    <div className="row mt-4">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Master Computer</h5>
                            <span className="fa-li"><i className="fas fa-home mb-3"></i></span><span  >Sheikhergaon, Ramsree-3301, Habiganj</span><br />
                            <span className="fa-li"><i className="fas fa-envelope"></i></span><span  >contact@mastercomputer.com</span><br />
                            <span className="fa-li"><i className="fas fa-phone"></i></span><span  >+880 1770000000</span>
                        </div>



                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Social Links</h5>
                            <p>Visit our official social profiles</p>

                            <a href="http://www.facebook.com" className='link-style me-2' target='_blank' rel="noopener noreferrer"> <BsFacebook className='fs-5' /></a>
                            <a href="http://www.instagram.com" className='link-style me-2' target='_blank' rel="noopener noreferrer"> <BsInstagram className='fs-5' /></a>
                            <a href="http://www.linkedin.com" className='link-style' target='_blank' rel="noopener noreferrer"> <BsLinkedin className='fs-5' /></a>


                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>9am - 10pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>



                <div className="text-center p-3">
                    <p><small>copyright {copy} {year} <a className='link-style' href="#">mastercomputer.com</a><span> Developed by <a className='link-style' href="#">mdgulamasib.com</a> </span> </small> </p>
                </div>


            </footer >
        </>
    );
};

export default Footer;