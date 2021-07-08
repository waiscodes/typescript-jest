import React, { useRef } from "react";

const Sha256 = () => {
  const hashRef = useRef<any>();

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={hashRef} />
        <input type='submit' value='Check SHA256 Hash' />
      </form>
    </div>
  );
};

export default Sha256;
