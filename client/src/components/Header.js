import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

function Header({statusOfLogIn}) {

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
            <button onClick={console.log("Hello")}>Log Out</button>
        </div>
    )
}

export default Header 