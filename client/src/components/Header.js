import React from 'react'
import {NavLink} from "react-router-dom"

function Header({onLogOut, statusOfLogIn, setStatus}) {

    function deleteUser() {
        fetch("/logout", {method: "DELETE"})
        .then((r) => {
            onLogOut(false)
            setStatus("Sign In/Log In")
        })
    }

    const navStyle = {
        color: "white",
        margin: 15,
    }

    return (
        <div style={{        
            position: 'fixed',
            top: 0,
            width: '100%',
            background: 'black'
            }}>
            <NavLink to="./log-in" style={navStyle}>
                {statusOfLogIn}     
            </NavLink>
            <NavLink to="./listings" style={navStyle}>
                Listings     
            </NavLink>
            <NavLink to="./my-listings" style={navStyle}>
                My Listings    
            </NavLink>
            <NavLink to="./new-listing" style={navStyle}>
                New Listing    
            </NavLink>
            <a href="./log-in"><button onClick={deleteUser} style={{margin: 15}}>Log Out</button></a>
        </div>
    )
}

export default Header 