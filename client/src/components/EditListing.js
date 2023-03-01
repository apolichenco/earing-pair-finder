import React, { useState } from "react";

function EditListing({price, id, onEditLists, onDelete}) {
    const [editedPrice, setEditedPrices] = useState(price) 
    const [editingStatus, setEditingStatus] = useState(true)
    const [errors, setErrors] = useState([])

    function handleDelete(id) {
        fetch(`/listings/${id}`, {
            method: "DELETE",
        })
        onDelete(id)
      }

      function handleEdit() {
        setEditingStatus(!editingStatus)
      }

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
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((updatedListing) => {
                    onEditLists(updatedListing)
                    setEditingStatus(true)
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    let allErrors = []
    if (errors) {
        const objectErrors = Object.entries(errors)
        allErrors = objectErrors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    const editingHtml = <div>
                <form onSubmit={handleSubmit}> 
                <input type="text" name="price" value={editedPrice} onChange={(e) => setEditedPrices(e.target.value)}/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    
    return (
        <div>
            {editingStatus ? null : editingHtml } 
            <button onClick={(e) => handleDelete(id)}>
                <span>🗑️</span>
            </button>
            <button onClick={handleEdit}>
                <span>✏️</span>
            </button>
            {allErrors}
        </div>
    )
}

export default EditListing;