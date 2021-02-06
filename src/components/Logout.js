import {React, useState} from "react";

const Logout = () => {
    const [token, setToken] = useState('')
    const logOut = () => {
        setToken(null)
    }
    console.log(token)
return <div>
    <button onClick={logOut}>Log Out</button>
   
</div>
}

export default Logout;