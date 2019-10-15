import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';

function App() {
  const logout =() => {
    localStorage.removeItem('token');
  }
  return (
    <div className="App">
      <Link to='/friends'><h1>Friends</h1></Link>
      <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/login" onClick={logout}>Logout</NavLink>
      </nav>

      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <PrivateRoute path='/friends/add' component={FriendForm} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;