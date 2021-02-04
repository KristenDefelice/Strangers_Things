import React, { useEffect, useState} from 'react'
//welcome username
//messages to me
//messages from me
//same header as home
//can click on post and delete or edit it

const Profile = (result, messages) => {
    const [token, setToken] = useState('')
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')

    const profileToken = localStorage.getItem("token")
    useEffect (() => { fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
            headers: {
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + profileToken
            },
            }).then(response => response.json())
            .then(result => setToken(result.data.token))
            .catch(console.error);
        },[profileToken])
    return ( <div>
        <h1>Welcome setUser={setUser(username)}</h1> 
        <h3>Messages to me:</h3>
            <div>
            {  messages.map((message, index) => {
        return <div key={ index }>
                {result.data.message}
                <button>Edit</button><button>Delete</button>
            </div>})}
            </div>
        <h3>Messages from me:</h3>
    </div>)
}

export default Profile;