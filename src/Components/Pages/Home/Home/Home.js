import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OutPartner from '../OurPartner/OutPartner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <OutPartner></OutPartner>
        </>
    );
};

export default Home;