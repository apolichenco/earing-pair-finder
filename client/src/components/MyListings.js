import React, { useState } from 'react'

function MyListings({user, data}) {

    // console.log(data)
    const thisUserListings = data.filter((data) => data.user.name === user)
    console.log(thisUserListings)

    return (
        <div>
            {thisUserListings.map((listing, index) => {
                return (
                    <div key={index}>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.color} <br></br>
                        Shape: {listing.earing.shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default MyListings 