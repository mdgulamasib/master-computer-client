import React from 'react';
import './OurPartner.css';
import hp from '../../../../images/supplierLogo/hpLogo.png'
import apple from '../../../../images/supplierLogo/appleLogo.png'
import dell from '../../../../images/supplierLogo/delllogo.png'

const OutPartner = () => {
    return (
        <div>
            <div className="container-fluid w-50 text-center">
                <h3 className='fw-bold'>SUPPLY PARTNER</h3>
                <h6>OUR SUPPLIERS ARE INTERNATIONAL TOP TECH BRANDS.</h6>
                <div className="row my-5">
                    <div className="col-sm-4">
                        <a href="https://www.hp.com/" target='_blank' rel="noopener noreferrer"> <img src={hp} className="custom-size" alt="" /></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://www.apple.com/" target='_blank' rel="noopener noreferrer"> <img src={apple} className="custom-size" alt="" /></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://www.dell.com/en-us" target='_blank' rel="noopener noreferrer"> <img src={dell} className="custom-size" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutPartner; <h2>Our Partner</h2>