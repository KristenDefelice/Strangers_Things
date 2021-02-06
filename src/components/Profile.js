import React, { useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const Profile = () => {
    const [data, setData] = useState([])

    const profileToken = localStorage.getItem("token")
    const getMessage = () => {
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
            headers: {
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + profileToken
            },
            }).then(response => response.json())
            .then(response => setData(response.data))
            // .then(console.log(response))
            .then(console.log(data))
            .catch(console.error);
    }
    useEffect (() => { 
        // // fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
        //     headers: {
        //       'Content-Type':'application/json',
        //       'Authorization':'Bearer ' + profileToken
        // //     },
        //     }).then(response => response.json())
        //     .then(response => setData(response.data))
        //     // .then(console.log(response))
        //     .then(console.log(data))
        //     .catch(console.error);
            getMessage();
        })
    return ( <div>
        <h1 className="messages">Messages</h1>
            <div className="messageList">
            {  data.messages && data.messages.map((message, index) => {
                console.log(message)
                return <div key={ index }>
                    <hr/>
                <h2> {message.post.title}</h2>
                <h3> {message.fromUser.username}</h3>
                <p> {message.content}</p>
                {message.isAuthor ? <div><button>Edit</button><button>Delete</button></div>:null}
                <Link className="linkButton" to="/newMessage">Create New Message</Link>
                </div>})}
            </div>
    </div>)
}

export default Profile;