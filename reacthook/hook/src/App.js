import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">{/*state hook*/}
        <button onClick={() => setCount(count + 1)}/>{count}
      </header>
    </div>
  );
}

export default App;
