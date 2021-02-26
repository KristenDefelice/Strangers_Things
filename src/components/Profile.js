import React, { useEffect, useState} from 'react'

const Profile = ({isLoggedIn}) => {

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
        if(isLoggedIn){
        getMessage();
        }
    })
    return ( <div>
        {isLoggedIn &&
        <div>
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
                </div>})}
            </div>
            </div>}
    </div>)
}

export default Profile;