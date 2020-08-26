//rfce -shortcut
import React from 'react'

function functional_click() {
    function clickHandler(){
        console.log('button is clicked in functional_click');
    }
    return (
        <div>
            <button onClick={clickHandler}>f_click</button> 
        </div>
    )
    // not clickHandler() as that would call the function itself 
}

export default functional_click
