import React from "react";
import BookCard from "../../components/BookCard/BookCard";

const Library = (props) => {
  const { libraryArray } = props;

  const libraryJSX = libraryArray.map((book) => {
    return <BookCard book={book} />;
  });

  return (
    <div>
      Library
      {libraryJSX}
    </div>
  );
};

export default Library;
