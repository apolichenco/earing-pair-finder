import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

function Header({statusOfLogIn}) {

    return (
        <div>
            <NavLink to="./log_in">
                {statusOfLogIn}
            </NavLink>
            <NavLink to="./listings">
                Listings
            </NavLink>
        </div>
    )
}

export default Header 