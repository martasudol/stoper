import React, { Component } from 'react';
// import alarmbackground from './clock.jpg';
import './App.css';
import ManageStopwatch from './manage-stopwatch';

class App extends Component {
  render() {
    return (
      <div className="container">
            {/* <img src={alarmbackground} className="App-logo" alt="logo" /> */}
            <ManageStopwatch></ManageStopwatch>
      </div>
    );
  }
}

export default App;
