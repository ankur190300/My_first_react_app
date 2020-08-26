//rce -shortcut
import React, { Component } from 'react'

export class class_click extends Component {

    class_click(){
        console.log('clicked in class component');
    }
    render() {
        return (
            <div>
                <button onClick={this.class_click}>C_click</button>
            </div>
        )
    }
}

export default class_click


