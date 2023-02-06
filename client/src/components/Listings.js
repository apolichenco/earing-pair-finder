import React, { useState, useEffect } from 'react'

function Listings({listingData}) {


    return (
        <div>
            {listingData.map((listing, index) => {
                return (
                <div key={index}>
                    <h3>Seller Name: {listing.user.name}</h3>
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

export default Listings 