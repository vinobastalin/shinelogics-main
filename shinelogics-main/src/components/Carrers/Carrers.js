import React from 'react'
import { Element } from 'react-scroll'
//import {Section} from 'react-scroll'
import newcarrers from "../../assets/66712.jpg"
import carnew from "../../assets/coding.jpg"
import carnew1 from "../../assets/modern.jpg"
import hand from "../../assets/handshake.jpg"
//import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
//import { Link } from 'react-router-dom';
//import Form from '../Form/Form'

// import imgs from "../../assets/ang.jpg"
// import imgs2 from "../../assets/reac.jpg"
// import node from "../../assets/node.jpg"
// import python from "../../assets/py.jpg"
// import java from "../../assets/jav.jpg"
// import javascript from "../../assets/javasc.jpg"
// import php from "../../assets/php.jpg"
// import flutter from "../../assets/flutter.jpg"
// import mongodb from "../../assets/mongodb.jpg"
// import sql from "../../assets/sql.jpg"
import "./Carrers.css"
//import Experience from '../Experience/Experience'

//import Form from '../Form/Form'
const Carrers = () => {
    return (
        <Element id="carrers">
            {/* <div className="carrerscontainer">
                <div className="carrerscontainer__head">
                <p>We can offer you a whole new world</p>
            </div>
            <br/><br/>
            <div className="carrerscontainer__para">
                <p>Join us as we create the future and shape millions of lives globally every day!
                    We are transforming our world and looking for others who want to make an impact.
                </p>
            </div>
            <br/>
            <div className="carrerscontainer__para1">
                <p>We are currently hiring ReactJs, Angular, Nodejs developer. If you are intrested Apply the below link</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <div>
                    <button>Explore opportunities</button>
                </div>
            </div>
            </div>
            <div className="carrerscontainer3">
                <h2>Discover Job Opportunities</h2>
                <div className="carrerscontainer3__button">
                    <p id="button1">Fresher &#x2192;</p>
                    <p id="button2">Experience &#x2192;</p>
                </div>
            </div>
            <div className="carrerscontainer2">
                <div className="carrerscontainer2__para">
                    <p>Our employees are using</p>
                </div>
                <div className="carrerscontainer2__img">
                    <div className="carrerscontainer2__img1"><img src={imgs2} alt=""></img></div>
                    <div className="carrerscontainer2__img21"><img src={imgs} alt=""></img></div>
                    <div className="carrerscontainer2__img3"><img src={node} alt=""></img></div>
                    <div className="carrerscontainer2__img4"><img src={python} alt=""></img></div>
                    <div className="carrerscontainer2__img5"><img src={java} alt=""></img></div>
                </div>
                <div className="carrerscontainer2__img">
                    <div className="carrerscontainer2__img1"><img src={javascript} alt=""></img></div>
                    <div className="carrerscontainer2__img21"><img src={php} alt=""></img></div>
                    <div className="carrerscontainer2__img3"><img src={flutter} alt=""></img></div>
                    <div className="carrerscontainer2__img4"><img src={mongodb} alt=""></img></div>
                    <div className="carrerscontainer2__img5"><img src={sql} alt=""></img></div>
                </div>
            </div> */}
            <div className="carrcontainer3">
                <div className="carrcontainer3__content">
                    <h1>Join the team that makes<br/> work fresh</h1>
                    <p>For us, delight isn’t a perk. It’s the point.</p>
                </div>
                <div className="carrcontainer3__pic">
                    <img src={newcarrers} alt=""></img>
                </div>
                </div>
               {/*  <div className="carrcontainer3__next">      
                    <p style={{color:'blue'}}>Apply for job</p>
                    <button>Hire Developers</button>
                </div> */}
                <div className="carrcontainer3card">
                    <div className="carrcontainer3card__1">
                       <img src={carnew} alt="/"></img>
                       <h4>Candidate-Apply for job</h4>
                     
                     
                      <a href='/apply'><button> Apply </button></a>
                       
                    </div>
                    <div className="carrcontainer3card__2">
                       <img src={carnew1} alt="/"></img>
                       <h4>Clients-Hire Developers</h4>
                       
                      <a href='/join'> <button>Join</button> </a>
                       
                    </div>
                    <div className="carrcontainer3card__3">
                       <img src={hand} alt="/"></img>
                       <h4>Clients & Contractor-Book work space</h4>
                       <button>Join</button>
                       
                    </div>
                </div>
        </Element>
    )
}

export default Carrers
