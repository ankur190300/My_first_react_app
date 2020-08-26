
import React, {Component} from 'react'

class Welcome extends Component{
    //const {firstname, sirname} =this.props;
    
    render(){

        return <h1>implementing stateful class method- hi, {this.props.firstname} </h1>
    }

}

export default Welcome 