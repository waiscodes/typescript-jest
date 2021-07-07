import React from "react";
import { IState as Props } from "../App";
import "../css/Blockchain.css";

// Components
import Block from "./Block";

// Block interface
interface IProps {
  blockchain: Props["blockchain"];
}

const Blockchain: React.FC<IProps> = ({ blockchain }) => {
  const renderBlockchain = (): JSX.Element[] => {
    return blockchain.map((block) => {
      return <Block block={block} key={block.hash} />;
    });
  };

  return (
    <div className='blockchain'>
      <h3>How Does A Blockchain Work?</h3>
      {renderBlockchain()}
    </div>
  );
};

export default Blockchain;
