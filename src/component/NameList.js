import React from 'react'
import Clist from './child_list_renderer'

function NameList() {
    var names=['Ankur','Anvi', 'Bindu']

    const name_list= names.map(name=><h1>{name}</h1>)

    var People =[
        {
            name:'Ankur',
            age:20,
            skills:'playing guitar',
            id:1
        },
        {
            name:'Anvi',
            age:15.01,
            skills:'vella-panti',
            id:2

        }
    ]
    // const person_list= People.map(person=>(
    //     <div>Hi my name is {person.name}, my age is {person.age}, and my skills include {person.skills}</div>
    // ))

    // keys are used to order elements in the table, identify the changed items in the list 
    // const person_list = People.map(person=>(
    //     <Clist key = {person.id} person={person}></Clist>
    // ))

    // what if the a key like id is not present in the list
    //we can alternatively send index in the list as id 
    // though it has many problems
    const person_list = People.map((person, index)=>(
        <Clist key = {index} person={person}></Clist>
    ))
    

    return (
        <div>
        {person_list}
        </div>
    )
    // return (
    //     <div>
    //     {
    //         name_list
    //     }
    //     </div>
    // )
}

export default NameList
