import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './component/functional_component' // the identifier should start with a capital letter 
import Welcome from './component/class_component'
import JsxImplementation from './component/JavaScriptXML'

function App() {
  return (
    <div className="App">
      { /* <Greet/>
       <h1>hi</h1>
      <Welcome/>*/ }

       <JsxImplementation></JsxImplementation>
    </div>
  );
}

export default App;
