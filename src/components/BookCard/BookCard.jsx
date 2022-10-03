import React from "react";

const BookCard = (props) => {
  const { book } = props;
  return <div>{book.title}</div>;
};

export default BookCard;
