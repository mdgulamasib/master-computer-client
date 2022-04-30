import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
        </>
    );
};

export default Home;