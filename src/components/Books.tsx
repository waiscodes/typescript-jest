import React from "react";

// Props Interface
interface IProps {
  books: {
    title: string;
    author: string;
    upvotes: number;
    recBy: string;
  }[];
}

const Book: React.FC<IProps> = ({ books }) => {
  const renderBooks = (): JSX.Element[] => {
    return books.map((book) => {
      return (
        <li>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.upvotes}</p>
          <p>{book.recBy}</p>
        </li>
      );
    });
  };
  return (
    <div>
      <h1>hello world from Book component</h1>
    </div>
  );
};

export default Book;
