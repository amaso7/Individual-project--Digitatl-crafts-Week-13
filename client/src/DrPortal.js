import React from 'react';
import { Router } from 'react-router';
import Nav from './Menu';
import { fetchPts } from './store/creators/actionCreators';


function DrPortal() {
    return (
        <Nav>
            <h3>About</h3>
            <button link to= "rcopia.com">rcopia login </button>
                <ul>
                    
                    <button>button</button>
                </ul>

        </Nav>
    )
}
export default DrPortal