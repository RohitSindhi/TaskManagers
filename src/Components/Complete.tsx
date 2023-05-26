import Naushad from '../assets/Naushad.jfif'
import React, { useState } from "react";

import { BsThreeDotsVertical, BsChatRightText } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlinePaperClip } from "react-icons/ai";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RxCross2 } from "react-icons/rx";

const Complete = () => {
  const [notesData, setNoteData] = useState([
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

  const handleColumnChange = (result: any) => {
    if (!result.destination) {
      return;
    }
    const list: any = Array.from(notesData);
    const [removed] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, removed);
    setNoteData(list);
  };

  return (
    <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-[#F6F8FB]">
      <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
        <div className="font-semibold">Complete</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>

      <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section">
        <DragDropContext onDragEnd={handleColumnChange}>
          <Droppable droppableId={"2"}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {notesData.map((ele: any, index: any) => {
                  return (
                    <Draggable
                      key={ele?.id}
                      draggableId={ele?.id}
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
                          <div className="flex items-center justify-between">Low Priority<RxCross2 className='cursor-pointer' /></div>                          <div>{ele?.name}</div>
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
                                <img src={Naushad} alt="" className="w-6 h-6 rounded-full" />
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

      <div className="flex justify-center items-center text-[16px] gap-2 h-12">
        <div className="cursor-pointer">Add task</div>
        <div className="cursor-pointer">
          <AiOutlinePlusCircle />
        </div>
      </div>
    </div>
  );
};

export default Complete;
