import React from 'react'
import Nav from './Menu'
import About from './About'
import DrPortal from './DrPortal'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {viewAllpts} from './components/DrListPage'
function App() {
    return(
        <Router>
            <div>
                
                <viewAllpts/>
            <DrPortal/>       
            <Route path= " /about"/>
            <footer>Developed by Saad Hindash</footer>
        </div>
        </Router>
    )
}
export default App