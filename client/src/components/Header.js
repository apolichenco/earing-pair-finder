import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

function Header({onLogOut}) {

    function deleteUser() {
        fetch("/logout", {method: "DELETE"})
        .then((r) => {onLogOut(null)})

    }

    return (
        <div>
            <NavLink to="./log-in">
                Sign In/Log In
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