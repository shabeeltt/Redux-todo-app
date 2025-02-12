import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleToDo } from "./redux/actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((item) => item.todo.todo);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure ?");
    if (confirmDelete) {
      dispatch(removeTodo(id));
    }
  };

  const handleToggle = (item) => {
    dispatch(toggleToDo(item));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      {todo.length > 0 ? (
        <ul className="todo-list">
          {todo.map((item) => (
            <li className="todo-item" key={item.id}>
              <p className={`todo-task ${item.completed ? "completed" : ""}`}>
                {item.task}
              </p>
              <button
                className="todo-button delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="todo-button toggle-button"
                onClick={() => handleToggle(item)}
              >
                {item.completed ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-todo">NOTHING TO DO</p>
      )}
    </div>
  );
};

export default TodoList;
