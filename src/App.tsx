import React, { useState } from "react";
import "./App.css";

// components

// Book Interface
interface IState {
  block: {
    content: string;
    hash: string;
  }[];
}

function App() {
  const [block, setBlock] = useState<IState["block"]>([]);

  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
