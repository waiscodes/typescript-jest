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
      return <Block block={block} key={block.hash} />;
    });
  };

  return (
    <div>
      <h3>Blockchain</h3>
      {renderBlockchain()}
    </div>
  );
};

export default Blockchain;
