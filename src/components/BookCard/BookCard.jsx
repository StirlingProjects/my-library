import React from "react";

import "./BookCard.scss";

const BookCard = (props) => {
  const { book } = props;
  const isbn = Object.keys(book)[0];
  const details = book[isbn].details;
  const title = details.title;
  const author = details.title

  return (
    <div className="bookcard">
      <div>
        <span>Title: </span> <span>{title}</span><br />
        <span>Title: </span> <span>{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
