import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './component/functional_component' // the identifier should start with a capital letter 
import Welcome from './component/class_component'
import JsxImplementation from './component/JavaScriptXML'
import Message from './component/Message'
import Counter from './component/counter' 

function App() {
  return (
    <div className="App">
        {/*<Greet firstname = "Ankur" sirname= "Tiwari">
        I like playing badminton and guitar.
        </Greet>
        <Greet firstname = "Rahul " sirname= "Verma"></Greet>
        <Welcome firstname = "Sheikh" sirname = "Sharma"></Welcome>*/}

        {/*<Message firstname = "dedpoolman"></Message>*/}
        <Counter></Counter>
        <Greet firstname = "Rahul " sirname= "Verma"></Greet>

       {/*<h1>hi</h1>
      <Welcome/>*/ }

       {//<JsxImplementation></JsxImplementation>
      }
    </div>
  );
}

export default App;
