import React from 'react'
import './FirstComponent.css'
import { useState } from "react";
//import { Button} from '@material-ui/core'

const FirstComponent = () => {

    const [name, setName] = useState("");
     const [mobile, setMobile] = useState("");
     const [email, setEmail] = useState("");
     const [linked, setLinked] = useState("");
     const [git, setGit] = useState("");
     const [password, setPassword] = useState(""); 
 

     const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    } 
    return (
       
     <form onSubmit={handleSubmit} className="formcontainerpopup">   
           <div className="row">
            <div className="col">
                        <input className="form-control" 
                            type="text"
                            value={name}
                            placeholder ="Enter your Name"
                            onChange={(e) => setName(e.target.value)}
                        /> 
                         </div> 
                         <div className="col">
                         <input className="form-control"
                            type="number"
                            value={mobile}
                            placeholder ="Enter your Mobile Number"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                       </div>
                       </div> 
                       <br/>
                      
                       <div className='row'>
                        <div className="col">
                         <input className="form-control"
                            type="text"
                            value={email}
                            placeholder ="Enter your Emailid"
                            onChange={(e) => setEmail(e.target.value)}
                          
                        />
                        </div>
                        <div className='col'>
                        <input className="form-control"
                            type="text"
                            value={linked}
                            placeholder ="Enter your Linkedin Id"    
                            onChange={(e) => setLinked(e.target.value)}                   
                        />
                        </div>
                       </div>
                        <br/>
                       
                       <div className='row'>
                      
                       <div className='col'>
                         <input className="form-control"
                            type="text"
                            placeholder ="Enter your Gitup Id"
                            value={git}             
                            onChange={(e) => setGit(e.target.value)}           
                        />
                        </div>
                       
                        <div className="col">
                         <input className="form-control"
                            type="text"
                            placeholder ="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                        
                        </div> 
                        <button variant="contained" className="inputfieldbutt" >Save</button> 
              </form>  
       
        
    )
}

export default FirstComponent


/* <button variant="contained" className="inputfieldbutt" >Save</button>  */
