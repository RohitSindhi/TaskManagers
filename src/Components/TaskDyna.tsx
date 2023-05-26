import axios from "axios";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  AiFillDelete,
  AiOutlinePaperClip,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsChatRightText, BsThreeDotsVertical } from "react-icons/bs";

import naushad from "../assets/Naushad.jfif";

const TaskDyna = ({ task, index }: any) => {
  const [deletData, setDeletData] = useState(false);
const [showTextarea, setShowTextarea] = useState(false);

const [textareaValue, setTextareaValue] = useState("");
const [pageLoaded, setPageLoaded] = useState(false)


  const [mappedTaskData, setmappedTaskData] = useState([
    {
      name: "Anwar",
      id: "105",
    },
    {
      name: "Neha",
      id: "106",
    },
    {
      name: "Naushad",
      id: "107",
    },

    {
      name: "Dhruv",
      id: "108",
    },
  ]);

  useEffect(() => {
    axios
      //   .get(`http://192.168.1.186:8080/${task}`)
      .get(`http://192.168.1.186:8080/note/get`)
      .then((res: any) => {
        setmappedTaskData(res?.data?.data);
      })
      .catch((err: any) => {
        // console.log("err<><><>", err);
      });
  }, [task, deletData, pageLoaded]);

  const addAllData = () => {
    axios
      .post(`http://192.168.1.186:8080/note/add`, {
        notes: mappedTaskData,
      })
      .then((res: any) => {
        console.log("res>>>", res);
      });
  };
  addAllData();

  const deletCard = (ele: any) => {
    setDeletData(!deletData);
    axios
      .delete(`http://192.168.1.186:8080/note/delete/${ele.id}`)
      .then((res: any) => {
        // console.log('abcd',res);
      });
  };

  const handleColumnChange = (result: any) => {
    if (!result.destination) {
      return;
    }
    const list: any = Array.from(mappedTaskData);
    const [removed] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, removed);
    setmappedTaskData(list);
  };

  const addNewTask = () =>{
        axios.post(`http://192.168.1.186:8080/note/add`, {
            notes:textareaValue
        }).then((res:any)=>{
            setPageLoaded(!pageLoaded)
        }).catch((err:any)=>{
            console.log("err",err)
        })
  }

  return (
    <>
      <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-[#F6F8FB]">
        <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
          <div className="font-semibold">{task}</div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section">
          <DragDropContext onDragEnd={handleColumnChange}>
            <Droppable droppableId={index.toString()}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {mappedTaskData.map((ele: any, index: any) => {
                    // console.log("ele",ele)
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
                            <div className="flex items-center justify-between">
                              Low Priority
                              <AiFillDelete
                                className="text-lg text-[red] cursor-pointer"
                                onClick={() => deletCard(ele)}
                              />
                            </div>{" "}
                            <div>{ele?.notes}</div>
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
                                  <img
                                    src={naushad}
                                    alt=""
                                    className="w-6 h-6 rounded-full"
                                  />
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
        </div>
                  
        {
           showTextarea &&  
        <div className="w-[25vh]">
          <textarea
            name=""
            placeholder="add notes"
            id=""
            value={textareaValue}
            onChange={(e:any)=>setTextareaValue(e.target.value)}
            className="resize-none outline-none w-[24vh] h-[12vh] pt-1 pl-2"
          />
        </div>
        }

        
        {
            !showTextarea ?   <div className="flex justify-center items-center  text-[16px] gap-2 h-12">
            <div className="cursor-pointer" onClick={()=>setShowTextarea(true)}>Add task</div>
            <div className="cursor-pointer">
              <AiOutlinePlusCircle />
            </div>
          </div> : <div className="flex justify-center items-center  text-[16px] gap-2 h-12">
            <button className="border border-black pl-3 pr-3" onClick={addNewTask}>Add</button>
          </div>
        }
      


      </div>
    </>
  );
};

export default TaskDyna;
