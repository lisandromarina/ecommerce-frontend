import React from 'react';
import Router from "../Router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from '../../utils/ScrollToTop';
import Sidebar from '../Sidebar';

function LayoutComponent(props) {
    const {
        isSidebarOpen,
        handleOnCloseSidebar,
        handleOnOpenSidebar
    } = props
    return (
        <Sidebar isOpen={isSidebarOpen} handleClose={handleOnCloseSidebar}>
            <ScrollToTop />
            <Navbar handleOnOpenSidebar={handleOnOpenSidebar} isSidebarOpen={isSidebarOpen}/>
            <Router />
            <Footer />
        </Sidebar>
    )
}

export default LayoutComponent
