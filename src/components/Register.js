import {React, useState} from 'react'
// import Register from "./Register"


const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const username = document.getElementById("username")
    // const password = document.getElementById("password")
    const signUp = () => {
        fetch(
          "https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password,
              },
            }),
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch(console.error);}
    return (
    <div>
        <h1 className="logIn">Log In</h1>
        <form className="username">
            <label>Username</label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value) }/>
        </form>
        <form className="password">
            <label>Password</label>
            <input type="text" id="password" onChange={(event) => setPassword(event.target.value) }/>
        </form>
        <div className="buttons">
            <button className="submit" onSubmit={ () => signUp()}>Submit</button>
            {/* <button className="register">Register</button> */}
        </div>
    </div>)
}

export default Register;