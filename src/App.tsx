import React, { useState } from "react";
import "./App.css";

// components
import Block from "./components/Block";

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
      <Block />
    </div>
  );
}

export default App;
