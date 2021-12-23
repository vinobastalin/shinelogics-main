import React from 'react'
import { useState } from "react";
import './SecondComponent.css'
import { Button } from '@material-ui/core'
const SecondComponent = () => {

    const [month, setMonth] = useState("");

   /*  const [company, setCompany] = useState("");
    const [desig, setDesig] = useState("");
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [months, setMonths] = useState(); 
    const [skill, setSkill] = useState("");
    const [role, setRole] = useState("");
    const [starts, setStarts] = useState();
    const [ends, setEnds] = useState();
    const [monthss, setMonthss] = useState();*/
/*    const [formValues, setFormValues] = useState([{ 
        month: "", company : "",
        desig: "", start : "",
        end: "",  
        months: "",    skill: "",  
        skill: "",    role: "",  
        starts: "", 

    }]) */


     
    const [formValuess, setFormValuess] = useState([{ company : "",
    desig: "", start : "",
    end: "", 
    
}])

const [formsValues, setFormsValues] = useState([{  skill: "", role : "",
starts: "", ends : "",
monthss : "",

}])

    let handleChange = (i, e) => {
        let newFormValuess = [...formValuess];
        newFormValuess[i][e.target.name] = e.target.value;
        setFormValuess(newFormValuess);
      }
      let clickChange = (i, e) => {
        let newFormsValues = [...formsValues];
        newFormsValues[i][e.target.name] = e.target.value;
        setFormsValues(newFormsValues);
      }
    
    let addFormFieldss = () => {
        setFormValuess([...formValuess, { company : "",
        desig: "", start : "",
        end: "", 
       }])
      }
      let addFormsFields = () => {
        setFormsValues([...formsValues, {  
        skill: "", role : "",
        starts: "", ends : "",
        monthss : "",}])
      }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="formcontainersecond">
            
                <div className='formcontainersec'>
                <label>TOTAL EXPERIENCE:</label>
        
                <input className="inputfield__a"
                            type="number"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                           /*  firstMonhChange = {onChange} */
                        />
                 </div>
                 
                 <p>COMPANY WORKED:</p>
                 {formValuess.map((element, index) => (
                 <div key={index}>
                     
                   <div className='formcontainer__b'>
                        <div className='containerhead5'>
                         <p className='para11'>CompanyName</p>
                         <p className='para12'>Designation</p>
                         <p className='para13'>StartDate</p>
                         <p className='para14'>EndDate</p>
                     </div>  
                     <div className='row'>
                         <div className='col'>
                 <input className="form-control"
                            type="text"
                            style={{color:'blue'}}
                            //value={company}
                            value={element.company || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: Shinelogics'
                           /*  onChange={(e) => setCompany(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="text"
                            //value={desig}
                            value={element.desig || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: Software engineer'
                            /* onChange={(e) => setDesig(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="date"
                           // value={start}
                            placeholder='Eg:12/05/2015'
                            value={element.start || ""} 
                            onChange={e => handleChange(index, e)} 
                            /* onChange={(e) => setStart(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="date"
                            //value={end}
                            value={element.end || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: 12/05/2020'
                           /*  onChange={(e) => setEnd(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                       
                 </div>
                 </div>
                 </div>
             ))}
                 <br/>
                 <Button className='firstbutton' variant="contained"  onClick={() => addFormFieldss()} >Add</Button>
                 {/* -------------------------------------------------- */}
                 <p>SKILL SET WORKED:</p>
                 {formsValues.map((element, index) => (
                 <div key={index}>
                 <div className='formcontainer__bc'>           
                 <div className='containerhead6'>
                         <p className='para11'>Skills</p>
                         <p className='para12'>Roles</p>
                         <p className='para13'>StartDate</p>
                         <p className='para14'>EndDate</p>
                     </div> 
                     <div className='row'>
                         <div className='col'>
                 <input className="form-control"
                            type="text"
                            //value={skill}
                            placeholder='Eg: Java'
                            value={element.skill || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setSkill(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="text"
                            //value={role}
                            placeholder='Eg: Software developer'
                            value={element.role || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setRole(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="date"
                            //value={skill}
                            placeholder='Eg:12/05/2015'
                            value={element.starts || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setStarts(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="date"
                            //value={ends}
                            placeholder='Eg: 12/05/2020'
                            value={element.ends || ""} 
                            onChange={e => clickChange(index, e)} 
                          /*   onChange={(e) => setEnds(e.target.value)}
                            handleChange={onChange} */
                        />
                        </div>
                    </div>
                        
                        </div>
                 </div>
    
                 ))}
        
                 <br/>
                 <Button variant="contained" className='firstbuttons' onClick={() => addFormsFields()} >Add</Button>
                 <br/>
                 <Button  variant="contained" className='finalbutton'>Save</Button>
             
              </form>
        </div>
    )
}

export default SecondComponent
