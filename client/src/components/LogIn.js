import React, { useState, useEffect } from 'react'

function LogIn({statusOfLogIn, setStatus, onLogIn}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    function handleSubmit(e) {
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
                r.json()
                .then((data) => {
                    setStatus("Log Out")
                 onLogIn(data)
                })}
            else {
                r.json()
                .then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <button type="submit">{statusOfLogIn}</button>
                {allErrors}
            </form>

        </div>
    )
}

export default LogIn 