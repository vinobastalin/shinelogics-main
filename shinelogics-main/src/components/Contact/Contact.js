import React from 'react'
import { Element } from 'react-scroll'
import contact from '../../assets/contactimgss.jpg'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {
    const [firstname, setFirstname] = useState("");
    /* const [lastname, setLastname] = useState(""); */
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [query, setQuery] = useState("");
    /*const [state, setState] = useState(""); */

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Element id="aboutus">
            <h1 className='h1'>Contact Us</h1>
        <div className="contactcontainer">
            <div className="contactimage">
                <img src={contact} alt="/"></img>
            </div>
            <div className="contactform">
                <div className="contactform__card">
            <form onSubmit={handleSubmit}>
                <p>For Enquiries</p>
            <input className="inputfield"
                            type="text"
                            value={firstname}
                            placeholder ="Enter your Username"
                            onChange={(e) => setFirstname(e.target.value)}
                        /><br/>
                        <input className="inputfield"
                            type="email"
                            value={email}
                            placeholder ="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        /><br/>
                        <input className="inputfield"
                            type="number"
                            value={phone}
                            placeholder ="Enter your phonenumber"
                            onChange={(e) => setPhone(e.target.value)}
                        /><br/>
                        <textarea className='inputfield1' value={query}  placeholder ="Enter your Query"  onChange={(e) => setQuery(e.target.value)}>
                            
                        </textarea>
                        
                        <input className="formbutton" type="submit"/>
                        </form>
                        </div>
            </div>
        </div>
        </Element>
    )
}

export default Contact