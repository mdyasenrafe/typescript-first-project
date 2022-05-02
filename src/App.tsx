import React, { useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AddTodo from "./Pages/AddTodo";
import MyTodo from "./Pages/MyTodo";

export interface Todo {
  title: string;
  description: string;
  piority: string;
  id: number;
}

function App() {
  // share value in props
  const [Todo, setTodo] = useState<Todo[] | any>([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home Todo={Todo} setTodo={setTodo} />} />
        <Route
          path="/add_todo"
          element={<AddTodo Todo={Todo} setTodo={setTodo} />}
        />
        <Route
          path="/my_todo"
          element={<MyTodo Todo={Todo} setTodo={setTodo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
