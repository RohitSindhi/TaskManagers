import React, { useState } from "react";
import BackLog from "./BackLog";
import InProgress from "./InProgress";
import Review from "./Review";
import Complete from "./Complete";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import Header from "./Header";
import Slidebar from "./Slidebar";

const StudioBoard = () => {
  const [icon, setIcon] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <Header />
      <div className="flex flex-row w-[86vw]">
        <Slidebar />
        <div className="border border-black w-[70vw] h-[70vh] pl-8 pr-8 pt-6 bg-[#EEF2F9]">
          <div className="flex justify-between">
            <div className="text-xl text-black font-semibold flex items-center gap-3">
              <div>Studio Board</div>
              <div onClick={() => setIcon(!icon)}>
                {!icon ? <BsArrowDownCircle /> : <BsArrowUpCircle />}
              </div>
            </div>
            <div>Sohil</div>
          </div>

          <div className="flex flex-row justify-between items-center pt-6">
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
    </div>
  );
};

export default StudioBoard;
