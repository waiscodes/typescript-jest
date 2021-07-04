import React from "react";
import { IState as Props } from "../App";

// Components
import Block from "./Block";

// Block interface
interface IProps {
  blockchain: Props["blockchain"];
}

const Blockchain: React.FC<IProps> = ({ blockchain }) => {
  const renderBlockchain = (): JSX.Element[] => {
    return blockchain.map((block) => {
      return (
        <li>
          <div className='block'>
            <p>Hash: {block.hash}</p>
            <p>Content: {block.content}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Hello world from the blockchain component</h1>
    </div>
  );
};

export default Blockchain;
