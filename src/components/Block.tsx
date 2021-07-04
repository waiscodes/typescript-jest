import React from "react";
import { IState as Props } from "../App";

// Block Interface
interface IProps {
  block: Props["block"];
}

const Block: React.FC<IProps> = ({ block }) => {
  return (
    <div>
      <h1>Hello world from the block component</h1>
    </div>
  );
};

export default Block;
