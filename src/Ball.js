import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    // state-less component; no need for a constructor
    render(){
        return(
          <div className="Ball">
              {this.props.num}
          </div>
        );
    }
}

export default Ball;