import React from 'react'
import Nav from './Menu'
import About from './About'
import DrPortal from './DrPortal'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DrListPage, {viewAllpts} from './components/DrListPage'

import Home from './components/Home'
function App() {
    return(
        <Router>
            <div>
                 
                <Switch>
                <Route path="/DrListPage" component={DrListPage} />
                <Home/>
                </Switch>
            <DrPortal/>       
            <Route path= " /about"/>
            <footer>Developed by Saad Hindash</footer>
        </div>
        </Router>
    )
}
export default App