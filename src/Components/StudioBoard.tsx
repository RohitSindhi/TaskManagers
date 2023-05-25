import React from "react";
import BackLog from "./BackLog";
import InProgress from "./InProgress";
import Review from "./Review";
import Complete from "./Complete";
import { BsArrowDownCircle } from "react-icons/bs"


const StudioBoard = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="border border-black w-[70vw] h-[70vh] pl-8 pr-8 pt-6">
        <div className="flex justify-between">
          <div className="text-xl text-black font-semibold flex items-center gap-3">
            <div>Studio Board</div>
            <div><BsArrowDownCircle/></div>
          </div>
          <div>Sohil</div>
        </div>

        <div className="flex flex-row justify-between items-center pt-6">
          <div><BackLog/></div>
          <div><InProgress/></div>
          <div><Review/></div>
          <div><Complete/></div>
        </div>
      </div>
    </div>
  );
};

export default StudioBoard;
