import React from "react";
import { IState as Props } from "../App";

// Block Interface
interface IProps {
  block: Props["block"];
}

const Block: React.FC<IProps> = ({ block }) => {
  return (
    <div className='block'>
      <p>
        <b>Previous Hash: </b> {block.previousHash}
      </p>
      <p>
        <b>Hash: </b> {block.hash}
      </p>
      <p>
        <b>Content: </b> {block.content}
      </p>
    </div>
  );
};

export default Block;
