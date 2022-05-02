import React from 'react';
import './Banner.css';
import img1 from '../../../../images/banner/img1.jpg'
import img2 from '../../../../images/banner/img2.jpg'
import img3 from '../../../../images/banner/img3.jpg'
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Elitebook Laptop</h3>
                    <p>A sophisticated choice,  combining industry-leading security with beauty, durability, and funcationality.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>HP + NVIDIA RTX</h3>
                    <p>See how NVidia RTXTM graphics powers Z by HP Workstation for ultimate Creative workflow.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>HP Mobile Workstation</h3>
                    <p>For technical and creative professionals who need ultimate performance on-the-go.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;