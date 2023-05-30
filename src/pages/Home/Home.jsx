import React from 'react';
import Header from '../Shared/Header/Header';
import Nav from '../Shared/Nav/Nav';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Doc House</title>
            </Helmet>
            <Header>
                <Nav></Nav>
                <Banner></Banner>
            </Header>
        </>
    );
};

export default Home;