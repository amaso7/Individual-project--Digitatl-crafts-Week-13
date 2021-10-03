
import '../App.css';
import {useEffect, useState } from 'react'

function DrPage() {
    const [drs, setDrs] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/api/drs')
      .then(response => response.json())
      .then(drs => {
        setDrs(drs)
      })
    }, [])


}
export default DrPage;
