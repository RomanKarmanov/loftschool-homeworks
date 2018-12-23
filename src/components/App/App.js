import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        value: ''
      };
    render() {
        return (
            <div className="App">
                <p className="description">Миру-мир, студентам - beer</p>
            </div>
        );
    }
    
}

const rootEl = document.getElementById("root");
ReactDOM.render(<App />, rootEl);