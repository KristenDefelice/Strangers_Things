import {useEffect, useState } from 'react'

function useChecklogin() {
    const [login, setLogin] = useState(false)

    useEffect(() =>{
        const profileToken = localStorage.getItem("token")
        //look in local storage for a token thats not null
        if (profileToken !== null && profileToken !== ''){
            setLogin(true)
        }
        //if it is null pass true to log in
    },[])
    return [login, setLogin]
}

export default useChecklogin;