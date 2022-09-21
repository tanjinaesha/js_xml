import React from 'react';
import ReactDOM from 'react-dom';

const d=new Date();
const datename=d.getDate();
const monthname=d.getMonth();
const yearname=d.getFullYear();


ReactDOM.render(
  <div>
    <h1> I am esha</h1>
      <p1>I am a front end developer</p1>
      <h1>{datename +"/"+monthname+"/"+yearname+""}</h1>
   
  </div>,


  document.getElementById('root')
    
  
);

