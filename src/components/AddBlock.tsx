import React, { useRef } from "react";
import { IState as Props } from "../App";
import sha256 from "crypto-js/sha256";
import "../css/AddBlock.css";

// Block interface
interface IProps {
  setBlockchain: React.Dispatch<React.SetStateAction<Props["blockchain"]>>;
  blockchain: Props["blockchain"];
}

const AddBlock: React.FC<IProps> = ({ setBlockchain, blockchain }) => {
  const contentRef = useRef<any>();

  const createBlock = (): void => {
    const content: string = contentRef.current.value;
    const previousHash: string = blockchain[blockchain.length - 1].hash;

    setBlockchain([
      ...blockchain,
      {
        content: content,
        hash: sha256(content + previousHash).toString(),
        previousHash: previousHash,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    createBlock();
  };

  return (
    <div className='add-block'>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={contentRef} />
        <input type='submit' value='Add Block to Blockchain' />
      </form>
    </div>
  );
};

export default AddBlock;
