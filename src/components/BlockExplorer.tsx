import React, { useEffect } from "react";
import axios from "axios";

const BlockExplorer = () => {
  useEffect(() => {
    axios.get("https://mynano.ninja/api/blockcount").then((res) => {
      if (res.data.items) {
        console.log(res.data.items);
      } else {
        console.log("hello world");
      }
    });
  }, []);

  return (
    <div>
      <h1>Hello world from the block explorer component</h1>
    </div>
  );
};

export default BlockExplorer;
