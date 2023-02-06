import React, { useState, useEffect } from 'react'

function LogIn({statusOfLogIn, setStatus, onLogIn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({username, password}),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => {
                    setStatus("Log Out")
                 onLogIn(data)
                })
            }
            else {
                r.json()
                .then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                <label>Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
            </form>
            {errors.map((err, index) => {
                <h5 key={index}>{err}</h5>
            })}
        </div>
    )
}

export default LogIn 