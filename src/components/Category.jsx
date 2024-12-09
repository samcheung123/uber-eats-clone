import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-orange-500 font-bold text-2xl md:text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-slate-100 rounded-lg flex justify-between items-center px-4 "
          >
            <p className="font-bold text-slate-700">{item.name}</p>
            <img
              className="w-20 object-cover"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
