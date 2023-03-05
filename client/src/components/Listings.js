import React, {useContext, useEffect} from 'react'
import { UserContext } from '../context/user'
import { ListingsContext } from '../context/listings'

function Listings({}) {

    const {user} = useContext(UserContext)
    const {loadData, allListings, handleDeleteListing} = useContext(ListingsContext)

        useEffect (() => {
            loadData()
        }, [])

    return (
        <div>
            {allListings.map((listing) => {
                return (
                <div key={listing.id}>
                    <h3>Seller Name: {listing.user.name}</h3>
                    <h4>Description:</h4>
                    <p>
                        Color: {listing.earing.color} <br></br>
                        Styling: {listing.earing.shape}
                    </p>
                    <h3>Price: ${listing.price}</h3>
                    {user ? <button onClick={(e) => console.log(`I want to buy the ${listing.earing.color} and ${listing.earing.shape} earing for $${listing.price} from ${listing.user.name}.`)}>I want to buy this</button> : null}
                </div>
                )
            })}
        </div>
    )
}

export default Listings 