import './App.css';
import React from 'react';
import NavbarView from './Navbar/NavbarView';
import {Route, Routes} from "react-router-dom"

function App() {
   var componentArgs = [
    {
      title: "Stream Share",
      date: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ,
    }
  ];
  return (
        <NavbarView
        title={componentArgs[0].title}
        date={componentArgs[0].date}
        />
      
      

      
    
    
  );
}

export default App;
