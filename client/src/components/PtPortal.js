import '../App.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import reducer from '../store/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware()
))

function PtPortal(props) {
  const [pt, setPt] = useState({})

  const handlePtChange = (e) => {
    setPt({
      ...pt,
      [e.target.name]: e.target.value

    })
  }
  
  const handlePtSave = () => {
    
    fetch('http://localhost:5000/api/Pts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pt)
    }).then(response => response.json())
      .then(res => {
        props.onPtsLoaded()
      })
  }
  return (
    <div>
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Patient Portal</p>
        <p>**For exsisting patients only** if you are a new patient please call us at (678) 799-9277 to set up a new patient appointment.</p>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png" alt="" />
        </header>
        <a className ="hlink" href = '/'>Home</a>
        
        <form id="ptPortal">
          <input name="name" onChange={handlePtChange} type="textbox" placeholder="Full Name" />
          <p>Enter Date of birth</p>
          <input name="dob" onChange={handlePtChange} type="date" placeholder="Date of Birth" />
          <input name="provider" onChange={handlePtChange} type="textbox" placeholder="Provider(At Azure for Health LLC.)" />
          <p>Enter your last appointment date (If applicable. A reqired field for medication refills)</p>
          <input name="prevappt" onChange={handlePtChange} type="date" />
          <p>Enter your Next appointment date (If applicable. A reqired field for medication refills)</p>
          <input name="nextappt" onChange={handlePtChange} type="date" />
          <input name="meds" onChange={handlePtChange} type="textbox" placeholder="Relevant medication and dosage" />
          <input name="num" onChange={handlePtChange} type="textbox" placeholder="Phone Number" />
      
          <textarea className="msg" onChange = {handlePtChange}rows="5" id="message" required placeholder="Message to your Doctor"/>
          <button name="submitBtn" type="button" onClick={handlePtSave}>submit</button>
        </form>

      

    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return{
    onPtsLoaded: () => dispatch(actionCreators.fetchPts())
  }}

  const mapStateToProps = (state) => {
    return {
      pts: state.pts 
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PtPortal)
