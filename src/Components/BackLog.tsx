import React, { useEffect, useState } from "react";

import { BsThreeDotsVertical, BsChatRightText } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlinePaperClip } from "react-icons/ai";

const BackLog = () => {
  const [backlogInputVal, setBacklogInputVal] = useState("");
  const [newDataVal, setNewDataVal] = useState(false);
  const [getData, setGetData]: any = useState([]);

  const backlogAddtask = () => {

    setNewDataVal(true);
    if (backlogInputVal.length > 0) {
      localStorage.setItem("Backlog", JSON.stringify(backlogInputVal));
    }
    let fullData: any = localStorage.getItem("Backlog" || []);
    let newData = JSON.parse(fullData);
    if (newData == null) {
      setGetData([]);
    }

    else{
      if(backlogInputVal.length > 0){
        setGetData([...getData, newData]);
      }
    }
    setBacklogInputVal("");
  };

  useEffect(()=>{
    let fullData: any = localStorage.getItem("Backlog" || []);
    let newData = JSON.parse(fullData);
    setGetData([newData])
  },[])

  console.log("getData",getData)


  return (
    <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-[#F6F8FB]">
      <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
        <div className="font-semibold">Backlog</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>

      <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section">
        {getData.length > 0 &&
          getData.map((ele: any) => {
            return (
              <>
                <div className="pt-1 pb-1 border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
                  <div>{ele}</div>
                  <div>Company Website redesign</div>
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-2 text-[darkgray]">
                      <div className="flex items-center text-sm gap-1">
                        <div className="">
                          <BsChatRightText className="w-3 h-3" />
                        </div>
                        <div>1</div>
                      </div>
                      <div className="flex items-center text-sm gap-1">
                        <div>
                          <AiOutlinePaperClip className="w-4 h-4" />
                        </div>
                        <div>2</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <AiOutlinePlusCircle className="w-6 h-6 text-[darkgray]" />
                      </div>
                      <div>
                        <AiOutlinePlusCircle className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        {newDataVal && (
          <div className="pt-1 pb-1 border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
            <input
              className="outline-none w-max h-max"
              type="text"
              value={backlogInputVal}
              placeholder="create new backlog task"
              onChange={(e: any) => setBacklogInputVal(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center text-[16px] gap-2 h-12">
        <div className="cursor-pointer" onClick={backlogAddtask}>
          Add task
        </div>
        <div className="cursor-pointer">
          <AiOutlinePlusCircle />
        </div>
      </div>
    </div>
  );
};

export default BackLog;
