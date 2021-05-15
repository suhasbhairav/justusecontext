import React, {useState} from 'react';
import './App.css';
import CComponent from './CComponent';
import FComponent from './FComponent';
import {ContextApiComponent} from "./ContextApiComponent";

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };


  return (
    <div className="App">
      <h1>Use Context Tutorial</h1>
      <div>
        <span>{counter}</span>
      </div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <ContextApiComponent.Provider value={{counter, setCounter}}>
      <FComponent />
      <CComponent />
      </ContextApiComponent.Provider>
    </div>
  );
}

export default App;
