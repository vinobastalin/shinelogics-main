import React from 'react'
import { useState } from "react";
import { Button } from '@material-ui/core'
import './ThirdComponent.css'

const ThirdComponent = () => {

 
    const [company, setCompany] = useState("");
    const [desig, setDesig] = useState("");
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
   // const [months, setMonths] = useState(); 
    const [skill, setSkill] = useState("");
    const [role, setRole] = useState("");
    const [starts, setStarts] = useState();
    const [ends, setEnds] = useState();
   // const [monthss, setMonthss] = useState();
/*    const [formValues, setFormValues] = useState([{ 
        month: "", company : "",
        desig: "", start : "",
        end: "",  
        months: "",    skill: "",  
        skill: "",    role: "",  
        starts: "", 

    }]) */
   
/*      
    const [formValues, setFormValues] = useState([{ education : "", institute : "",
    startdate: "", enddate : "",
    percentage: "", 
    
}])

const [formsValues, setFormsValues] = useState([{  course: "", instituename : "",
startdates: "",
 grade: "",

}]) */

    /* let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      } */
      /* let clickChange = (i, e) => {
        let newFormsValues = [...formsValues];
        newFormsValues[i][e.target.name] = e.target.value;
        setFormsValues(newFormsValues);
      } */
    
  /*   let addFormFields = () => {
        setFormValues([...formValues, { education : "", institute : "",
        startdate: "", 
        percentage: "", 
       }])
      }
      let addFormsFields = () => {
        setFormsValues([...formsValues, {  
            course: "", instituename : "",
            startdates: "", enddates : "",
             grade: "",}])
      } */

    const handleSubmit = (event) => {
        console.log(starts);
        event.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="formcontainerthird">
            
                 <div className='thirdheadpara'>
                 <p className='thirdpopuppara'>EDUCATION:</p>
                 </div>
                
                   <div className='formcontainer__bd'>
                        <div className='containerhead1'>
                        <p className='para112'>EducationName</p>
                         <p className='para122'>InstituteName</p>
                         <p className='para132'>AcademicYear</p>
                         <p className='para142'>Percentage</p>
                     </div>  
                     <div className='row'>
                     <div className='col'>
                     <input className="form-control"
                            type="text"
                           
                            /* value={element.education || ""}  */
                            /* onChange={e => setFormValues(index, e.target.value)}  */
                            value={company}
                             onChange={(e) => setCompany(e.target.value)} 
                            placeholder='Eg: HSC'
                       
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="text"
                           
                           /*  value={element.institute || ""}  
                            onChange={e => setFormValues(index, e)}*/
                            value={desig}
                            onChange={(e) => setDesig(e.target.value)}
                            placeholder='Eg: ABC High School'
                       
                        />
                        </div>
                         <div className='col'>
                         <input className="form-control"
                            type="month"
                           value={start}
                            placeholder='Eg:2014-2016'
                            onChange={(e) => setStart(e.target.value)}
                            /* value={element.startdate || ""}
                            onChange={e => setFormValues(index, e)}  */
                            
                        />
                        </div>
                        <div className='col'>
                         <input className="form-cntrol"
                            type="text"
                            value={end}
                            /* value={element.percentage || ""} 
                            onChange={e => setFormValues(index, e)}  */
                            onChange={(e) => setEnd(e.target.value)}
                            placeholder='Eg: 85%'
                        />
                        </div>
                        
                 </div>
                 </div>
            
                 <br/>
                 <Button variant='contained' className='firstbutton1' /*  onClick={() => addFormFields()} */ >Add</Button>
                 {/* -------------------------------------------------- */}
                 
                 <div className='thirdheadpara1'><p >CERTIFICATION:</p>
                 </div>
             
                 <div className='formcontainer__be'>           
                 <div className='containerhead2'>
                 <p className='para113'>CourseName</p>
                         <p className='para123'>CourseName</p>
                         <p className='para133'>CompletionDate</p>
                         <p className='para143'>Grade</p>
                     </div> 
                     <div className='row'>
                         <div className='col'>
                 <input className="form-control"
                            type="text"
                            placeholder='Eg: Python'
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}

                          /*   value={element.course || ""} 
                            onChange={e => setFormsValues(index, e)}  */
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="text"
                            value={role}
                            placeholder='Eg: NPTEL'
                            onChange={(e) => setRole(e.target.value)}
                         /*    value={element.instituename || ""} 
                            onChange={e => setFormsValues(index, e)}  */
                            
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="date"
                            value={starts}
                            placeholder='Eg:12/05/2015'
                            onChange={(e) => setStarts(e.target.value)}

                           /*  value={element.startdates || ""} 
                            onChange={e => setFormsValues(index, e)}  */
                           
                        />
                        </div>
                        <div className='col'>
                         <input className="form-control"
                            type="text"               
                            placeholder='Eg: A'
                            value={ends}
                            onChange={(e) => setEnds(e.target.value)}
                          /*   value={element.grade || ""} 
                            onChange={e => setFormsValues(index, e)}  */
                        />
                        </div>
                 </div>
                 </div>
                 <br/>
                 <Button variant='contained' className='firstbutton3' /* onClick={() => addFormsFields()} */ >Add</Button>
                 <br/>
                 <Button variant='contained' className='finalbutton11'>Save</Button>
             
              </form>
        </div>
    )
}

export default ThirdComponent
