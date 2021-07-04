import React from "react";
import { IState as Props } from "../App";

// Block Interface
interface IProps {
  block: Props["block"];
}

const Block: React.FC<IProps> = ({ block }) => {
  return (
    <div>
      <li>
        <div className='block'>
          <p>Hash: {block.hash}</p>
          <p>Content: {block.content}</p>
        </div>
      </li>
    </div>
  );
};

export default Block;
