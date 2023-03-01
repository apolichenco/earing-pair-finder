import React, { useState, useEffect, useContext } from 'react'
import EditListing from './EditListing'
import { ListingsContext } from "../context/listings";
import { UserContext } from '../context/user';

function MyListings({}) {

    const [myListingData, setMyListingData] = useState([])
    const [error, setError] = useState([])

    const { handleDeleteListing, handleEditedListing} = useContext(ListingsContext)
    const {user} = useContext(UserContext)

    useEffect (() => {
        fetch("/user-listings")
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => setMyListingData(data))
            }
            else {
                r.json().then((err) => setError(err.errors))
            }
        })

      }, [])

      function editAListing(editedListing) {
        handleEditedListing(editedListing)
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

      function deleteAListing(listingId) {
        handleDeleteListing(listingId)
        setMyListingData(myListingData.filter((listing) => listing.id !== listingId))
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
                    <EditListing price={listing.price} id={listing.id} onEditLists={editAListing} onDelete={deleteAListing}/>
                </div>
            )})

    return (
        <div>
            {user ? ifLoggedIn : <h5>{error}</h5>}
        </div>
    )
}

export default MyListings 