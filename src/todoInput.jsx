import React, { useState } from "react";
import { addToDo } from "./redux/actions";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addToDo(task));
      setTask("");
    } else {
      alert("Enter any task....");
    }
  };

  return (
    <div className="todo-input-container">
      <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
        <input
          className="todo-input"
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit" className="todo-submit-button">
          Add Task
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoInput;
