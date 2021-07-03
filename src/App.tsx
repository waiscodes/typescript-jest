import React from "react";
import "./App.css";

// components
import Book from "./components/Books";

// Book Interface
interface IProps {
  book: {
    title: string;
    author: string;
    upvotes: number;
    recBy: string;
  };
}

function App() {
  return (
    <div className='App'>
      <h1>Hello world</h1>
      <Book />
    </div>
  );
}

export default App;
