import React from 'react'
import './NavbarView.css'
// import {Link} from "react-router-dom"

function NavbarView(props) {
    
    return(
    <>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
        </head>
        <div className="navbar-container">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className='currDate'>{props.date.toUpperCase()}</div>
        </div>
    </>  
    )
  
}

export default NavbarView