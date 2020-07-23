import React from 'react';
import {  Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';


function App() {
  return (
    <div className="App">
     <div className="Link">
 <Link to="/protected">PROTECTED</Link><br/>
    <Link to="/add-friend">ADD FRIEND</Link><br/>
    <Link to="/login">LOGIN</Link>
 </div>
   <Switch>
   <PrivateRoute path='/protected' component={FriendsList} />
   <Route path='/login' component={Login} />
   <Route exact path="/add-friend" component={AddFriends} />

  </Switch>
  </div>
  );
}

export default App;
