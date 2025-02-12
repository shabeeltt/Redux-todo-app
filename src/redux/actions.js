export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addToDo = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
