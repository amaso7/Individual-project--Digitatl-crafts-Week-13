import React from "react";
import "../CSS/Home.css";

import PtPortal from "./PtPortal";

const Home = (props) => {
    return (
      <div className="homepage-container">
        <div className="imageDiv">
        <PtPortal/>
        </div>
        {/* <div id="aboutUs" className="aboutUs"></div> */}
      </div>
    );
  };
  
  
  
  export default Home;