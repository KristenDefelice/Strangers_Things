//list of posts
//search key words in posts
//send message on posts
// add new post with title, description, price, location, deliver, save
import React, { useEffect, useState} from 'react'
import {Link} from "react-router-dom";
// import { Alert } from 'react-alert'

const Post = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()

    const profileToken = localStorage.getItem("token")
    const getPosts = () =>{
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts', {
        headers: {
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + profileToken
        },
        }).then(response => response.json())
        .then(result => setPosts(result.data.posts))
        .catch(console.error);
    }
    useEffect (() => { 
        getPosts()
    },[profileToken])

    const deletePost = (id) =>{ fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + profileToken
                }
                }).then(response => response.json())
                .then(result => {
                    getPosts()
                })
                .catch(console.error);
            }

    const editPost = (id) => {
        fetch(`http://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + profileToken
        },
        body: JSON.stringify({
            post: {
            title,
            description,
            price,
            // location,
            willDeliver: true
            }
        })
        }).then(response => response.json())
        .then(result => { console.log(result)
        })
        .catch(console.error);
    }

    return ( <div>
        <h1 className="posts">Posts </h1> 
        <Link className="linkButton" to="/post/add">Create New Post</Link>
            <div className="postList">
            {  posts && posts.map((post, index) => {
        return <div key={ index.id }>
                <hr/>
                <h1>{post.title}</h1>
                <h2>{post.author.username}</h2>
                <p>{post.description}</p>
                <p>{post.location}</p>
                <p>{post.price}</p>
                { post.isAuthor ? <div><div><button onClick={() =>editPost(post._id)}>Edit</button></div><div><button onClick={() => deletePost(post._id)}>Delete</button></div></div>:null}
            </div>})}
            </div>
    </div>)
}

export default Post;