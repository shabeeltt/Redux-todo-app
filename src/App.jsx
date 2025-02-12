import "./App.css";
import TodoInput from "./todoInput";
import TodoList from "./TodoList";
import { Routes, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="navbar">
          <h1>Redux Todo App</h1>
          <div className="nav-links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/todos">
              Todo List
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<TodoInput />} />
          <Route path="/todos" exact element={<TodoList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
