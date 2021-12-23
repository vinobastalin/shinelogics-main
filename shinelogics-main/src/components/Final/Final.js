import React, { useState } from 'react';
/* import BasicDetails from '../components/basic_details';
import EmploymentDetails from '../components/employment_details';
import { FormProvider, FormContext } from '../components/form_context'; */
import FirstComponent from '../FirstComponent'
/* import SecondComponent from '../SecondComponent/SecondComponent'
import ThirdComponent from '../ThirdComponent/ThirdComponent'
import FourthComponent from '../FourthComponent/FourthComponent' */
import Stepper from 'react-stepper-horizontal';
import { Button } from '@material-ui/core';

const Final = () => {
 

  const [currentPage, setCurrentPage] = useState(1);
  const sections = [
    { title: 'Basic Details', onClick: () => setCurrentPage(1) },
    { title: 'Employment Details', onClick: () => setCurrentPage(2) },
    { title: 'Education Details', onClick: () => setCurrentPage(3) },
    { title: 'Other Information', onClick: () => setCurrentPage(4) },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stepper
          steps={sections}
          activeStep={currentPage}
          activeColor="red"
          defaultBarColor="red"
          completeColor="green"
          completeBarColor="green"
        />

        {currentPage === 1 && (
          <>
            <FirstComponent />
            <Button onClick={next}>Next</Button>
          </>
        )}

        {currentPage === 2 && (
          <>
            {/* <SecondComponent /> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={prev}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </>
        )}

 {currentPage === 3 && (
          <>
            {/* <ThirdComponent /> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={prev}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </>
        )}
        {currentPage === 4 && (
          <>
            {/* <FourthComponent /> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={prev}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </>
        )}

     {/*    {currentPage === 5 && (
          <>
            <pre>{JSON.stringify(null, 2)}</pre>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={prev}>Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )} */}
      </form>
    </>
  );
};

export default Final

