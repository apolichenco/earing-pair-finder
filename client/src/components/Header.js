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

    return (
        <div>
            <NavLink to="./log-in">
                {statusOfLogIn}     
            </NavLink>
            <NavLink to="./listings">
                Listings     
            </NavLink>
            <NavLink to="./my-listings">
                My Listings    
            </NavLink>
            <NavLink to="./new-listing">
                New Listing    
            </NavLink>
            <a href="./log-in"><button onClick={deleteUser}>Log Out</button></a>
        </div>
    )
}

export default Header 