import React from "react";

import "./BookCard.scss";

const BookCard = (props) => {
  const { book } = props;
  return (
    <div className="bookcard">
      <div>
        <span>Title: </span> <span>{book.title}</span>
      </div>
    </div>
  );
};

export default BookCard;
