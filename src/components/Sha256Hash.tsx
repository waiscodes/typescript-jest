import React, { useState } from "react";
import sha256 from "crypto-js/sha256";

const Sha256 = () => {
  const [hash, setHash] = useState<string>("");

  const createHashOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash(sha256(e.target.value).toString());
  };

  return (
    <div>
      <p>{hash}</p>
      <input type='text' onChange={createHashOnChange} />
    </div>
  );
};

export default Sha256;
