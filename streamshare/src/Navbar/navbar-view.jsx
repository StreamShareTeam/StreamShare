import React from 'react'
import './navbar-view.css'
import {Link} from "react-router-dom"

function NavbarView() {
    const elem = "Stream Share"

    return(
        <Link path='/' className="navbar-container">
            <h1 className='title'>{elem}</h1>
        </Link>

    )
  
}

export default NavbarView