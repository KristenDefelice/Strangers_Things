import React, { useState } from 'react'

function NewMessage() {
    const profileToken = localStorage.getItem("token")
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const createMessage = (id) => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + profileToken
            },
            body: JSON.stringify({
              message: {
                content
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    }
    return (
        <form>
           <div>
                <div>Create New Message:</div>
            <label>Title: </label>
            <input type="text" id="text" onChange={(event) => setTitle(event.target.value) }/>  
            <input type="button" onClick={() => createMessage()} value="Submit"/>
            </div>
        </form>
    )
}
export default NewMessage;