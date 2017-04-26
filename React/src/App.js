import React, { Component } from 'react';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import LogIn from './components/logIn/logIn';
import Interface from './components/interface/interface';
import Profile from './components/profile/profile';
import Community from './components/profile/community';


import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class PPP extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/interface" component={Interface} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/community" component={Community} />
          <Route path="/" component={Footer} />
          <Route path="/" component={Footer} />

        </div>
      </Router>
    );
  }
}

export default PPP;
