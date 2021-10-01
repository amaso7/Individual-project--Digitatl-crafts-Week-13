import '../App.css';
import {useEffect, useState } from 'react'

function PtPortal() {
    const [pt, setPt] = useState({})
    const handlePtChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
/*
  const ptItems = pts.map(pt =>{
    return <li key = {pt.id}>{pt.bithday, pt.name, pt.msg}</li>
  })
*/
  return (
    <div className="App">
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Patient Portal</p>
        <a>**For exsisting Patients only** if you are a new patient please call us at (678) 799-9277 to set up a new patient appointment.</a>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png"/>
        <form id= "ptPortal">
            <input name = "name" onChange = {handlePtChange} type = "textbox" placeholder = "Full Name"/> 
            <a>Enter Date of birth</a>  
            <input name = "dob" onChange = {handlePtChange} type = "date" placeholder = "Date of Birth"/> 
            <input name = "provider" onChange = {handlePtChange} type = "textbox" placeholder = "Provider(At Azure for Health LLC.)"/>
            <a>Enter your last appointment date (If applicable. A reqired field for medication refills)</a>
            <input name = "prevappt" onChange = {handlePtChange} type = "date"/> 
            <a>Enter your Next appointment date (If applicable. A reqired field for medication refills)</a>
            <input name = "nextappt" onChange = {handlePtChange} type = "date"/> 
            <input name = "msg" onChange = {handlePtChange} type = "textbox" placeholder = "Message to your Doctor"/> 
            <button type = "submit">submit</button>
        </form>
          
      </header>

    </div>
  )
}

export default PtPortal;
