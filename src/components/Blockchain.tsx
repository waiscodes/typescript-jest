import React from "react";
import { IState as Props } from "../App";

// Block interface
interface IProps {
  block: Props["block"];
}

const Blockchain = () => {
  return (
    <div>
      <h1>Hello world from the blockchain component</h1>
    </div>
  );
};

export default Blockchain;
