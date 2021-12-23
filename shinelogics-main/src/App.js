import './App.css';
import Company from './components/Company/Company';
import { Header } from './components/Header';
import TopContainer from './components/TopContainer/TopContainer';
import Carrers from './components/Carrers/Carrers';
//import Consultant from './components/Consultant/Consultant';
import Servicess from './components/Servicess/Servicess';
import Erp from './components/Erp/Erp';
import Ecommerce from './components/Ecommerce/Ecommerce';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Experience from './components/Experience/Experience';
import Form from './components/Form/Form';
//import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Address from './components/Address/Address';
import Dummy from './components/Dummy/Dummy'
import Service from './components/Service/Service';
//import Final from './components/Final/Final';
//import Stepperr from './components/Final/Stepperr';
import Final from './components/Final/Final';
//import Final from './components/Final/Final';


function App() {
  return (
    <Router>
    <div className="App">
          
      <div className='content'>
        <Switch>
          <Route exact path='/'>
          <Address/>
            <Header />
            <TopContainer />
            <Company />
            <Servicess/>
            <Carrers />
            <Service/>
            <Contact />             
          </Route> 
          <Route path="/apply">
            <Dummy/>
            <Form/>
            <Contact/> 
          </Route>
          <Route path="/join">
            <Dummy  />
            <Form/>
            <Contact /> 
          </Route>
          <Route path="/erp">
            <Dummy  />
            <Erp/>
            <Contact /> 
          </Route>
          <Route path="/ecommerce">
            <Dummy  />
            <Ecommerce/>
            <Contact /> 
          </Route> 
        </Switch>
      
     <Route path="/popup" exact component={Final}></Route>
     {/*  <Router>
         <Routes>
         
          <Route path="/join" component={Experience} /> 
          </Routes>
     </Router> */}
       
      {/* <Experience/> */}
      {/* <Consultant /> */}
      </div>
      
    </div>
    </Router>
  );
}

export default App;
