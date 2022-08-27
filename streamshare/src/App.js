import './App.css';
import React from 'react';
import NavbarView from './Navbar/navbar-view';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <NavbarView/>
      <div>
        <Routes>
          {/* <Route path='/' element={<Home/>}/>  */}
        </Routes>
      </div>
    </>
    
  );
}

export default App;
