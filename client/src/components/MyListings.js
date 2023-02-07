import React, { useState } from 'react'

function MyListings({user, data}) {

    // console.log(data)
    const thisUserListings = data.filter((data) => data.user.name === user)
    console.log(thisUserListings)

    return (
        <div>

        </div>
    )
}

export default MyListings 