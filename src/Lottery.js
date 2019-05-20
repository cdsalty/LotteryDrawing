import React, { Component } from 'react';


class Lottery extends Component {
    static defaultProps = {
        title: 'The Lotto',
        maxBalls: 6,
        maxNumber: 40
    }
    constructor(props){
        super(props);
        this.state = { nums: [] };
    }
    
    generateNumbers(){
        //Pick numbers from 1 to maxNumber based on how many maxBalls is set to.
        

    }

    handleClick() {
        this.generateNumbers(); //NOT this.generateNumbers and no paranthesis. must envoke
    }
    render() {
        return(
          <section className = "Lottery">
              <h1>{this.props.title}</h1>
              <div>
                  Balls go here...
              </div>
              <button onClick = {this.handleClick}>Click to Play</button>
          </section>
        );
    }
}

export default Lottery; 