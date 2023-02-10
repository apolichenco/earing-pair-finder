import React, { useState } from "react";

function EditListing({price, id, onEdit, onDelete}) {
    const [editedPrice, setEditedPrices] = useState(price) 
    const [editingStatus, setEditingStatus] = useState(true)

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
        .then((r) => r.json())
        .then((updatedListing) => {
            onEdit(updatedListing)
            setEditingStatus(true)
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
        </div>
    )
}

export default EditListing;