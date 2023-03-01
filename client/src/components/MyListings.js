import React, { useState, useEffect } from 'react'
import EditListing from './EditListing'

function MyListings({ onDeleteListing, onEditListing}) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [myListingData, setMyListingData] = useState([])
    const [error, setError] = useState([])

    useEffect (() => {
        fetch("/my-listings")
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => {
                    setMyListingData(data)
                    setLoggedIn(true)
                })
            }
            else {
                r.json().then((err) => setError(err.errors))
            }
        })

      }, [])

      function handleEditedListing(editedListing) {
        const listWithoutEdited = myListingData.map((listing) => {
          if (listing.id !== editedListing.id) {
            return listing
          }
          else {
            return editedListing
          }
          })
        setMyListingData(listWithoutEdited)
      }

        const ifLoggedIn = myListingData.map((listing) => {
            return (
                <div key={listing.id}>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.color} <br></br>
                        Styling: {listing.earing.shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                    <EditListing price={listing.price} id={listing.id} onEditBigList={onEditListing} onEditMyList={handleEditedListing} onDelete={onDeleteListing}/>
                </div>
            )})

    return (
        <div>
            {loggedIn ? ifLoggedIn : <h5>{error}</h5>}
        </div>
    )
}

export default MyListings 