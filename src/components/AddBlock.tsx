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

  const createBlock = (): void => {
    setBlockchain([
      ...blockchain,
      {
        content: contentRef.current.value,
        hash: sha256(contentRef.current.value).toString(),
        previousHash: blockchain[blockchain.length - 1].hash,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    createBlock();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={contentRef} />
        <input type='submit' value='Add Block to Blockchain' />
      </form>
    </div>
  );
};

export default AddBlock;
