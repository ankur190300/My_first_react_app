import React, { Component } from 'react'

export class Conditional_greeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

        //method 1
        return(
            this.state.isLoggedIn
            ?<div>Hello Ankur ! How are you doing ?</div>
            :<div>Who's this?</div>
        )

        // method 2
        // let message

        // if( this.state.isLoggedIn) {message= <div>Hello Ankur ! How are you doing ?</div>}
        // else{ message = <div>Who's this </div>}
        // return (
        //     <div>{message}</div>
        // )// would not work without <div></div> tag 

        // method 3
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //         Hello Ankur ! How are you doing ?
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             Who's this ? 
        //         </div>
        //     )
        // }

        
    }
}

export default Conditional_greeting
