import React from "react";
import { ContextApiComponent } from "./ContextApiComponent";

class CComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Class Component</h1>

                <ContextApiComponent.Consumer>
                    {
                        ({counter, setCounter}) => {
                            return <div>{counter}</div>
                        }
                    }
                </ContextApiComponent.Consumer>
            </div>
        )
    }
};

export default CComponent;