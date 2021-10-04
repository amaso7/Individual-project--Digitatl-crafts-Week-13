
import '../App.css';
import {useEffect, useState } from 'react' 
import { connect } from 'react-redux'
import PtPortal from './PtPortal';
import * as actionCreators from '../store/creators/actionCreators'

function DrPage(props) {

  

   useEffect(() => {
     props.onPtsLoaded()
   }, [])

   const handlePtDelete = (pt) => {
    fetch(`http://localhost:5000/api/pts/${pt.id}`, {
         method: 'DELETE'
       }).then(response => response.json())
       .then(result => { 
         props.onPtsLoaded()
       })
       
   }

   const ptItems = props.pts.map(pt => {
     return <li key = {pt.id}>{pt.name}{pt.dob}
         <b>{pt.msg}</b>
         <button onClick = {() => handlePtDelete(pt)}></button>
       </li>
   })

   return (
     <ul>
       {ptItems}
       <PtPortal/>
     </ul>
   )
}
  const mapDispatchToProps = (dispatch) => {
    return {
      onPtsLoaded: () => dispatch(actionCreators.fetchPts())
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      pts: state.pts 
    }
  }
 
  export default connect(mapStateToProps, mapDispatchToProps)(DrPage)