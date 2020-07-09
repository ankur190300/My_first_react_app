import React from 'react'

const jsx_greet = ()=>{

    // return (// using jsx
    //     <div>
    //     <h1>Hola this is ankur </h1>
    //     </div>
    // )

    return React.createElement('div', {id:"yo", className:"temp_class"}, React.createElement('h1', null, "Hola this is ankur"));// without using jsx 
    // class attribute is reserved in React therefore we use className
}

export default jsx_greet