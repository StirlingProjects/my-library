import React from "react";
import BookCard from "../../components/BookCard/BookCard";

import "./Library.scss";

const Library = (props) => {
  const { libraryArray } = props;

  const libraryJSX = libraryArray.map((book) => {
    return <BookCard book={book} />;
  });

  return (
    <div className="library">
      <div className="library__heading">Library</div>
      <div className="library__cards">{libraryJSX}</div>
    </div>
  );
};

export default Library;
