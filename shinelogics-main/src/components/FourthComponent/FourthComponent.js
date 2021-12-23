import React from 'react'
import { useState } from "react";
import { Button } from '@material-ui/core'
import './FourthComponent.css'

const FourthComponent = () => {

    const [living, setLiving] = useState("");
    const [working, setWorking] = useState("");
    const [prefferd, setPrefferd] = useState("");
    const [expected, setExpected] = useState();
   const [jobtype, setJobtype] = useState(); 
    const [feedback, setFeedback] = useState();
    const [chennai, setChennai] = useState();
    const [bangalore, setBangalore] = useState();
    const [hyderabad, setHyderabad] = useState();
    const [mumbai, setMumbai] = useState();
    const [pune, setPune] = useState(); 
    const [home, setHome] = useState(); 
    const [full, setFull] = useState(); 
    const [part, setPart] = useState(); 
    const [intern, setIntern] = useState(); 
    const [contract, setContract] = useState(); 


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(prefferd);
        console.log(jobtype);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="formcontainerfinal">
                <div className='row'>
                <div className='col'>
                    <label className='labels1'>LIVING LOCATION:</label>
                    <input className="form-control"
                        type="text"
                        placeholder='Eg: Tirunelveli'
                        value={living}
                        onChange={(e) => setLiving(e.target.value)}       
                    />
                </div>
                <div className='col'>
                    <label className='labels2'>WORKING LOCATION:</label>
                    <input className="form-control"
                        type="text"
                        placeholder='Eg:Chennai'
                        value={working}
                        onChange={(e) => setWorking(e.target.value)}                      
                    />
                </div>
                </div>
                <br/>
                <div className='row'>
                <div className='col'>
                    <label className='labels3'>PREPARED WORKING LOCATION:</label>
                    <select className="form-control"
                        type="text"
                        placeholder='Eg: Chennai'
                        value={prefferd}
                        onChange={(e) => setPrefferd(e.target.value)}                    
                    >  
                    <option 
                    /*  value={prefferd}
                     onChange={(e) => setPrefferd(e.target.value)}   */ 
                     >--Select an Option--</option>
                    <option  value={chennai}
                        onChange={(e) => setChennai(e.target.value)}   >Chennai</option>
                    <option  value={bangalore}
                        onChange={(e) => setBangalore(e.target.value)}   >Bangalore</option>
                    <option  value={hyderabad}
                        onChange={(e) => setHyderabad(e.target.value)}   >Hyderabad</option>
                    <option  value={mumbai}
                        onChange={(e) => setMumbai(e.target.value)}   >Mumbai</option>
                    <option  value={pune}
                        onChange={(e) => setPune(e.target.value)}   >Pune</option>
                </select>
                </div>
                <div className='col'>
                    <label className='labels4'>EXPECTED CTC:</label>
                    <input className="form-control"
                        type="text"
                        placeholder='Eg: 500000INR'
                        value={expected}
                        onChange={(e) => setExpected(e.target.value)}                  
                    />
                </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col'>
                    <label className='labels5'>PREPARED JOD TYPE</label>
                    <select className="form-control"
                       value={jobtype}
                        onChange={(e) => setJobtype(e.target.value)}                    
                    >
                        <option >--Select an Option--</option>
                        <option value={home}
                        onChange={(e) => setHome(e.target.value)} >Work From Home</option>
                        <option value={full}
                        onChange={(e) => setFull(e.target.value)} >Full Time</option>
                        <option value={part}
                        onChange={(e) => setPart(e.target.value)} >Part Time</option>
                        <option value={intern}
                        onChange={(e) => setIntern(e.target.value)} >Intern</option>
                        <option value={contract}
                        onChange={(e) => setContract(e.target.value)} >Contract</option>
                    </select>
                </div>
                <div className='col'>
                    <label className='labels6'>FEEDBACK/REMARKS/NOTE:</label>
                    <textarea className="form-control"
                        type="textarea"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}                    
                    />
                </div>
                </div>
                <div className='buttonlast'>
                    <Button variant='contained' className='buttonlast2'>SUBMIT</Button>
                </div>
            </form>
        </div>

    )
}

export default FourthComponent
