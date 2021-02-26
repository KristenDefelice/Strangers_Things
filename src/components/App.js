import React from "react";
import { 
    BrowserRouter as Router,
    Link, 
    Route,
    Switch
} from "react-router-dom";


import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Log from "./Log";
import Register from "./Register";
import AddPost from "./AddPost";
import Logout from "./Logout"
import NewMessage from "./NewMessage"



const App = () =>{

return (
  <Router>
    <div>
      <nav>
      <header>
        <h1 className="stranger">Stranger's Things</h1>
      </header >
        <ul className="nav">
        <li>
            <Link to="/log">Log In</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route exact path="/post">
        <Post />
      </Route>
      <Route exact path="/post/add">
        <AddPost />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
        </Route>
      <Route exact path="/newmessage">
        <NewMessage />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route path="/">
        <Log />
      </Route>
      </Switch>
    </div>
  </Router>
);

}




export default App;