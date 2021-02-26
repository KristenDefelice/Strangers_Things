import {React, useState} from 'react'
import {Redirect} from 'react-router-dom'
import  Register  from './Register'
import Log from './Log'


const Home = ({setAuthentication}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [submitSuccessful, setSubmitSuccessful] = useState(false)

    function registerPage() {
        <Redirect to="./register" />
    }

    function authenticate() {
        if (username && password){
            setUsername(username)
            setPassword(password)
            setAuthentication(true)
            setSubmitSuccessful(true)
        }
    }
    if (submitSuccessful){
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Log authenticate={authenticate()} register={registerPage()} />
            <Register />
        </div>   
        )
}


//import react and components
//stranger's things as the header
//Home Post Login
//Login as h1
//username to type in
//password to type in
//log in button
//dont have an account sign up link

export default Home;