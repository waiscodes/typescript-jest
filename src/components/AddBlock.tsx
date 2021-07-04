import React from "react";
import { IState as Props } from "../App";

// Block interface
interface IProps {
  setBlockchain: React.Dispatch<React.SetStateAction<Props["blockchain"]>>;
  blockchain: Props["blockchain"];
}

const AddBlock: React.FC<IProps> = ({ setBlockchain, blockchain }) => {
  return (
    <div>
      <p>Hello world from add block component</p>
    </div>
  );
};

export default AddBlock;
