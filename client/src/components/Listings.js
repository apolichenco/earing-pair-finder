import React, { useState, useEffect } from 'react'
import EditListing from './EditListing'

function Listings({listingData, onDeleteListing, onEditListing}) {

    // const [editingStatus, setEditingStatus] = useState(true)

    // function handleDelete(id) {
    //     fetch(`/listings/${id}`, {
    //         method: "DELETE",
    //     })
    //     onDeleteListing(id)
    //   }

    //   function handleEdit() {
    //     setEditingStatus(!editingStatus)
    //   }

    return (
        <div>
            {listingData.map((listing, index) => {
                return (
                <div key={index}>
                    <h3>Seller Name: {listing.user.name}</h3>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.color} <br></br>
                        Styling: {listing.earing.shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                    <EditListing price={listing.price} id={listing.id} onEdit={onEditListing} onDelete={onDeleteListing}/>
                    {/* <button onClick={(e) => handleDelete(listing.id)}>
                        <span>🗑️</span>
                    </button>
                    <button onClick={handleEdit}>
                        <span>✏️</span>
                    </button> */}
                </div>
                )
            })}
        </div>
    )
}

export default Listings 