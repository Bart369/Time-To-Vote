import React, { Component } from 'react'
import Header from './components/Header'
import Controller from './components/Controller'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (  
      <Router>
        <div>
          <Header />
          <Route exact path= '/' render = {props => (<Controller currentPage='electedofficials' />)} />
          <Route exact path = '/elections' render = {props => (<Controller currentPage='elections' />)}/>
        </div>
      </Router>
    )
  }
}

export default App;
