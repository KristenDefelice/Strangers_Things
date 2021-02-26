import React, { useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom'
import NewMessage from './NewMessage';

const Post = ({isLoggedIn}) => {
    let history = useHistory();
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [content, setContent] = useState()

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
        if (isLoggedIn){
            getPosts()}
    },[profileToken, isLoggedIn])

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

    const editPost = (post) => {
        setTitle(post.title)
        setPrice(post.price)
        setDescription(post.description)
        fetch(`http://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts/${post._id}`, {
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
            willDeliver: true
            }
        })
        }).then(response => response.json())
        .then(result => { console.log(result)
        })
        .catch(console.error);
    }


    // const buttonClicked = () => {
    //     return (
    //         <div className="popup-box">
    //            <div className="box">
    //                 <div>Create New Message:</div>
    //                 <label>Title: </label>
    //                 <input type="text" id="text" onChange={(event) => setTitle(event.target.value) }/>  
    //                 <input type="button" value="Submit"/>
    //             </div>
    //         </div>
    //     )
    // }

    return ( <div>
        <h1 className="posts">Posts </h1> 
        {isLoggedIn && <div>
            <Link className="linkButton" to="/post/add">Create New Post</Link>
                <div className="postList">
                {posts && posts.map((post, index) => {
                return <div key={ index.id }>
                    <hr/>
                    <h1>{post.title}</h1>
                    <h2>{post.author.username}</h2>
                    <p>{post.description}</p>
                    <p>{post.location}</p>
                    <p>{post.price}</p>
                    {<button onClick={() => <NewMessage postid={post._id}/>}>Create New Message</button>}
                    { post.isAuthor ? (<div><div><button onClick={() =>editPost(post)}>Edit</button></div><div><button onClick={() => deletePost(post._id)}>Delete</button></div></div>):null}
                    </div>})}
                </div>
        </div>}
    </div>)
}

export default Post;
