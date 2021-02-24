import {React, useState} from 'react'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom'


const LogIn = ({setIsLoggedIn}) => {
  let history = useHistory();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

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
            setIsLoggedIn(true)
            history.push("/Home")
              console.log(result);
            })
            .catch(console.error)
    }
    return (
    <form onSubmit={signIn} to="/home">
        <h1 className="logIn">Log In</h1>
        <div className="username">
            <label>Username: </label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value) }/>
        </div>
        <div className="password">
            <label>Password: </label>
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value) }/>
        </div>
        <div className="buttons">
            <button className="submit" type="submit" >Submit</button>
            <Link className="linkButton" to="/register">Register</Link>
        </div>
    </form>)
}

export default LogIn;