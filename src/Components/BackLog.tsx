// import { useEffect, useState } from "react";
import Faizan from '../assets/Faizan.jfif'
import React, { useEffect, useRef, useState } from "react";

import { BsThreeDotsVertical, BsChatRightText } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlinePaperClip, AiFillDelete, AiTwotoneDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md";

const BackLog = () => {
  const [backlogInputVal, setBacklogInputVal] = useState("");
  const [newDataVal, setNewDataVal]:any = useState(false);
  const [getData, setGetData]: any = useState([]);
  const [isPageLoaded, setIsPageLoaded]:any = useState(false);


  const scrollRef:any = useRef();

  useEffect(()=>{

    if(newDataVal){
      document.getElementById("1000")?.focus()
    }

  },[newDataVal])


  useEffect(() => {
      axios
        .get(`http://192.168.1.186:8080/note/get`)
        .then((res: any) => {
          setGetData(res?.data?.data);
        })
        .catch((err: any) => {
          // console.log("err<><><>", err);
        });
    

  }, [newDataVal, isPageLoaded]);


  const addTaskFun = () => {

    if(backlogInputVal?.length > 0){
      axios
        .post(`http://192.168.1.186:8080/note/add`, {
          notes: backlogInputVal,  
        })
        .then((response) => {
          setNewDataVal(false);
          setBacklogInputVal("")
          
        })
        .catch((error) => {});
    }else{
      alert('Add backlog Task')
    }
  };

  const deletFun =(ele:any)=>{
    
    setIsPageLoaded(!isPageLoaded)
    axios
      .delete(`http://192.168.1.186:8080/note/delete/${ele.id}`).then((res:any)=>{
      })
  }



  const handleColumnChange = (result: any) => {
    if (!result.destination) {
      return;
    }
    const list: any = Array.from(getData);
    const [removed] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, removed);
    setGetData(list);
  };

  console.log("getData",getData)

  return (
    <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-[#F6F8FB]">
      <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
        <div className="font-semibold">Backlog</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>

      <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section" ref={scrollRef}>
        <DragDropContext onDragEnd={handleColumnChange}>
          <Droppable droppableId={"1"}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {getData?.length > 0 &&
                  getData?.map((ele: any, index: any) => {
                    return (
                      <Draggable
                        key={ele?.id}
                        draggableId={ele?.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            key={ele?.id}
                            className="pt-1 pb-1 border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2"
                          >
                            <div className="flex items-center justify-between w-[100%]"><span className="w-[80%] overflow-hidden">{ele?.notes}</span><AiFillDelete onClick={()=>deletFun(ele)} className='text-[red] text-lg cursor-pointer'/></div>
                            <div className="flex justify-between items-center w-[100%]"><span className="w-[80%] overflow-hidden">{ele?.notes}</span><RxCross2 onClick={()=>deletFun(ele)} className='cursor-pointer'/></div>
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
                              <div className="flex items-center gap-[2px]">
                                <div>
                                  <AiOutlinePlusCircle className="w-[26px] h-[26px] text-[darkgray]" />
                                </div>
                                <div>
                                  <img src={Faizan} alt="" className="w-6 h-6 rounded-full"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
                
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {newDataVal && (
          <div className="pt-1 pb-1 border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
            <textarea
                id="1000"
              className="outline-none resize-none w-[13vw] h-[12vh] pl-1 pt-1"
              // type="text"
              value={backlogInputVal}
              placeholder="create new backlog task"
              onChange={(e: any) => setBacklogInputVal(e.target.value) 
              }
            />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center text-[16px] gap-2 h-12">
        <div
          className="w-max flex justify-center items-center gap-2 cursor-pointer"
          onClick={() => setNewDataVal(true)}
        >
          {newDataVal ? (
            <div className="flex justify-between">
              <button
              
                className="border text-sm text-white p-1 rounded-md bg-[#878FDC] w-[5rem]"
                onClick={addTaskFun}
              >
                AddTask
              </button>
              <button className="border text-sm text-white rounded-md p-1 w-[5rem] bg-black" onClick={()=>setNewDataVal(false)}>
                Cancle
              </button>
            </div>
          ) : (
            <>
              <div className="cursor-pointer">Add task</div>
              <div className="cursor-pointer">
                
                <AiOutlinePlusCircle />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackLog;
