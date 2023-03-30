import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';




const Layout = () => {
    return (
        <div className="Layout"> 
            <Header/>
            
            <Outlet/>

            <Footer/>
            
        </div>
    );
};

export default Layout;