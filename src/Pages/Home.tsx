import React from "react";
import { Todo } from "../App";
import AddTodo from "./AddTodo";
import MyTodo from "./MyTodo";

export const Home = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (vlaue: [Todo]) => void;
}) => {
  const getTodo = JSON.parse(localStorage.getItem("todos") || "[]");
  return (
    <div>
      {getTodo.length == 0 ? (
        <AddTodo Todo={Todo} setTodo={setTodo} />
      ) : (
        <MyTodo Todo={Todo} setTodo={setTodo} />
      )}
    </div>
  );
};
