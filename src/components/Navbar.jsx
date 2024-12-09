import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex max-w-screen-xl mx-auto p-4 justify-between items-center">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size="30" />
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </div>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full px-2 py-1 text-sm">
          <span className="p-2 bg-black rounded-full text-white">Delivery</span>
          <span className="p-2">Pickup</span>
        </div>
      </div>
      <div className="flex items-center  justify-between bg-gray-200  p-2 rounded-full w-[200px] sm:w-[450px] lg:w-[500px]">
        <AiOutlineSearch size={"25"} />
        <input
          className="bg-transparent outline-none w-full "
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white rounded-full hidden md:flex items-center px-4 py-2 gap-2">
        <BsFillCartFill className="" size={"20"} />
        Cart
      </button>
      {nav ? (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 z-10"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed w-80 h-screen top-0 left-0 z-50 bg-white ease-in-out duration-300"
            : "fixed w-80 h-screen top-0 left-[-100%] z-50 bg-white ease-in-out duration-300"
        }
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </div>
          <AiOutlineClose
            className="mr-3 cursor-pointer"
            size={25}
            onClick={() => {
              setNav(!nav);
            }}
          />
        </div>
        <ul className="p-4 flex-col text-gray-700">
          <li className="text-xl py-4 flex items-center">
            <TbTruckDelivery size={25} className="mr-4" /> Orders
          </li>
          <li className="text-xl py-4 flex items-center">
            <MdFavorite size={25} className="mr-4" /> Favorites
          </li>
          <li className="text-xl py-4 flex items-center">
            <FaWallet size={25} className="mr-4" /> Wallet
          </li>
          <li className="text-xl py-4 flex items-center">
            <MdHelp size={25} className="mr-4" /> Help
          </li>
          <li className="text-xl py-4 flex items-center">
            <AiFillTag size={25} className="mr-4" /> Promotions
          </li>
          <li className="text-xl py-4 flex items-center">
            <BsFillSaveFill size={25} className="mr-4" /> Best Ones
          </li>
          <li className="text-xl py-4 flex items-center">
            <FaUserFriends size={25} className="mr-4" /> Invite Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
