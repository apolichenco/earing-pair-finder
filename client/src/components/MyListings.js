import React from 'react'
import EditListing from './EditListing'

function MyListings({user, allData, onDeleteListing, onEditListing}) {

    const thisUserListings = allData.filter((listing) => listing.user.name === user.name)

    let ifLoggedIn = []

    if (thisUserListings.length > 0) {
        ifLoggedIn = thisUserListings.map((listing) => {
        return (
            <div key={listing.id}>
                <h4>Description:</h4>
                <p>
                    Color: {listing.earing.color} <br></br>
                    Styling: {listing.earing.shape}
                </p>
                <h3>Price: ${listing.price}</h3>
                <EditListing price={listing.price} id={listing.id} onEdit={onEditListing} onDelete={onDeleteListing}/>
            </div>
        )
        })}
    else {
        ifLoggedIn =  <h5>You have no listings</h5>
    }

    return (
        <div>
            {user ? ifLoggedIn : <h4>You are not Logged in</h4>}
        </div>
    )
}

export default MyListings 