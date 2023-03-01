import React, { useEffect, useState } from 'react'

function NewListing({ user, addANewListing}) {

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
                    setErrors(["Succesfull!"])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleNewEaring(e) {
        e.preventDefault()
        const newEaring = {
            color: newColor,
            shape: newShape
        }
        fetch("/earings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newEaring),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => {
                    const earingList = earings
                    earingList.push(data)
                    setEarings(earingList)
                    setErrors(["Succesfull!"])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    function goToNewPrice() {
        setNewEaringOrPrice(true)
        setErrors([])
    }

    function goToNewEaring() {
        setNewEaringOrPrice(false)
        setErrors([])
    }

    const newPriceForm =    <div>
        <form onSubmit={handleNewListing}>
            <label>Choose an earing here:</label>
            <select onChange={(e) => setNewListingEaringId(e.target.value)}>
                {earings.map((earing) => <option key={earing.id} value={earing.id}>{earing.color} and {earing.shape}</option>)}
            </select>
            <h5>Can't find the earing you're looking for? Click <button onClick={goToNewEaring}>here</button> to create a new one!</h5>
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
        <h5>Click <button onClick={goToNewPrice}>here</button> to add a price and make a new listing</h5>
    </div>

    let form 
    if (newEaringOrPrice) {
        form = newPriceForm
    }
    else {
        form = newEaringForm
    }

    return (
        <div>
            {user ? form : <h5>You are not logged in</h5>}
            
        </div>
    )
}

export default NewListing