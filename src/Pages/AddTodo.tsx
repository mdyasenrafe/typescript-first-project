import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Todo } from "../App";

type Props = {
  setTodos: (value: Todo) => void;
};

interface IFormInputs {
  title: string;
  description: string;
  piority: string;
  id: number;
}

const AddTodo = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (vlaue: [Todo]) => void;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const naigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    data["id"] = Math.floor(10 + Math.random() * 90);
    setTodo([...Todo, data]);
    const getTodo = JSON.parse(localStorage.getItem("todos") || "[]");
    let uniqueArray = [];
    uniqueArray.push(getTodo);
    //  push get todo value in unique array
    for (const item of uniqueArray) {
      uniqueArray.push(item);
    }
    uniqueArray.push(data);
    console.log(uniqueArray);
    // if (getTodo.length !== 0) {
    //   getTodo.push(data)
    //   localStorage.setItem("todos", JSON.stringify([getTodo]));
    // } else {
    // localStorage.setItem("todos", JSON.stringify([...Todo, data]));
    // }
    // naigate("/my_todo");
  };
  return (
    <section className="mx-auto container px-12">
      <h1 className="font-bold text-lg text-center my-6">Add todo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3  mx-auto text-center">
          <input
            className="w-3/4 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Enter Your Todo Title"
            {...register("title", { required: true })}
            required
          />
        </div>
        <div className="mx-auto text-center">
          <textarea
            className="w-3/4 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[100px]"
            placeholder="Enter Your Todo Description"
            {...register("description", { required: true })}
            required
          />
        </div>
        <div className="mb-4 mx-auto text-center">
          <select
            className="w-3/4 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            aria-label="Default select example"
            {...register("piority", { required: true })}
          >
            <option>Please Select Piority</option>
            <option defaultValue="Most Importance">Most Importance</option>
            <option defaultValue="Importance">Importance</option>
            <option defaultValue="Regular">Regular</option>
          </select>
        </div>
        <div className="mb-4 mx-auto text-center">
          <input
            className="w-3/4 bg-[#233A95] border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none text-white"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
