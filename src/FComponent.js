import React, {useContext} from 'react'
import { ContextApiComponent } from './ContextApiComponent';

function FComponent() {
    const {counter, setCounter} = useContext(ContextApiComponent);


    return (
        <div>
            <h1>Function Component</h1>
            <div>
                <div>{counter}</div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
            <FChild/>
        </div>
    )
}

const FChild = () => {
    const {counter, setCounter} = useContext(ContextApiComponent);
    return (
        <div>
            <h1>Child Component</h1>
            <div>
                <div>{counter}</div>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    );
}

export default FComponent;
