import React from 'react';
import Header from '../Shared/Header/Header';
import Nav from '../Shared/Nav/Nav';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Doc House</title>
            </Helmet>
            <Header>
                <Nav></Nav>
            </Header>
        </>
    );
};

export default Home;