import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css'

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
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }; 
            // length: is equal to an array from 0 up to maxBalls
            // this.state = { nums: [] }; maxBalls controls the state
        this.handleClick = this.handleClick.bind(this);
    }
    
    generateNumbers(){
        // needs to pick a random number between 1 and maxNumber
        // maxBalls will determine how may balls/numbers to render.
            // create an array and then add them to this.state under 'nums:'
        // take the logic from getting a random number, place it inside .map() and assign to this.setState.
        this.setState(currentState => ({
          nums: currentState.nums.map(
              n => Math.ceil(Math.random() * this.props.maxNumber)
          )
        }));
    }
    handleClick() {
        this.generateNumbers(); // MUST INVOKE () & NOT this.generateNumbers and no paranthesis. 
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