import React from 'react';
import { Element } from 'react-scroll';
import banner from "../../assets/servicebanner.jpeg";
import mobile from "../../assets/mobileapp.jpg";
import tech from "../../assets/tech.jpg";
import web from "../../assets/web1.jpg";
import erp from "../../assets/erpn.png";
import ecom from "../../assets/ecom.jpg";


import './Servicess.css'
const Sevicess = () => {
    return (
        <Element id="service">
            <div className="header2">
            <div className="texts2">
                {/* <h1 className='h1'>OUR SERVICES</h1>
                <h3 className='h3'>Building future-ready enterprises by leveraging digital technologies and trends to harness limitless
                opportunities.</h3> */}
            </div>
            <img src={banner} alt="banner" class="banner1"></img>
            </div>
            <div className="contain2">
                <div className="content2">   
                    <div className="container3">
                        <h1 className='h1'>Mobile App Development</h1>
                        <img src={mobile} alt="Mobile" className="banner2"></img>
                    </div>
                    <br></br>    
                    <div className="container3">
                        <h1 className='h1'>Web Application</h1>
                        <img src={web} alt="Mobile" className="banner2"></img>
                    </div>
                    <br></br>
                    <div className="container3">
                        <h1 className='h1'>Technology Consulting</h1>
                        <img src={tech} alt="Mobile" className="banner2"></img>
                    </div>
                    <br></br>
                </div>
                <div class="content1"><br></br>
                <h1 className='h1'>Products</h1>
                <div class="hhh2">
                    <img src={erp} alt="erp"></img>
                    <a href='/erp'>ERP</a>
                </div>
                <br></br>
                <div class="hhh2">
                    <img src={ecom} alt="ecom"></img>
                    <a href='/ecommerce'>E-Commerce</a>
                </div>
                </div>
            </div>         
        </Element>
    )
}

export default Sevicess


