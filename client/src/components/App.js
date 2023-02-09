import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import LogIn from './LogIn'
import Listings from './Listings'
import Favorites from './Favorites'
import MyListings from './MyListings';
import NewListing from './NewListing';

function App() {

    const [logInStatus, setLogInStatus] = useState("Sign Up")
    const [allData, setAllData] = useState([])
    const [user, setUser] = useState(false)

    useEffect (() => {
      fetch("/listings")
      .then((r) => r.json())
      .then((data) => setAllData(data))
    }, [])

    useEffect (() => {
      fetch("/me")
      .then((r) => r.json())
      .then((data) => {
        setLogInStatus("Log Out")
        setUser(data)
      })
    }, [])

    function handleANewListing(newListing) {
      setAllData(allData.push(newListing))
    }

    function handleDeleteListing(listingId) {
      console.log(listingId)
    }

    function handleEditedListing() {
      console.log("HI")
    }

  return (
    <div className="App">
      <Header statusOfLogIn={logInStatus} onLogOut={setUser}/>
      <Switch>
        <Route path="/log-in">
          <LogIn setStatus={setLogInStatus} onLogIn={setUser} allData={allData}/>
        </Route>
        <Route path="/listings">
          <Listings listingData={allData} onDeleteListing={handleDeleteListing} onEditListing={handleEditedListing}/>
        </Route>
        <Route path="/favs">
          <Favorites/>
        </Route>
        <Route path="/my-listings">
          <MyListings user={user} allData={allData} />
        </Route>
        <Route path="/new-listing">
          <NewListing allData={allData} addANewListing={handleANewListing} user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
