import React, { useState } from "react";
import { data, categories } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  console.log(data);
  console.log(categories);
  const typeFilter = (type) => {
    setFoods(data.filter((item) => item.category === type));
  };

  const priceFilter = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <h1 className="text-orange-500 font-bold text-2xl md:text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-1">
        <div className="">
          <p className="font-semibold text-gray-800">Filter Type</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              All
            </button>
            <button
              onClick={() => typeFilter("burger")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              Burgers
            </button>
            <button
              onClick={() => typeFilter("pizza")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              Pizza
            </button>
            <button
              onClick={() => typeFilter("salad")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              Salads
            </button>
            <button
              onClick={() => typeFilter("chicken")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              Chicken
            </button>
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-gray-800 ">Filter Price</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <button
              onClick={() => priceFilter("$")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              $
            </button>
            <button
              onClick={() => priceFilter("$$")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              $$
            </button>
            <button
              onClick={() => priceFilter("$$$")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              $$$
            </button>
            <button
              onClick={() => priceFilter("$$$$")}
              className="border-orange-500 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white border px-4 py-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg hover:scale-105 duration-150 pt-4 overflow-hidden"
          >
            <img
              className="w-full h-[200px] lg:h-[220px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="p-3 flex justify-between">
              <span className="font-bold">{item.name}</span>
              <span className="bg-orange-500 text-white rounded-full px-1">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
