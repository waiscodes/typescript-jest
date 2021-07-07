import React from "react";
import { IState as Props } from "../App";
import "../css/Blockchain.css";

// Components
import AddBlock from "./AddBlock";
import Block from "./Block";

// Block interface
interface IProps {
  setBlockchain: React.Dispatch<React.SetStateAction<Props["blockchain"]>>;
  blockchain: Props["blockchain"];
}

const Blockchain: React.FC<IProps> = ({ blockchain, setBlockchain }) => {
  const renderBlockchain = (): JSX.Element[] => {
    return blockchain.map((block) => {
      return <Block block={block} key={block.hash} />;
    });
  };

  return (
    <div className='blockchain'>
      <h3>How Does A Blockchain Work?</h3>
      <AddBlock setBlockchain={setBlockchain} blockchain={blockchain} />
      {renderBlockchain()}
    </div>
  );
};

export default Blockchain;
