import React from 'react'
import {Link} from 'react-router-dom'

export default function Header({isLoggedIn}) {
    return (
        <div>
            <nav>
                <header>
                    <h1 className="stranger">Stranger's Things</h1>
                </header >
                    <ul className="nav">
                    {!isLoggedIn && 
                        <React.Fragment>  
                        <li>
                            <Link to="/log">Log In</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/post">Post</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        </React.Fragment> }
                    {isLoggedIn &&
                        <React.Fragment>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log Out</Link>
                        </li>
                        </React.Fragment>}
                        </ul>
            </nav>
        </div>
    )
}
