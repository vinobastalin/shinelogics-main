import React from 'react'
//import Form from '../Form/Form'
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './TopContent.css'

const TopContent = () => {
    return (
        <div className="topcontent">
            <div className="topcontent__head">
                <h1>Delight made easy</h1>
                <p>We make it fast and easy for your business to delight<br /><span>customers and employees</span></p>
            </div>
            <div className="topcontent__container">
            <button className="newbutton">Explore us</button>
            {/* <Router>
                <Link to="/form">
                    <button className="newbutton">Explore us</button>
                </Link>
                    <Switch>
                        <Route path="/form" component={Form} />
                    </Switch>
                </Router> */}
            </div>
        </div>
    )
}

export default TopContent


/* <p>No road is long with a good Company <span>~Someone</span></p> */