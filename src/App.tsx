import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import { Container } from "react-bootstrap";

// components
import Blockchain from "./components/Blockchain";
import Sha256 from "./components/Sha256Hash";
import Nav from "./components/Navbar";
import BlockExplorer from "./components/BlockExplorer";

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
        <Container>
          <h1 className='title'>Interactive Blockchain Visualizer</h1>
          <Nav />
          <Switch>
            <Route exact path='/' component={Sha256} />
            <Route path='/blockchain'>
              <Blockchain
                setBlockchain={setBlockchain}
                blockchain={blockchain}
              />
            </Route>
            <Route path='/explorer' component={BlockExplorer} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
