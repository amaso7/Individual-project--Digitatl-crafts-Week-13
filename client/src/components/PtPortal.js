import '../App.css';
import {useEffect, useState } from 'react'

function PtPortal() {
    const [pt, setPt] = useState({})
    
    const handlePtChange = (e) => {
        
    

        setPt({
          ...pt,
          [e.target.name]: e.target.value 
        
        })
      }
/*
  const ptItems = pts.map(pt =>{
    return <li key = {pt.id}>{pt.bithday, pt.name, pt.msg}</li>
  })
*/
const handlePtSave = () => {
  fetch('http://localhost:5000/pts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pt)
      })
}
  return (
    <div className="App">
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Patient Portal</p>
        <p>**For exsisting Patients only** if you are a new patient please call us at (678) 799-9277 to set up a new patient appointment.</p>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png"/>
        <form id= "ptPortal">
            <input name = "name" onChange = {handlePtChange} type = "textbox" placeholder = "Full Name"/> 
            <p>Enter Date of birth</p>  
            <input name = "dob" onChange = {handlePtChange} type = "date" placeholder = "Date of Birth"/> 
            <input name = "provider" onChange = {handlePtChange} type = "textbox" placeholder = "Provider(At Azure for Health LLC.)"/>
            <p>Enter your last appointment date (If applicable. A reqired field for medication refills)</p>
            <input name = "prevappt" onChange = {handlePtChange} type = "date"/> 
            <p>Enter your Next appointment date (If applicable. A reqired field for medication refills)</p>
            <input name = "nextappt" onChange = {handlePtChange} type = "date"/> 
            <input name = "msg" onChange = {handlePtChange} type = "textbox" placeholder = "Message to your Doctor"/> 
            <button name ="submitBtn" onChange = {handlePtSave} type = "submit">submit</button>
        </form>
          
      </header>

    </div>
  )
}

export default PtPortal;
