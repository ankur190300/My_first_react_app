import React from 'react'

//  function Greet(){

//      return <h1>This app belongs to ankur tiwari copyrights reserved</h1>
//  }


// can also do 
// export const Greet = ({firstname, sirname})=> {
export const Greet = (props)=> {
    const {firstname, sirname} =props; // destructuring of the props 
    //props.firstname = "dedpoolman" props are immutable 
    console.log(props);
    return(
    <div>
    <h1>HEY, {props.firstname} {props.sirname} </h1>
    <h1>HEY, {firstname} {sirname} </h1>
    <p>
    {props.children}
    </p>
    </div>
    )
    
    // named export 
}

//export default Greet // default export 