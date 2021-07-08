import React, { useRef } from "react";

const Sha256 = () => {
  const hashRef = useRef();

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={hashRef} />
        <input type='submit' value='Add Block to Blockchain' />
      </form>
    </div>
  );
};

export default Sha256;
