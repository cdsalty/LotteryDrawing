import React, { Component } from 'react';
import Ball from './Ball';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className = "App">
        {/* <Ball />  This will render a blank ball but for used for sanity-check check purposes */}
        <Ball num = {11} />
        <Ball num = {22} />
        <Ball num = {14} />
      </div>
    );
  }
}

export default App;