import React, { useState } from "react";
import "./App.css";

// components
import Blockchain from "./components/Blockchain";

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
  const [blockchain, setBlockchain] = useState<IState["blockchain"]>([
    {
      content: "hello world",
      hash: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
    },
  ]);

  return (
    <div className='App'>
      <h1>Hello world</h1>
      <Blockchain blockchain={blockchain} />
    </div>
  );
}

export default App;
