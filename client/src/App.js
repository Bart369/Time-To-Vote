import React, { Component } from 'react'
import Header from './components/Header'
import Controller from './components/Controller'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: false,
      user: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    fetch('/auth/verify', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    console.log(data);
    fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  logout() {
    fetch('/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: null,
        })
      }).catch(err => console.log(err));
  }


  render() {
    return (  
      <Router>
        <div>
          <Header logout={this.logout} user={this.state.user}/>
          <Route exact path = '/' render = {props => (<Controller currentPage='electedofficials' />)} />
          <Route exact path='/login' render={() => (
            this.state.auth
              ? <Redirect to='/' />
              : <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />
          <Route exact path='/register' render={() => (
            this.state.auth
              ? <Redirect to='/' />
              : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />
          <Route exact path='/elections' render={() => (
            !this.state.auth
              ? <Redirect to='/login' />
              : <Controller user={this.state.user} currentPage='elections' />
          )} />
          <Route exact path='/share' render={() => (
            !this.state.auth
              ? <Redirect to='/login' />
              : <Controller user={this.state.user} currentPage='share' />
          )} />

        </div>
      </Router>
    )
  }
}

export default App;
