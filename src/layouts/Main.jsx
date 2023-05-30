import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
          <Outlet></Outlet>
          <Footer></Footer>  
        </>
    );
};

export default Main;