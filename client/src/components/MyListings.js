import React, { useState } from 'react'

function MyListings({user, allData}) {

    // console.log(data)
    const thisUserListings = allData.filter((listing) => listing.user.name === user.name)

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