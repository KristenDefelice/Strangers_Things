// import {useState, useEffect} from 'react'

// import { useEffect} from "react";

//welcome username
//messages to me
//messages from me
//same header as home
//can click on post and delete or edit it

const Profile = ({username}) => {
    // useEffect(() => {
    //     fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/5e8929ddd439160017553e06/messages', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer TOKEN_STRING_HERE'
    //     },
    //     body: JSON.stringify({
    //         message: {
    //         content: "Do you still have this?  Would you take $10 less?"
    //         }
    //     })
    //     }).then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(console.error);})
    return ( <div>
        <h1>Welcome {username}</h1>
        <h3>Messages to me:</h3>
        <h3>Messages from me:</h3>
    </div>)
}

export default Profile;