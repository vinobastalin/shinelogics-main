import React from 'react'
import { useState } from "react";
import { Button } from '@material-ui/core'
import folder from "../../assets/folder.jpg"
import thumbs from "../../assets/thumbss.png"
import ReCAPTCHA from "react-google-recaptcha";
import newcarrer from "../../assets/newcarrer.jpg";
import "./Form.css"
import { Link } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    function onChange(value) {
        console.log('Captcha value:', value);
      }

    return (
        <div className="formcontainer">
            <div className="formcontainer__con">
                <h1>Work @US Clients.., Grow your careers big <img src={thumbs} alt="/" /></h1>
                <p>Are you an IT  Expert or Senior Software engineer ?</p>
                <div className="formcontainer__conn">
                    <p> Working  more than 5+ Years in IT Industry ,<br /> But you think the current salary is an average? <br /> and also looking high paid US  Job ?</p>
                </div>
            </div>
           <div className="formflex">
           <div className="formflex1">
                <img src={newcarrer} alt="/"></img>
            </div>
               <div className="formflex2">
            <div className="formcontainer__connn">
               
                <p className="formcon__p"> Then  SHINELOGICS  is the  right  move on... </p>
                <br />
                <p className="formcon__pp">  Please  make  sure the ...</p>
            </div>
            <div className="formcontainer__list">
                <ul>
                    <li>Ready to appear  multiple Technical  discussion with SHINE and clients.</li><br />
                    <li> Ready to work with US client  directly .</li><br />
                    <li> Flexible working hours but 4 hours overlapping the US timing zone.</li><br />
                    <li>Comfortable with Communication in US English over video call with US clients projects.</li><br />
                    <li>No Travel – You’ll be working remotely.</li><br />
                    <li>High salary, long-term, full-time jobs with hassle-free Assured monthly payments.</li>
                </ul>
            </div>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="formcontainer__file">
                    <div className="formcontainer__icon">
                        <img src={folder} alt="/"></img>
                    </div>
                    <div className="formcontainer__div">
                        <div className="formcontainer__sub">
                            <div className="formcontainer__sub1">
                                <p>Recuiters want your resume</p>
                            </div>
                            <br />
                            <div className="formcontainer__sub2">
                                <p>Upload your resume and get connect with Shinelogics</p>
                            </div>
                        </div>
                        <input className="inputfield"
                            type="file"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                         <p className="formcon__para">Format: DOC, DOCx, PDF | file size: 2MB</p>
                        <ReCAPTCHA className="recaptcha"
                            sitekey="6Lez1oQdAAAAAEmj-qnfoE2TP0PmiOoOuXVJwjNu"
                            onChange={onChange}
                        />
                       <Link to="/popup"><Button className='formbuttom' variant='contained'>Submit</Button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
