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
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route exact path="/post">
        <Post />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/log">
        <Log />
      </Route>
      <Route exact path="/register">
        <Log />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </div>
  </Router>
);

}




export default App;