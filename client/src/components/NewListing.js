import React, { useEffect, useState } from 'react'

function NewListing({allData, user, addANewListing}) {

    const [newPrice, setNewPrice] = useState()
    const [newColor, setNewColor] = useState()
    const [newShape, setNewShape] = useState()
    const [newEaringOrPrice, setNewEaringOrPrice] = useState(true)
    const [newListingEaringId, setNewListingEaringId] = useState()
    const [errors, setErrors] = useState([])
    const [earings, setEarings] = useState([])

    
    let thisUser 
    if (user) {thisUser = user.id}

    useEffect (() => {
        fetch("/earings")
        .then((r) => r.json())
        .then((data) => {
            setEarings(data)
            setNewListingEaringId(data[0].id)
        })
      }, [])

    function handleNewListing(e) {
        e.preventDefault()
        const newListing = {
            user_id: thisUser,
            earing_id: newListingEaringId,
            price: newPrice
        }
        fetch("/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newListing),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => {
                    addANewListing(data)
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleNewEaring(e) {
        e.preventDefault()
        console.log("Jkck")
    }

    let allErrors = []
    if (errors) {
        console.log(errors)
        const objectErrors = Object.entries(errors)
        console.log(objectErrors)
        // allErrors = objectErrors.map((err, index) => {
        //     return (<h5 key={index}>{err}</h5>)
        // })
    }

    const newPriceForm =    <div>
        <form onSubmit={handleNewListing}>
            <label>Choose an earing here:</label>
            <select onChange={(e) => setNewListingEaringId(e.target.value)}>
                {allData.map((listing, index) => {
                    return (<option key={index} value={listing.earing.id}>{listing.earing.color} and {listing.earing.shape}</option>)
                })}
            </select>
            <h5>Can't find the earing you're looking for? Click <button onClick={(e) => setNewEaringOrPrice(false)}>here</button> to create a new one!</h5>
            <label>Price:</label>
            <input type="text" id="price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        {allErrors}
    </div>

    const newEaringForm =   <div>
        <form onSubmit={handleNewEaring}>
            <label>Color:</label>
            <input type="text" id="color" value={newColor} onChange={(e) => setNewColor(e.target.value)}></input>
            <label>Shape:</label>
            <input type="text" id="shape" value={newShape} onChange={(e) => setNewShape(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        {allErrors}
        <h5>Click <button onClick={(e) => setNewEaringOrPrice(true)}>here</button> to add a price and make a new listing</h5>
    </div>

    return (
        <div>
            {newEaringOrPrice ? newPriceForm : newEaringForm}
        </div>
    )
}

export default NewListing