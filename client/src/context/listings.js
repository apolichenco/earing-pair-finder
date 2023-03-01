import { createContext, useState } from "react";

const ListingsContext = createContext(null);

const ListingsProvider = ({children}) => {

    const [allListings, setAllListings] = useState([])

    const loadData = () => {
        fetch("/listings")
        .then((r) => r.json())
        .then((data) => setAllListings(data))
    }

    function handleNewListing(newListing) {
        setAllListings([...allListings, newListing])
      }
  
      function handleDeleteListing(listingId) {
        setAllListings(allListings.filter((listing) => listing.id !== listingId))
      }
  
      function handleEditedListing(editedListing) {
        const listWithoutEdited = allListings.map((listing) => {
            if (listing.id !== editedListing.id) {
              return listing
            }
            else {
              return editedListing
            }
          })
        setAllListings(listWithoutEdited)
      }

    return (
        <ListingsContext.Provider value={{loadData, allListings, setAllListings, handleNewListing, handleDeleteListing, handleEditedListing}}>
            {children}
        </ListingsContext.Provider>
    )

}

export { ListingsProvider, ListingsContext}