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
  return (
    <div>
      <h1>hello world from Book component</h1>
    </div>
  );
};

export default Book;
