import {React, useState} from 'react'
import {Redirect} from 'react-router-dom'


const Log = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function registerPage() {
        <Redirect to="./register" />
    }

//local storage for token function check if their loged in if token is stored in local storage 
    const signIn = (event) => {
        event.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password
              }
            })
          }).then(response => response.json())
            .then(result => {
            localStorage.setItem("token",result.data.token)
              console.log(result);
            })
            .catch(console.error);
    }
    return (
    <form onSubmit={signIn}>
        <h1 className="logIn">Log In</h1>
        <div className="username">
            <label>Username: </label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value) }/>
        </div>
        <div className="password">
            <label>Password: </label>
            <input type="text" id="password" onChange={(event) => setPassword(event.target.value) }/>
        </div>
        <div className="buttons">
            <button className="submit" type="submit">Submit</button>
            <button className="register"  onClick={() => registerPage()} >Register</button>
        </div>
    </form>)
}

export default Log;