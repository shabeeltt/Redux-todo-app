import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actions";

const initialState = {
  todo: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: Date.now(), task: action.payload, completed: false },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    default:
      return state;
  }
};
