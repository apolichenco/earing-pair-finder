import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import LogIn from './LogIn'
import Listings from './Listings'
import MyListings from './MyListings';
import NewListing from './NewListing';
import { UserContext } from '../context/user';
import '../App.css';

function App() {

    const [logInStatus, setLogInStatus] = useState("Sign In/Log In")

    const {setUser} = useContext(UserContext) 

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

  return (
    <div className="App">
      <Header statusOfLogIn={logInStatus} setStatus={setLogInStatus}/>
      <Switch>
        <Route path="/log-in">
          <LogIn setStatus={setLogInStatus}/>
        </Route>
        <Route path="/listings">
          <Listings/>
        </Route>
        <Route path="/my-listings">
          <MyListings />
        </Route>
        <Route path="/new-listing">
          <NewListing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
