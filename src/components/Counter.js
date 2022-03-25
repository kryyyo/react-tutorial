import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // this.state.count += 1
        // console.log(this.state.count) //asynchronous so you really need to use setState

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('Callback Value', this.state.count)})

        console.log(this.state.count)   //asynchronous, called before setting the state

        //solution: add another parameter in the setState. it will contain the function you want to execute AFTER setting the state

        //for multiple setting state: 
        //you need to use parameters of prevState
        //props is the 2nd parameter if you need to use it
        //@useState, this is already included! 
        this.setState((prevState, props) => ({
            count: prevState.count + props.addvalue
        }))
    }

    incrementFive() {
        //grouping multiple setState to a SINGLE update!!!
        //this will only return 1 state (the current state)
        // so you need to use parameters of prevState
        //
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


  render() {
    return (
        <div>
            <div>
                Count - {this.state.count}
            </div>

            <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter;