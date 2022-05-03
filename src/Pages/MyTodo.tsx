import React, { useState } from "react";
import Swal from "sweetalert2";
import { Todo } from "../App";
import { Toast } from "../Components/Toast";

const MyTodo = ({
  Todo,
  setTodo,
}: {
  Todo: [];
  setTodo: (value: [Todo]) => void;
}) => {
  const getTodo = JSON.parse(localStorage.getItem("todos") || "[]");
  const [uniqueArray, setUniqueArray] = useState<Todo[]>(getTodo);

  const handleDelete = (id: number): void => {
    Swal.fire({
      title: "Do you want to delete this Todo?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let deleteTodo = uniqueArray.filter((todo) => todo.id !== id);
        setUniqueArray(deleteTodo);
        localStorage.setItem("todos", JSON.stringify(deleteTodo));
        Toast.fire({
          icon: "success",
          title: "Delete successfully",
        });
      }
    });
  };
  return (
    <section className="mx-auto container px-12">
      <h1 className="font-bold text-lg text-center my-6">My Todo</h1>
      {uniqueArray.length !== 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-10 h-full">
          {uniqueArray.map((data, index) => (
            <div
              key={index}
              className="bg-white border-x shadow-lg p-8 rounded-[50px] w-100 h-full flex flex-col"
            >
              <div className="flex-auto">
                <h1 className="text-[24px]">
                  <span className="font-semibold">Title </span>:{" "}
                  <span> {data?.title}</span>
                </h1>
                <p className="mt-2">
                  <span className="font-semibold">Description </span>:{" "}
                  {data?.description}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Piority : </span>
                  <span> {data?.piority}</span>
                </p>
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => handleDelete(data?.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-[26px] font-bold text-center">
          Nothing Found. Please Add Todo!
        </h1>
      )}
    </section>
  );
};

export default MyTodo;
