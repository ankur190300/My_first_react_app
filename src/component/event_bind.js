import React, { Component } from 'react'

export class event_bind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    /*clickHandler(){
        this.setState(
            {
                message:"goodbye"
            }
        )
        // this keyword is undefined in class event handling methods if the event handlers are not binded 

        console.log(this);
            
        
    }*/

    clickHandler = ()=>{
        this.setState(
            {
                message:"goodbye"
            }
        )

        console.log(this);
    }

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>event_binding click</button>// 
                in this approach event is completely rerendered everytime therefore is not suitable for optimal 
                performance*/}
                {/*  <button onClick = {()=>this.clickHandler()}>event_binding click 2</button> */}
                {/*<button onClick = {this.clickHandler}>event_binding click3</button> /*binding in the constructor*/}
                <button onClick = {this.clickHandler}>event_binding click4</button>
                {/* approach 3 and  4 are preffered*/}
            </div>
        )
    }
}

export default event_bind
