import React, { Component } from 'react';
import Ball from './Ball';

/*
Logic Ahead

Props:
    - title: title of the lottory game
    - numBalls: number of balls to display
    - maxNumber: maximum value of a ball
State: 
    - nums: array of [num, num, num, ...] for balls
Events: 
    - onClick: to regenerates the nums in state (a new set of balls/values)
*/

class Lottery extends Component {
    static defaultProps = {
        title: 'The Lotto',
        maxBalls: 6,
        maxNumber: 40
    }
    constructor(props){
        super(props);
        // this.state = { nums: [] }; maxBalls controls the state
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }; 
            // length: is equal to an array from 0 up to maxBalls
    }
    
    generateNumbers(){
        // Pick a random ranging from 1 to maxNumber.
        // maxBalls will determine how may balls/numbers to render.
            // create an array and then add them to this.state under 'nums:'
        // loop over, map over nums in state, each one build a random new number and set it state.
        
        

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
                {/* for our number, map over each number and return a Ball component with each number = n */}
              </div>
              <button onClick = {this.handleClick}>Click to Play</button>
          </section>
        );
    }
}

export default Lottery; 