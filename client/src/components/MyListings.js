import React, { useState, useEffect, useContext } from 'react'
import EditListing from './EditListing'
import { ListingsContext } from "../context/listings";
import { UserContext } from '../context/user';

function MyListings({}) {

    const { handleDeleteListing, handleEditedListing} = useContext(ListingsContext)
    const {user} = useContext(UserContext)

    const [myListingData, setMyListingData] = useState([])
    
    useEffect (() => {
      if (user) {
        setMyListingData(user.listings)
      }
    }, [user])

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
            )
          })

    return (
        <div>
            {user ? ifLoggedIn : <h5>You are not logged in</h5>}
        </div>
    )
}

export default MyListings 