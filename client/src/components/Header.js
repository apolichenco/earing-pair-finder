import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

function Header({status}) {

    return (
        <div>
            <NavLink to="./log_in">
                {status}
            </NavLink>
            <NavLink to={"./listings"}>
                Listings
            </NavLink>
        </div>
    )
}

export default Header 