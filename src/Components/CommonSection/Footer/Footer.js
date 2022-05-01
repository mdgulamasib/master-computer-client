import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillCursorFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    const copy = '©'

    //dynamic year finding
    const today = new Date();
    const year = today.getFullYear();

    return (

        <footer className="text-white text-center text-lg-start background">
            <div className="container pt-3">
                <div className="row mt-2">

                    {/* address on footer */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Master Computer</h5>
                        <span><BsFillCursorFill /></span><span  > Sheikhergaon, Ramsree-3301, Habiganj</span><br />
                        <span><BsFillEnvelopeFill /></span><span  > contact@mastercomputer.com</span><br />
                        <span><BsFillTelephoneFill /></span><span  > +880 1770000000</span>
                    </div>


                    {/* social link on footer */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Social Links</h5>
                        <p>Visit our official social profiles</p>

                        <a href="http://www.facebook.com" className='link-style me-2' target='_blank' rel="noopener noreferrer"> <BsFacebook className='fs-5' /></a>
                        <a href="http://www.instagram.com" className='link-style me-2' target='_blank' rel="noopener noreferrer"> <BsInstagram className='fs-5' /></a>
                        <a href="https://www.linkedin.com/" className='link-style' target='_blank' rel="noopener noreferrer"> <BsLinkedin className='fs-5' /></a>


                    </div>

                    <div className="col-lg-4 col-md-6 mb-0 mb-md-0">
                        <h5 className="text-uppercase mb-4">Opening hours</h5>

                        <table className="table text-center text-white">
                            <tbody className="fw-small">
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>OFF DAYS</td>
                                </tr>
                                <tr>
                                    <td>Sun - Thu:</td>
                                    <td>10am - 8pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            {/* copy right message */}
            <div className="text-center mb-0">
                <span><small>copyright {copy} {year} <a className='link-style' href="#">mastercomputer.com</a></small> </span>
            </div>


        </footer >
    );
};

export default Footer;