import {React, useEffect} from 'react'


const Log = ({authenticate, register}) => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    useEffect (() => {
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    })
    return (
    <div>
        <h1 className="logIn">Log In</h1>
        <form className="username" onSubmit={authenticate}>
            <label>Username</label>
            <input type="text" id="username"/>
        </form>
        <form className="password">
            <label>Password</label>
            <input type="text" id="password"/>
        </form>
        <div className="buttons">
            <button className="submit">Submit</button>
            <button className="register" onClick={register}>Register</button>
        </div>
    </div>)
}

export default Log;