import React from 'react'
// import {Redirect} from 'react-router-dom'
// import Log from './Log'

const Home = () => {
    return (
        <div>
    <h1>Welcome to Stranger's Things!</h1>
    <h2>You are logged in as username</h2>
    </div>)
}


// const Home = ({setAuthentication}) => {

//     const [submitSuccessful, setSubmitSuccessful] = useState(false)
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     function authenticate(event) {
//         event.preventDefault()
//         if (username && password){
//             setAuthentication(true)
//             setSubmitSuccessful(true)
//         // return alert.show("Welcome {username} ")
//         }
//     }
//     if (submitSuccessful){
//         return <Redirect to="/" />;
//     }
//     return (
//         <div>
//             <Log authenticate={authenticate} />
//         </div>   
//         )
// }


export default Home;