import React from 'react';
import './Layout.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import SlidingNav from '../../components/SlidingNav/SlidingNav';
import { Consumer } from '../../components/Context/Context';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideLinks from '../../components/SideLinks/SideLinks';

const Layout = (props) => {
    return (
        <Consumer>
            {({
                navIsOpen,
                navLinks,
                navHandler,
                isLanding,
                toggleModals,
                // loginModal,
                // signupModal,
                // loginHandler,
            }) => {

                return <>
                    {/* {(loginModal) ? <Login ok={loginHandler} close={toggleModals} /> : null}
                    {(signupModal) ? <SignUp ok={loginHandler} close={toggleModals} /> : null} */}
                    
                    {(navIsOpen) ? <Backdrop clicked={navHandler} /> : null}
                    <SlidingNav />
                    
                    <Header />
                    
                    {props.children}

                    <Footer />
                    
                    <SideLinks />
                </>
            }}
        </Consumer>
    )
}

export default Layout;