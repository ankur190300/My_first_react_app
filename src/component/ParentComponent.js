import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parent_name:'shailendra and bindu'
        }
        this.greetParent= this.greetParent.bind(this); 
    }
    
    greetParent(child_name){
        alert(`Hello ${this.state.parent_name} from ${child_name}`)// es6 feature , not a react feature
        console.log('yolo') 
        // another possible implementation
        //alert('Hello'+ this.state.parent_name);
    }
    render() {
        return (
            <div>
               <ChildComponent greethandler ={this.greetParent} ></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
