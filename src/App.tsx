import React, { useState } from "react";
import "./App.css";

// components
import Blockchain from "./components/Blockchain";
import AddBlock from "./components/AddBlock";

// Block Interface
export interface IState {
  blockchain: {
    content: string;
    newHash: string;
  }[];
  block: {
    content: string;
    newHash: string;
  };
}

function App() {
  const [blockchain, setBlockchain] = useState<IState["blockchain"]>([
    {
      content: "Hello, world from genesis block!",
      newHash:
        "521ec81f86658406e253b16cb7f00d967f86e91e6839a70edda8a9b01631b90a",
    },
  ]);

  return (
    <div className='App'>
      <h1>Hello world</h1>
      <AddBlock setBlockchain={setBlockchain} blockchain={blockchain} />
      <Blockchain blockchain={blockchain} />
    </div>
  );
}

export default App;
