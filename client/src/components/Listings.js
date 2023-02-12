import React from 'react'
import EditListing from './EditListing'

function Listings({listingData}) {

    return (
        <div>
            {listingData.map((listing) => {
                return (
                <div key={listing.id}>
                    <h3>Seller Name: {listing.user.name}</h3>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.color} <br></br>
                        Styling: {listing.earing.shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default Listings 