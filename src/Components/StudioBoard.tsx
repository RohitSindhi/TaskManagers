import React, { useState } from "react";
import BackLog from "./BackLog";
import InProgress from "./InProgress";
import Review from "./Review";
import Complete from "./Complete";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import Header from "./Header";
import Slidebar from "./Slidebar";
import '../Style/StudioBoard.css'
import { HiOutlinePlus } from "react-icons/hi2";
import OpenPopup from "./OpenPopup";

const StudioBoard = () => {
  const [icon, setIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="studio-main-div-for-backgound flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <Header />
      <div className="flex flex-row w-[86vw]">
        <Slidebar />
        <div className="w-[70vw] h-[70vh] pl-8 pr-8 pt-6 bg-[#EEF2F9]">
          <div className="flex justify-between">
            <div className="text-xl text-black font-semibold flex items-center gap-3">
              <div>Studio Board</div>
              <div onClick={() => setIcon(!icon)}>
                {!icon ? <BsArrowDownCircle /> : <BsArrowUpCircle />}
              </div>
            </div>
            <div className="flex justify-center items-center flex-row-reverse">
              <button
                className={`${isMenuOpen ? 'rotate-[133deg] bg-[#93A9FB] border' : 'bg-[#93A9FB]'
                  } text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-300 ease-in-out transform hover:scale-110`}
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
              >
                <HiOutlinePlus />
              </button>
              <ul
                className={`${isMenuOpen ? 'translate-x-0 transform opacity-100' : 'opacity-0 translate-x-6'
                  } transition-all duration-300 ease-in-out transform mr-3 flex gap-3`}
              >
                <li className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                  <HiOutlinePlus />
                </li>
                <li className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                  <HiOutlinePlus />
                </li>
                <li className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                  <HiOutlinePlus />
                </li>
                <li className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                  <HiOutlinePlus />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 items-start pt-6">
            {!icon && (
              <>
                <div>
                  <BackLog />
                </div>
                <div>
                  <InProgress />
                </div>
                <div>
                  <Review />
                </div>
                <div>
                  <Complete />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <OpenPopup />
    </div>
  );
};

export default StudioBoard;
