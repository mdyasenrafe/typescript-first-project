import React from "react";
import { Todo } from "../App";
import AddTodo from "./AddTodo";

export const Home = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (vlaue: [Todo]) => void;
}) => {
  return (
    <div>
      <AddTodo Todo={Todo} setTodo={setTodo} />
    </div>
  );
};
