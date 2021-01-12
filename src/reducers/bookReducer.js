import { ADD_BOOK, REMOVE_BOOK } from "../constants/bookConstants";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.id,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
