import React from "react";
import { Todo } from "../App";

const MyTodo = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (value: [Todo]) => void;
}) => {
  const getTodo = localStorage.getItem("");
  return (
    <section className="mx-auto container px-12">
      <h1 className="font-bold text-lg text-center my-6">My Todo</h1>
      {Todo.length !== 0 && Todo.map((data, index) => <h1>{data}</h1>)}
    </section>
  );
};

export default MyTodo;
