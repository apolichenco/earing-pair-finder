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
  const [user, setUser] = useState()

      useEffect (() => {
        fetch("/listings")
        .then((r) => r.json())
        .then((data) => setAllData(data))
      }, [])

  return (
    <div className="App">
      <Header statusOfLogIn={logInStatus}/>
      <Switch>
        <Route path="/log-in">
          <LogIn statusOfLogIn={logInStatus} setStatus={setLogInStatus} onLogIn={setUser} />
        </Route>
        <Route path="/listings">
          <Listings listingData={allData}/>
        </Route>
        <Route path="/favs">
          <Favorites/>
        </Route>
        <Route path="/my-listings">
          <MyListings user={user} data={allData} />
        </Route>
        <Route path="/new-listing">
          <NewListing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
