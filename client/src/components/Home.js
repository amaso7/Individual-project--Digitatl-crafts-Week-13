import React from "react";

import { fetchPts } from "../store/creators/actionCreators";
import DrListPage from "./DrListPage";

import PtPortal from "./PtPortal";

const Home = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <p>Azure for Health and Human Services LLC. Dr./Patient Portal</p>
            <img src="https://findicons.com/files/icons/2837/health/128/doctor_icon.png" alt= ""/>
        </header>
      </div>
    );

 
  
  };
  
  
  
  export default Home;