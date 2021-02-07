import React, { useState } from 'react'

function AddPost() {
    const profileToken = localStorage.getItem("token")
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const createPost = () => {
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + profileToken
            },
            body: JSON.stringify({
                post: {
                title,
                description,
                price,
                willDeliver: true
                }
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error)
    }
    return (
        <form>
           <div>
                <div>Create New Post:</div>
            <label>Title: </label>
            <input type="text" id="text" onChange={(event) => setTitle(event.target.value) }/>  
            </div>
            <div>
            <label>Description: </label>
            <input type="text" id="text" onChange={(event) => setDescription(event.target.value) }/>  
            </div>  
            <div>
            <label>Price: </label>
            <input type="text" id="text" onChange={(event) => setPrice(event.target.value) }/>  
            </div>
            <div>
            {/* <label>Delivery: </label> checkbox */}
            <input type="button" onClick={() => createPost()} value="Submit"/>
            </div>
        </form>
    )
}
export default AddPost;

//create post form
// create title desc price del
//create hooks for inputs above
//create onsubmit function for the form instead of useeffect 
//redirect on success like an alert

