import React from 'react'
//import {Section} from 'react-scroll'
//import { Element } from 'react-scroll'
//import {IconButton} from '@mui/material/IconButton';
//import { IconButton } from '@mui/material';
import { Button} from "@material-ui/core"
//import {iconbutton} from "@material-ui/icons"
import { Facebook} from "@material-ui/icons"
import {Instagram} from "@material-ui/icons"
import {LinkedIn} from "@material-ui/icons"
import "./About.css"
//import { Button } from 'react-scroll'
const About = () => {
    return (
    

        <div className="topabout" >
            <h1>About</h1>
            <p className="topabout__p">
            SHiNELOGICS have wide range of technical expertise involved developing the next generation software for all sort of essential Business needs. Shinelogics is an IT – Software Technological Service and Products development company . 
            We have startup with Team of 25 to aiming the creativity and innovation in Technology arena . Our advanced ideas are transformed into simplified Technological framework . Shinelogics ‘s straightforward principle to build any Business solutions to be Simple | Customizable | Innovative |Profitable and People friendly … , The Technology focus are .
            Open source |Web and Mobility | Digitalized | Cloud Based and Data analytics .. We are keep delivering the IT services and products for today’s business problem like Service and Customer Management, We have an innovative product called ‘ eOpSys( Entrepreneur Operating System) for Service Sector , Traders and Manufacturer. 
            We have majorly Focused Small and midsize Businesses where they are able to employ minimum budget for their Business operation and development . SHiNELOGICS have wide range of technical expertise involved developing the next generation software for all sort of essential Business needs.
            We are seeking to expand our technological service across the globe , We would needed the capable consultants and Partners to expand all our innovative products and Service. Our signed Partners and consultants authorized to sell the products and service anywhere in the world . Please write us to know info@shinelogics.com
            </p>
            <div className="topabout__align">
                <div className="topcontainer__align1">
                    <h1>Clients</h1>
                    <p>100+</p>
                </div>
                <div className="topcontainer__align2">
                    <h1>Projects</h1>
                    <p>200+</p>
                </div>
                <div className="topcontainer__align3">
                    <h1>Employee</h1>
                    <p>30+</p>
                </div>
            </div>
        <div className="aboutcontainer">
            <div className="aboutcontainer__address">
             <h1>Address</h1>
             <br/>
             <p>3rd Floor, KJ Aditya Towers #L-14,</p>
              <p>Vikram Sarabhai Instronic Estate Phase II, (SRP Tools),</p>
              <p>Thiruvanmiyur, Chennai-600042</p>
              <p>+91-9445033734</p>
              <p>+91-4422431428</p>
              <p>info@shinelogics.com</p>
            </div>
            <div className="aboutcontainer__center">
                <br/>
               <a href="/" alt="/"> <p>JOIN OUR TEAM</p></a>
               <br/>
               <a href="/" alt="/"> <p>F&G</p></a>
               <br/>
               <a href="/" alt="/"> <p>BLOG</p></a>
               <br/>
               <a href="/" alt="/"> <p>PRIVACY</p></a>
               <br/>
               <a href="/" alt="/"> <p>TEAMS OF USE</p></a>
               <br/>
               <a href="/" alt="/"> <p>CONTACT US</p></a>
            </div>
             <div className="aboutcontainer__social">
                 <p>Follow Along with</p>
                 <br/><br/>
                <div className="icons">
             <a href="facebook.com" className="facebookbutton">
                 <Button>
                     <Facebook/>
                 </Button>
             </a>
             
             <a href="facebook.com" className="instagrambutton">
                 <Button>
                     <Instagram/>
                 </Button>
             </a>
          
             <a href="facebook.com" className="linkedinbutton">
                 <Button>
                     <LinkedIn/>
                 </Button>
             </a>
             </div>
            </div>
        </div>
        </div>
    )
}

export default About
