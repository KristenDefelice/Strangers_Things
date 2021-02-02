import React from 'react'
//welcome username
//messages to me
//messages from me
//same header as home
//can click on post and delete or edit it

const Profile = () => {
    const messages = () => {
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…0OTR9.Yxv-l66kW43o2BG7cMBq38MKGtrte5E4tCxnT1F58pI'
            },
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    }
    return ( <div>
        <h1>Welcome </h1>
        <h3 messages={messages}>Messages to me: </h3>
        <h3>Messages from me:</h3>
    </div>)
}

export default Profile;