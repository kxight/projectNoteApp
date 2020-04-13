import React from 'react';
import "./style.css";
import Img from "./login2.svg" ;

const Home = () => (
   
    <div style={{
        backgroundColor: 'black',
        width: 'fit',
        height: '600px'
      }}>
    <h1 className="hometxt">Note App</h1>
    <h2 className="homec">Capture your ideas quickly</h2>
    <img src={Img} className="homeimg"/>
    </div>

)

export default Home;