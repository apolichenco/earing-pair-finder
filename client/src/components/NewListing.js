import React, { useState } from 'react'

function NewListing({allData, user}) {

    const [newPrice, setNewPrice] = useState()
    const [newColor, setNewColor] = useState()
    const [newShape, setNewShape] = useState()
    const [newEaringOrPrice, setNewEaringOrPrice] = useState(true)
    const [newListingEaringId, setNewListingPriceId] = useState()
    const [errors, setErrors] = useState(false)

    const userId = allData.filter((listing) => listing.user.name === user)
    console.log(userId)
    console.log(user)

    function handleNewListing(e) {
        e.preventDefault()
        fetch("/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({userId, newListingEaringId, newPrice}),
        })
        // .then((r) => {
        //     if (r.ok) {
        //         r.json().then((data) => onLogIn(data.name))}
        //     else {
        //         r.json().then((err) => setErrors(err.errors))
        //     }
        // })
    }

    function handleNewEaring(e) {
        e.preventDefault()
        console.log("Jkck")
    }

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    const newPriceForm =    <div>
        <form onSubmit={handleNewListing}>
            <label>Choose an earing here:</label>
            <select>
                {allData.map((listing, index) => {
                    return (<option key={index} value={listing.earing.id}>{listing.earing.color} and {listing.earing.shape}</option>)
                })}
            </select>
            <h5>Can't find the earing you're looking for? Click <button onClick={(e) => setNewEaringOrPrice(false)}>here</button> to create a new one!</h5>
            <label>Price:</label>
            <input type="text" id="price" value={newPrice}></input>
            <button type="submit">Submit</button>
        </form>
        {allErrors}
    </div>

    const newEaringForm =   <div>
        <form onSubmit={handleNewEaring}>
            <label>Color:</label>
            <input type="text" id="color" value={newColor}></input>
            <label>Shape:</label>
            <input type="text" id="shape" value={newShape}></input>
            <button type="submit">Submit</button>
        </form>
        <h5>Click <button onClick={(e) => setNewEaringOrPrice(true)}>here</button> to add a price and make a new listing</h5>
    </div>

    return (
        <div>
            {newEaringOrPrice ? newPriceForm : newEaringForm}
        </div>
    )
}

export default NewListing