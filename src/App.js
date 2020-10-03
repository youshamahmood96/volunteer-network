import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ConfirmTask from './Components/ConfirmTask/ConfirmTask';
import Login from './Components/Login/Login';
import EventTasks from './Components/EventTasks/EventTasks';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AddEvent from './Components/AddEvent/AddEvent';

export const UserContext = createContext();



function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/confirmTask/:id'>
          <ConfirmTask></ConfirmTask>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/adminPanel'>
          <AdminPanel></AdminPanel>
        </Route>
        <Route path='/eventTasks'>
        <EventTasks></EventTasks>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
      
    </div>
  );
}

export default App;
