import React from 'react'
import './Dummy.css';

import logo from '../../assets/logo.png'
//import Link from 'react-scroll'

export const Dummy = () => {
    return (
        <div className="header">
            <div className="header_left">
                <div className="img__logo">
                <a href='/'><img src={logo} alt=""></img></a>
                </div>
            </div>
        </div>
    )
}
export default Dummy
