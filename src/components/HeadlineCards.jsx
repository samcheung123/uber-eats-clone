import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute h-full w-full bg-black/40 "></div>
          <img
            src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="max-h-[160px] md:max-h-[300px] w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full z-10 p-4 flex-col flex items-start justify-between">
            <div className="text-gray-100">
              <p className="text-2xl font-bold">New Restaurants</p>
              <p className="">Added Daily</p>
            </div>
            <button className="bg-gray-100 rounded-xl px-5 py-1 font-medium">
              Order Now
            </button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute h-full w-full bg-black/40 "></div>
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="max-h-[160px] md:max-h-[300px] w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full z-10 p-4 flex-col flex items-start justify-between">
            <div className="text-gray-100">
              <p className="text-2xl font-bold">Sun's Out, BOGO's Out</p>
              <p className="">Through 8/26</p>
            </div>
            <button className="bg-gray-100 rounded-xl px-5 py-1 font-medium">
              Order Now
            </button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute h-full w-full bg-black/40 "></div>
          <img
            src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="max-h-[160px] md:max-h-[300px] w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full z-10 p-4 flex-col flex items-start justify-between">
            <div className="text-gray-100">
              <p className="text-2xl font-bold">We Deliver Desserts Too</p>
              <p className="">Tasty Treats</p>
            </div>
            <button className="bg-gray-100 rounded-xl px-5 py-1 font-medium">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
