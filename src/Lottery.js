import React, { Component } from 'react';
import Ball from './Ball';


class Lottery extends Component {
    static defaultProps = {
        title: 'The Lotto',
        maxBalls: 6,
        maxNumber: 40
    }
    constructor(props){
        super(props);
        // this.state = { nums: [] }; instead of making into an empty array, instead...
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }; // length: array from 0 up to maxBalls
    }
    
    generateNumbers(){
        //Pick numbers from 1 to maxNumber and how many times is based on how many maxBalls is set to.
        

    }

    handleClick() {
        this.generateNumbers(); // MUST INVOKE () &NOT this.generateNumbers and no paranthesis. 
    }
    render() {
        return(
          <section className = 'Lottery'>
              <h1>{this.props.title}</h1>
              <div>
                  {this.state.nums.map(n => (
                  <Ball num = {n} />
                  ))}
                  {/* for our number, map over each number and return a Ball component with a num = n */}
              </div>
              <button onClick = {this.handleClick}>Click to Play</button>
          </section>
        );
    }
}

export default Lottery; 