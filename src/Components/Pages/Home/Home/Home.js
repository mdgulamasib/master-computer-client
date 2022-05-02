import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OutPartner from '../OurPartner/OutPartner';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Speciality></Speciality>
            <Items></Items>
            <OutPartner></OutPartner>
        </>
    );
};

export default Home;