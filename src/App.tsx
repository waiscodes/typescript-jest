import React, { useState } from "react";
import "./App.css";

// components
import Book from "./components/Books";

// Book Interface
interface IState {
  books: {
    title: string;
    author: string;
    upvotes: number;
    recBy: string;
  }[];
}

function App() {
  const [books, setBooks] = useState<IState["books"]>([
    {
      title: "Name of the Wind",
      author: "Patrick Rothfuss",
      upvotes: 35,
      recBy: "Birm",
    },
  ]);

  return (
    <div className='App'>
      <h1>Hello world</h1>
      <Book books={books} />
    </div>
  );
}

export default App;
