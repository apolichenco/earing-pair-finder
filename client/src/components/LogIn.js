import React, { useState, useEffect } from 'react'

function LogIn({statusOfLogIn, setStatus, onLogIn}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)
    const [typeOfLogIn, setTypeOfLogIn] = useState(true)

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    function handleSignUp(e) {
        e.preventDefault()
        fetch("/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({name, password}),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                setStatus("Log Out")
                 onLogIn(data.name)
                 })}
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleLogIn(e) {
        e.preventDefault()
        fetch("/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({name, password}),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                setStatus("Log Out")
                 onLogIn(data.name)
                 })}
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const signingUp =  <div>
            <h3>Already a user? Press <button onClick={(e) => setTypeOfLogIn(false)}>Log In</button></h3>
            <form onSubmit={handleSignUp}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <button type="submit">{statusOfLogIn}</button>
                {allErrors}
            </form>
        </div>

    const loggingIn = <div>
            <h3>New user? Press <button onClick={(e) => setTypeOfLogIn(true)}>Sign Up</button></h3>
            <form onSubmit={handleLogIn}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <button type="submit">{statusOfLogIn}</button>
                {allErrors}
            </form>
        </div>

    console.log(signingUp)

    return (
        <div>
            {typeOfLogIn ? signingUp : loggingIn}
        </div>
    )
}

export default LogIn 