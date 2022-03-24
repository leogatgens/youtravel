import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Options} from './components/Options';
import React, { Fragment } from 'react';
import { paises } from "./data";
function App() {
  return (
   
        <div
          style={{
            background: 'white',
            height: 470
          }}
        >
          <Header/>
          <Options  data={paises}/>
          
        </div>
      

       );
}

export default App;
