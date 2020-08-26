import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greethandler('ankur')}>greet the parents </button>
        </div>
    )
}

export default ChildComponent
