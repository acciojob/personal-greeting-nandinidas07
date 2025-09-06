
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
     <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
      />
      {name && <h3>Hello, {name}!</h3>}
    </div>
  )
}

export default App
