import '../App.css';
import { connect } from 'react-redux'
import { fetchPts } from '../store/creators/actionCreators';
import * as actionCreators from '../store/creators/actionCreators'
import { state,Component, useEffect } from 'react';
import axios from "axios"
import { useState } from 'react'
import { render } from 'react-dom';

function DrListPage(props) {
    
  const Pts = (Pt) => {
    fetch(`https://http://localhost:5000/api/pts/`, {
         method: 'GET'
       }).then(response => response.json())
       .then(res => { 
         props.onPtsLoaded()
       })
       
   }
   
          
  return (
    <div className="App">
      <header className="App-header">
        <p>Azure for Health and Human Services LLC. Dr./Patient Portal</p>
        <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png" alt= ""/>
        </header>
        <body>  
        <a className ="buttondr"href="https://rx7.drfirst.com/login.jsp"><button>Rx Portal </button></a>
        <a className ="hlink" href = '/'>Home</a>
        </body>
        <h2>Patient Messages</h2>
        <ul>{Pts.length}</ul>      
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

export default connect(mapStateToProps, mapDispatchToProps)(DrListPage);
