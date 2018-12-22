import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
    <div className="App">
        <p className="description">Миру-мир, студентам - beer</p>
    </div>
        );
}

const rootEl = document.getElementById("root");
ReactDOM.render(<App />, rootEl);