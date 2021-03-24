import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  
  const logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
             <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            {localStorage.getItem('accessToken') && <Link to="/protected">Friends List</Link>}
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
