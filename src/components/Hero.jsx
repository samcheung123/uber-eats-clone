import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="max-h-[500px] relative">
        <div className="absolute h-full w-full max-h-[500px] bg-black-40 text-gray-200 font-bold text-3xl md:text-6xl flex flex-col justify-center gap-3 p-4 md:gap-10">
          <p>
            The <span className="text-orange-500">Best</span>
          </p>
          <p>
            <span className="text-orange-500">Foods</span> Delivered
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="max-h-[500px] w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
