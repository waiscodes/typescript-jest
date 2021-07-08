import React, { useState } from "react";
import sha256 from "crypto-js/sha256";

const Sha256 = () => {
  const [input, setInput] = useState<string>("Hello World");
  const [hash, setHash] = useState<string>(sha256("Hello World").toString());

  const createHashOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setHash(sha256(e.target.value).toString());
  };

  return (
    <div>
      <p>The Hash for "{input}" is: </p>
      <p>{hash}</p>
      <input
        type='text'
        placeholder='Hello World'
        onChange={createHashOnChange}
      />
    </div>
  );
};

export default Sha256;
