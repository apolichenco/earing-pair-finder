import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import LogIn from './LogIn'
import Listings from './Listings'
// import Favorites from './Favorites'
import MyListings from './MyListings';
import NewListing from './NewListing';
import { UserContext } from '../context/user';
// import '../App'
import '../App.css';

function App() {

    const [logInStatus, setLogInStatus] = useState("Sign In/Log In")
    const [allData, setAllData] = useState([])
    // const [user, setUser] = useState(false)

    const {setUser} = useContext(UserContext)

    useEffect (() => {
      fetch("/listings")
      .then((r) => r.json())
      .then((data) => setAllData(data))
    }, [])

    useEffect (() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
            r.json()
            .then((data) => {
            setLogInStatus(`Welcome ${data.name}`)
            setUser(data)
            })
        }
        else {
            r.json().then((err) => setUser(false))
        }
    })
    }, [])

    function handleANewListing(newListing) {
      setAllData([...allData, newListing])
    }

    function handleDeleteListing(listingId) {
      setAllData(allData.filter((listing) => listing.id !== listingId))
    }

    function handleEditedListing(editedListing) {
      const listWithoutEdited = allData.map((listing) => {
          if (listing.id !== editedListing.id) {
            return listing
          }
          else {
            return editedListing
          }
        })
      setAllData(listWithoutEdited)
    }

  return (
    <div className="App">
      <Header statusOfLogIn={logInStatus} setStatus={setLogInStatus}/>
      <Switch>
        <Route path="/log-in">
          <LogIn setStatus={setLogInStatus}/>
        </Route>
        <Route path="/listings">
          <Listings listingData={allData} />
        </Route>
        {/* <Route path="/favs">
          <Favorites/>
        </Route> */}
        <Route path="/my-listings">
          <MyListings onDeleteListing={handleDeleteListing} onEditListing={handleEditedListing} />
        </Route>
        <Route path="/new-listing">
          <NewListing addANewListing={handleANewListing} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
