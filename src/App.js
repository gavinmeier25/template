import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/index'

class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='nav-bar col-md'>
        <p> Nav Bar goes here </p>
        </div>
       
      </div>
    );
  }
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p>
