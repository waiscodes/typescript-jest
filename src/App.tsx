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
      content: "Hello, world from genesis block!",
      hash: "521ec81f86658406e253b16cb7f00d967f86e91e6839a70edda8a9b01631b90a",
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
