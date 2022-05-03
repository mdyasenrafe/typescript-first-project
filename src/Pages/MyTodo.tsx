import React from "react";
import { Todo } from "../App";

const MyTodo = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (value: [Todo]) => void;
}) => {
  const getTodo = JSON.parse(localStorage.getItem("todos") || "[]");
  let uniqueArray: Todo[] = getTodo;

  return (
    <section className="mx-auto container px-12">
      <h1 className="font-bold text-lg text-center my-6">My Todo</h1>
      {uniqueArray.length !== 0 &&
        uniqueArray.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
          </div>
        ))}
    </section>
  );
};

export default MyTodo;
