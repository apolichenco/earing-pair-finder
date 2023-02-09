import React, { useState } from "react";

function EditListing({price, id, onEdit, trueEditing}) {
    const [editedPrice, setEditedPrices] = useState(price) 

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/listings/${id}` , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify({
                price: editedPrice
            }),
        })
        .then((r) => r.json())
        .then((updatedListing) => onEdit(updatedListing))
        trueEditing(true)
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" name="price" value={editedPrice} onChange={(e) => setEditedPrices(e.target.value)}/>
            <input type="submit" value="Save"/>
        </form>
    )
}

export default EditListing;