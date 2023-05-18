import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm flex flex-col items-center border-4 rounded-md border-blue-500 w-fit">
      <img src="https://placehold.co/200x300" alt="placeholder" />
      <div className=" object-contain flex flex-col items-center">
        <h1 className="border-b-2 border-gray-500 text-4xl text-center">
          Titulo
        </h1>
        <p className="inline-block border-b-2 border-gray-500 text-lg text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt dolores perspiciatis ratione accusamus commodi qui provident aut obcaecati vero cupiditate? Laboriosam facilis quaerat similique ea optio, dignissimos laudantium vero?
        </p>
        <button className="bg-blue-800 px-2 rounded-full mb-2">
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
