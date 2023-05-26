import { useState } from "react";
import BackLog from "./BackLog";
import InProgress from "./InProgress";
import Review from "./Review";
import Complete from "./Complete";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import Header from "./Header";
import Slidebar from "./Slidebar";
import '../Style/StudioBoard.css'
import { HiOutlinePlus } from "react-icons/hi2";
import Naushad from '../assets/Naushad.jfif'
import Akram from '../assets/Akram.jfif'
import Sharif from '../assets/Sharif.jfif'
import Faizan from '../assets/Faizan.jfif'
import OpenPopup from "./OpenPopup";
import TaskDyna from "./TaskDyna";

const StudioBoard = () => {
  const [icon, setIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const tasks = ["Backlog", "InProgress", "Review", "Complete"]

  return (
    <div className=" studio-main-div-for-backgound flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <Header />
      <div className="flex flex-row w-[86vw]">
        <Slidebar />
        <div className="w-[70vw] h-[70vh] shadow-xl pl-8 pr-8 pt-6 bg-[#EEF2F9]">
          <div className="flex justify-between">
            <div className="text-xl text-black font-semibold flex items-center gap-3">
              <div className="cursor-pointer">Studio Board</div>
              <div onClick={() => setIcon(!icon)} className="cursor-pointer">
                {!icon ? <BsArrowDownCircle /> : <BsArrowUpCircle />}
              </div>
            </div>


            <div className="flex justify-center items-center flex-row-reverse">
              <button
                className={`${isMenuOpen ? 'rotate-[133deg] border border-gray-400' : 'bg-[#93A9FB]'
                  } ${isMenuOpen? 'text-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-300 ease-in-out transform hover:scale-110':'text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-300 ease-in-out transform hover:scale-110'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <HiOutlinePlus />
              </button>
              <ul
                className={`${isMenuOpen ? 'translate-x-0 transform opacity-100 cursor-pointer' : 'opacity-0 translate-x-6'
                  } transition-all duration-300 ease-in-out transform mr-3 flex gap-3`}
              >
                <li className="">
                  <img src={Naushad} alt="" className="rounded-full w-10 h-10" />
                </li>
                <li className="">
                  <img src={Akram} alt="" className="rounded-full w-10 h-10" />
                </li>
                <li className="">
                  <img src={Sharif} alt="" className="rounded-full w-10 h-10" />
                </li>
                <li className="">
                  <img src={Faizan} alt="" className="rounded-full w-10 h-10" />
                </li>
              </ul>
            </div>


          </div>

          <div className="flex flex-row justify-between gap-5 items-start pt-6">
            {!icon && (
              <>
                {/* <div>
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
                </div> */}
                {
                  tasks.map((task:any, index:any) => {
                    return(
                      <div>
                        <TaskDyna task={task} index={index}/>
                      </div>
                    )
                  })
                }
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
