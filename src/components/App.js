import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import LogIn from "./LogIn";
import Register from "./Register";
import AddPost from "./AddPost";
import Logout from "./Logout";
import NewMessage from "./NewMessage";
import Header from "./Header";
import useChecklogin from './UseChecklogin';



const App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useChecklogin()
return (
  <Router>
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <Switch>
      <Route exact path="/post">
        <Post isLoggedIn={isLoggedIn}/>
      </Route>
      <Route exact path="/post/add">
        <AddPost />
      </Route>
      <Route exact path="/profile">
        <Profile isLoggedIn={isLoggedIn}/>
      </Route>
      <Route exact path="/home">
        <Home isLoggedIn={isLoggedIn}/>
      </Route>
      <Route exact path="/register">
        <Register />
        </Route>
      <Route exact path="/newmessage">
        <NewMessage />
      </Route>
      <Route exact path="/logout">
        <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </Route>
      <Route path="/">
        <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </Route>
      </Switch>
    </div>
  </Router>
);
}




export default App;