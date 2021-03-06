import React, { Component } from 'react';
// import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className = "App">
        {/* <Ball />  This will render a blank ball but for used for sanity-check check purposes */}
        <Lottery />
        <Lottery title="Mid-Day Drawing" maxNumber={10} maxBalls={4} />
      </div>
    );
  }
}

export default App;