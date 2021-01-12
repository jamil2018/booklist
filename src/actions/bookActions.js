import { v4 } from "uuid";
import { ADD_BOOK, REMOVE_BOOK } from "../constants/bookConstants";

export const addBook = (title, author) => {
  return {
    type: ADD_BOOK,
    book: {
      title,
      author,
      id: v4(),
    },
  };
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id,
  };
};
