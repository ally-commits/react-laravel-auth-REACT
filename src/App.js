import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Loader from './components/Loader';

import Login from './components/Login';
import Register from './components/Register';

import PrivateRoute from './PrivateRoute';

import './style/style.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Loader />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Login path="/login"></Login>
                    <Register path="/register"></Register>
                </Switch>
            </Router>
        );
    }
}
export default App;