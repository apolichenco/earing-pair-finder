import React, { useState } from 'react'

function MyListings({user, allData}) {

    const thisUserListings = allData.filter((listing) => listing.user.name === user.name)

    const ifLoggedIn = thisUserListings.map((listing, index) => {
        return (
            <div key={index}>
                <h4>Description:</h4>
                <p>
                    Color: {listing.earing.color} <br></br>
                    Styling: {listing.earing.shape}
                </p>
                <h3>Price: ${listing.price}</h3>
            </div>
        )
    })

    return (
        <div>
            {user ? ifLoggedIn : <h4>You are not Logged in</h4>}
        </div>
    )
}

export default MyListings 