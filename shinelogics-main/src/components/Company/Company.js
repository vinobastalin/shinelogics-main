import React from 'react'
import { Element } from "react-scroll"
import customer from '../../assets/customer.png'
import secure from '../../assets/secure.png'
import responsive from '../../assets/responsive.png'
import browse from '../../assets/browser.png'
import design from '../../assets/design.png'
import test from '../../assets/test1.png'
import multi from '../../assets/multi.png'
import user from '../../assets/user.png'
//import {Section} from 'react-scroll'
//import company from '../../assets/permanent.jpg'
//import cmompany2 from '../../assets/permanent2.jpg'
//import consulting from '../../assets/consulting2.jpg'
//import grocery from '../../assets/grocery.jpg'
import './Compnay.css'

const Company = () => {
    return (
  
      <Element id="company">
        <div>
        <div className='servbody'>
        <div class="servcontainer">
        <div class="servcard">
            <div class="slide slide1">
                <div class="servcontent">
                    <div class="icon1">

                        ERP

                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="servcontent">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>
        </div>     
    </div>

    <div class="servcontainer">
        <div class="servcard">
            <div class="slide slide1">
                <div class="servcontent">
                    <div class="icon2">

                        E-Commerce

                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="servcontent">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>
        </div>     
    </div>

    <div class="servcontainer">
        <div class="servcard">
            <div class="slide slide1">
                <div class="servcontent">
                    <div class="icon1">

                        Elearning

                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="servcontent">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>
        </div>     
    </div>

    <div class="servcontainer">
        <div class="servcard">
            <div class="slide slide1">
                <div class="servcontent">
                    <div class="icon2">

                        IOT
                        
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="servcontent">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>
        </div>     
    </div>
    
    </div>
            {/* <div className="companycontainer">
            <div className='img'>
            <img src={company} className='image' alt="/" height="150px" width="150px" ></img>
            </div>
            <div className='img'>
            <img src={company} className='image' alt="/" height="150px" width="150px"></img>
            </div>
            <div className='img'>
            <img src={company} className='image' alt="/" height="150px" width="150px"></img>
            </div>
            <div className='img'>
            <img src={company} className='image' alt="/" height="150px" width="150px"></img>
            </div>                 
            </div> */}
            {/* <div className="companycontainer2">
                <div className="companycontainer__content2">
                <p>Shinelogics ‘s straightforward principle to build any Business solutions to be Simple | Customizable | Innovative |Profitable and People friendly … , The Technology focus are . Open source |Web and Mobility | Digitalized | Cloud Based and Data analytics ..
                </p>
            </div> 
            <div className="companycontainer__image2">
                <img src={company} alt="/"></img>
            </div>
        </div>
        <div className="companycontainer3"> 
            <div className="companycontainer__image3">
                <img src={company} alt="/"></img>
            </div>
            <div className="companycontainer__content3">
                <p>We are keep delivering the IT services and products for today’s business problem like Service and Customer Management, We have an innovative product called ‘ eOpSys( Entrepreneur Operating System) for Service Sector , Traders and Manufacturer. We have majorly Focused Small and midsize Businesses where they are able to employ minimum budget for their Business operation and development .
                </p>
            </div> */}
        </div>
            {/* */}

         <div className="headingafter">
             <h1> What's new at Shinelogics</h1>
         </div>
           <div className="containerflip">
            <div className="flipcard">
                <div className="flipcard__inner">
                  <div className="flipcard__front">
                    <img src={ customer } alt=''></img>
                    <h4>CUSTOMER SUPPORT</h4>
                </div>
                <div class="flipcard__back">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard">
                <div className="flipcard__inner">
                  <div className="flipcard__front">
                  <img src={secure} alt=''></img>
                  <h4>SECURED</h4>
                </div> 
                <div class="flipcard__back">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard">
                <div className="flipcard__inner">
                  <div className="flipcard__front">
                  <img src={design} alt=''></img>
                  <h4>DESIGN & DEVELOPMENT</h4>
                </div> 
                <div class="flipcard__back">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard">
                <div className="flipcard__inner">
                  <div className="flipcard__front">
                  <img src={user} alt=''></img>
                  <h4>SIMPLE AND USER FRIENDLY</h4>
                </div> 
                <div class="flipcard__back">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            
            </div>
            

            {/* 2nd line */}


            <div className="containerflip">
            <div className="flipcard1">
                <div className="flipcard__inner1">
                  <div className="flipcard__front1">
                      <br></br>
                  <img src={test} alt=''></img>
                  <h4>TEST & DELIVER</h4>
                </div>
                <div class="flipcard__back1">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard1">
                <div className="flipcard__inner1">
                  <div className="flipcard__front1">
                  <img src={multi} alt=''></img>
                  <h4>MULTILANGUAGE READY</h4>
                </div> 
                <div class="flipcard__back1">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard1">
                <div className="flipcard__inner1">
                  <div className="flipcard__front1">
                  <div class='icon20'>
                  <img src={responsive} alt=''></img>
                  <h4>WEB AND RESPONSIVE</h4>
                    </div>
                </div> 
                <div class="flipcard__back1">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            <div className="flipcard1">
                <div className="flipcard__inner1">
                  <div className="flipcard__front1">
                      <br></br>
                  <img src={browse} alt=''></img>
                  <h4>WEB AND RESPONSIVE</h4>
                </div> 
                <div class="flipcard__back1">
                  <p>Lorem ipsum dolor sit amet. Sed consequatur voluptatem qui ipsum nihil ex laborum eveniet. Et sint nostrum ut quia illo id inventore ullam eum nobis rerum et excepturi assumenda?</p>
                  <a href="/">
                      view more
                  </a>
                </div>
                </div>
            </div>
            
            </div>
            
           {/*  <div className="underhead">
            <div className="underhead1">
                 <p>Carrers Consulting</p>
            </div>
            <div className="underhead2">
                 <p>E-Commerce product</p>
            </div>
            </div> */}
        </Element>
    )
}

export default Company


/* <Element className="companycontainer" id="company">
                <div className="companycontainer__image">
                   <img src={company} alt="/"></img>
                </div>

            </Element> */