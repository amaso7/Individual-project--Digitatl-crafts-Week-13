
import '../App.css';
 
import PtPortal from './PtPortal';


function DrPage(props) {

   const viewAllpts = (pt) => {
    fetch(`http://localhost:5000/api/pts/`, {
         method: 'GET'
       }).then(response => response.json())
       .then(res => { 
         props.onPtsLoaded()
         console.log(viewAllpts)
       })
       
   }


   return (
     <ul>
       <viewAllpts/>
       <PtPortal/>
     </ul>
   )
}
  
  
 
  export default DrPage