import React, {Component} from 'react'

class Message extends Component{
    constructor(){

        super()
        this.state= {
            message: "hi, "
        }
        
    }

    showIdentity(){
        this.setState({

            message:"ankur tiwari is your real name, "
        })
    }


    render(){

        return(
             <div>
            <h1>{this.state.message} {this.props.firstname}</h1>
            <button onClick={()=>this.showIdentity()}> tap to reveal identitiy</button>
            </div>
        )
    }

}

export default Message