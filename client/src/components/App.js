import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import LogIn from './LogIn'
import Listings from './Listings'
import Favorites from './Favorites'

function App() {

  const [logInStatus, setLogInStatus] = useState("Sign Up")
  const [allData, setAllData] = useState([])

      useEffect (() => {
        fetch("http://localhost:3000")
        .then((r) => r.json())
        .then((data) => setAllData(data))
      }, [])

  return (
    <div className="App">
      <Header status={logInStatus}/>
      <Switch>
        <Route path="/log_in">
          <LogIn status={logInStatus} setStatus={setLogInStatus}/>
        </Route>
        <Route path="/listings">
          <Listings listingData={allData}/>
        </Route>
        <Route path="/favs">
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
