import './App.css';
import React from 'react';
import NavbarView from './NavbarComponent/NavbarView';
import StreamView from './StreamViewComponent/StreamView';
// import {Route, Routes} from "react-router-dom"

function App() {
   var componentArgs = [
    {
      title: "Stream Share",
      date: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ,
    },
  ];
  return (
      <> {/* Start of jsx fragment */}
      
        <NavbarView
        title={componentArgs[0].title}
        date={componentArgs[0].date}
        />
       <StreamView/>
      </> 
  );
}

export default App;
