import {React, useState} from 'react';


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const signUp = (event) => {
        event.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register', {
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
              setToken(result.data.token)
            })
            .catch(console.error);
    }
    return (
    <form onSubmit={signUp}>
        <h1 className="logIn">Sign Up</h1>
        <div className="username">
            <label>Create Username: </label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value) }/>
        </div>
        <div className="password">
            <label>Create Password: </label>
            <input type="text" id="password" onChange={(event) => setPassword(event.target.value) }/>
        </div>
        <div className="buttons">
            <button className="submit" type="submit" >Submit</button>
        </div>
    </form>)
}

export default Register;