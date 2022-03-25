import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    //   1st Approach - if/else 
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Vishwas
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

    //2nd Approach - element variables 
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishwas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

    //3rd Approach - ternary operator 
        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Vishwas</div> : 
        //     <div>Welcome Guest</div>
        // )

    //4th Approach - short circuit
        return (
            this.state.isLoggedIn && <div>Welcome Vishwas</div>
        )


    // return (
    //   <div>
    //       <div>Welcome Vishwas</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting