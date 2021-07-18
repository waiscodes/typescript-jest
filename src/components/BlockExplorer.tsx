import React from "react";
import axios from "axios";

const BlockExplorer = () => {
  axios.get("https://chain.api.btc.com/v3/block/3").then((res) => {
    if (res.data.items) {
      console.log(res.data.items);
    }
  });

  return (
    <div>
      <h1>Hello world from the block explorer component</h1>
    </div>
  );
};

export default BlockExplorer;
