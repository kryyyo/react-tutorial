import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   Approach 3
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })

    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* Approach 1 - binding in the render (performance implications) */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* Approach 2 - arrow functions (performance implications) */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}

          {/* Approach 3 - binding in the constructor (best option by far) */}
          {/* <button onClick={this.clickHandler}>Click</button> */}

          {/* Approach 4 - class property as arrow functions */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

