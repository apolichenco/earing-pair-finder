import React, { useState } from 'react'

function Sellers() {

    const [sellers, setSellers] = useState([])

    useEffect (() => {
        fetch("/users")
        .then((r) => r.json())
        .then((data) => setSellers(data))
      }, [])

    return (
        <div>
            {sellers.map((seller) => {
                return (
                    <div key={seller.id}>
                        <h3>Name: {seller.name}</h3>
                        <h5>Amount of listings: {seller.listing_number}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Sellers 