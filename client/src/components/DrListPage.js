
import '../App.css';
import {useEffect, useState } from 'react'
import { fetchPts } from '../store/creators/actionCreators';

function DrListPage(props) {

  
  

  useEffect(() => {
    
    fetch('http://localhost:5000/api/pts')
    .then(response => response.json())
    .then(pts => {
      props.onPtsLoaded(pts)
    })
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Dr./Patient Portal</p>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png" alt= ""/>  
        <button className = "buttondr">Doctor Login</button>

        
      </header>


    </div>
  )
}
export default DrListPage;
