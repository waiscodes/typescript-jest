import React from "react";
import { IState as Props } from "../App";

// Block Interface
interface IProps {
  block: Props["block"];
}

const Block: React.FC<IProps> = ({ block }) => {
  return (
    <div>
      <div>
        <div className='block'>
          <p>Hash: {block.hash}</p>
          <p>Content: {block.content}</p>
          <p>Previous Hash: {block.previousHash}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
