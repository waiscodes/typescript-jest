import React, { useRef } from "react";
import { IState as Props } from "../App";
import sha256 from "crypto-js/sha256";

// Block interface
interface IProps {
  setBlockchain: React.Dispatch<React.SetStateAction<Props["blockchain"]>>;
  blockchain: Props["blockchain"];
}

const AddBlock: React.FC<IProps> = ({ setBlockchain, blockchain }) => {
  const contentRef = useRef<any>();

  console.log(sha256);

  const handleSubmit = (): void => {
    console.log("something");
  };

  return (
    <div>
      <p>Hello world from add block component</p>
      <input type='text' ref={contentRef} />
      <button onClick={handleSubmit}>Add block</button>
    </div>
  );
};

export default AddBlock;
