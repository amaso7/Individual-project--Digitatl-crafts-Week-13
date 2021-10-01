
import '../App.css';
import {useEffect, useState } from 'react'

function DrListPage(props) {

  const [drs, setDrs] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/drs')
    .then(response => response.json())
    .then(drs => {
      setDrs(drs)
    })
  }, [])

  const drItems = drs.map(dr =>{
    return <li key = {dr.id}>{dr.drName}</li>
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Dr./Patient Portal</p>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png"/>  
        <button className = "buttondr">Doctor Login</button>
      </header>


    </div>
  )
}

export default DrListPage;
