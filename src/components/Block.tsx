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
          <p>Hash: {block.newHash}</p>
          <p>Content: {block.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
