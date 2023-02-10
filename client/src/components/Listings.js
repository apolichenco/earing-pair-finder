import React, { useState, useEffect } from 'react'
import EditListing from './EditListing'

function Listings({listingData, onDeleteListing, onEditListing}) {

    return (
        <div>
            {listingData.map((listing, index) => {
                return (
                <div key={index}>
                    <h3>Seller Name: {listing.user.name}</h3>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.capitalized_color} <br></br>
                        Styling: {listing.earing.capitalized_shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                    <EditListing price={listing.price} id={listing.id} onEdit={onEditListing} onDelete={onDeleteListing}/>
                </div>
                )
            })}
        </div>
    )
}

export default Listings 