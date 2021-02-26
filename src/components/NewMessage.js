import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewMessage = (postid) => {
    let history = useHistory();
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const profileToken = localStorage.getItem("token")

    const createMessage = (id) => {
        // buttonClicked()
        console.log("reached function")
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
              console.log(result)
              history.push("/NewMessage");
            })
            .catch(console.error)
    }

    return (
        <form>
           <div>
            <div>Create New Message:</div>
                <label>Title: </label>
                <input type="text" id="text" onChange={(event) => setTitle(event.target.value) }/>  
                <input type="button" value="Submit" onSubmit={() => createMessage(postid)}/>
            </div>
        </form>
    )
}
export default NewMessage;