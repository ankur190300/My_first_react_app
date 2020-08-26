import React, { Component } from 'react'

export class counter extends Component {
    constructor(){
        super();
        this.state= {
            time:1,
        }
    }
    increment(){
       // this.state.time= this.state.time+1;
       // this will change the value of the variable but will not rerender the changes in UI


        /*this.setState({
            time: this.state.time +1
        }, ()=>{console.log('call_back value', this.state.time)})*/ // this is synchronous and will work only after setState is finish 
        // need to use single quote(') in console.log rather than double quote(")
        // this method was grouping multiple setState calls 

        this.setState((prevState,props)=>({
            time:prevState.time+1
        }),()=>{console.log('call_back value', this.state.time+1)})

        
        
        console.log(this.state.time); // this logs the value later than the current value as setState function is asynchronous  
    }

    increment_five(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

        // only one state is incremented as the compiler can combine multiple setState calls 
    }


    render() {
        return (
            <div>
                {this.state.time}
                <button onClick={()=>{this.increment_five()}}>increment</button>
            </div>
        )
        console.log(this.state.time); 
    }
}

export default counter
