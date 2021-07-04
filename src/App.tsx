import React, { useState } from "react";
import "./App.css";

// components
import Block from "./components/Block";

// Block Interface
export interface IState {
  blockchain: {
    content: string;
    hash: string;
  }[];
  block: {
    content: string;
    hash: string;
  };
}

function App() {
  const [blockchain, setBlockchain] = useState<IState["blockchain"]>([]);

  return (
    <div className='App'>
      <h1>Hello world</h1>
      <Block />
    </div>
  );
}

export default App;
