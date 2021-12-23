import React from 'react'
import './Header.css';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
//import Link from 'react-scroll'

export const Header = () => {
    return (
        <div className="header5">
            <div className="header_left">
                <div className="img__logo">
                <a href='/'><img src={logo} alt=""></img></a>
                </div>
            </div>
            <div className="header__right">
                <Link to="company" smooth={true} duration={2000}>
                <h4>Org</h4>
                </Link>

                <Link to="service" smooth={true} duration={2000}>
                    <h4>Tech Works</h4>
                </Link>

                {/* <Link to="product" smooth={true} duration={500}>
                    <h4>product</h4>
                </Link> */}

                <Link to="carrers" smooth={true} duration={2000}>
                    <h4>Resources</h4>
                </Link>
                <Link to="aboutus" smooth={true} duration={2000}>
                    <h4>ChatBox</h4>
                </Link>
                {/* <h4>Company</h4>
                <h4>Service</h4>
                <h4>Product</h4>
                <h4>Consultant</h4>
                <h4>About us</h4> */}
            </div>

        </div>
    )
}
export default Header