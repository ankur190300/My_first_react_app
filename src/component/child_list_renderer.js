import React from 'react'

function child_list_renderer({person}) {
    //console.log('aaaaa');
    return (
        <div>
        Hi my name is {person.name}, my age is {person.age}, and my skills include {person.skills}
        </div>
    )
}

export default child_list_renderer
