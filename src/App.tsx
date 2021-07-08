import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

// components
import Blockchain from "./components/Blockchain";
import Sha256 from "./components/Sha256Hash";

// Block Interface
export interface IState {
  blockchain: {
    content: string;
    hash: string;
    previousHash: string;
    timestamp: Date;
  }[];
  block: {
    content: string;
    hash: string;
    previousHash: string;
    timestamp: Date;
  };
}

function App() {
  const [blockchain, setBlockchain] = useState<IState["blockchain"]>([
    {
      content: "Hello, world from genesis block!",
      hash: "521ec81f86658406e253b16cb7f00d967f86e91e6839a70edda8a9b01631b90a",
      previousHash: "Genesis-Block doesn't have a previous hash",
      timestamp: new Date("January 03, 2009 10:15:00"),
    },
  ]);

  return (
    <>
      <Router>
        <h1 className='title'>Interactive Blockchain Visualizer</h1>
        <Switch>
          <Route exact path='/' component={Sha256} />
          <Route path='/blockchain'>
            <Blockchain setBlockchain={setBlockchain} blockchain={blockchain} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
