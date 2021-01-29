import React from "react";
import { 
    BrowserRouter as Router,
    Link, 
    Route
} from "react-router-dom";


import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Log from "./Log";



const App = () =>{

return (
  <Router>
    <div>
      <nav>
        <ul>
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
            <Link to="/log">Log In</Link>
          </li>
        </ul>
      </nav>
      <Route path="/post">
        <Post />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/log">
        <Log />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </div>
  </Router>
);

}




export default App;