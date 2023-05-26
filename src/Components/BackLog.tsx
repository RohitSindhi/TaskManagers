import React, { useEffect, useState } from "react";

import { BsThreeDotsVertical, BsChatRightText } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlinePaperClip } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BackLog = () => {
  const [backlogInputVal, setBacklogInputVal] = useState("");
  const [newDataVal, setNewDataVal] = useState(false);
  const [getData, setGetData]: any = useState([]);
  const [justCheck, setJustCheck] = useState(false)


 
 
  
  

  useEffect(() => {

    if(newDataVal){
      return
    }

    axios
      .get(`http://192.168.1.186:8080/note/get`)
      .then((res: any) => {
        setGetData(res?.data?.data);
      })
      .catch((err: any) => {
        // console.log("err<><><>", err);
      });
  }, [newDataVal]);
  

  const addTaskFun = () => {

    if(backlogInputVal?.length > 0){
      axios
        .post(`http://192.168.1.186:8080/note/add`, {
          notes: backlogInputVal,
          
          
        })
        .then((response) => {
          
          
          setNewDataVal(false);
        })
        .catch((error) => {});
    }else{
      alert('Add backlog Task')
    }
  };

  const deletFun =(ele:any)=>{
    
// console.log('ele>>>>',ele)

    axios
      .delete(`http://192.168.1.186:8080/note/delete/${ele.id}`).then((res:any)=>{
console.log('bsdketakle',res);

       
       
        
        
      })
  }



  const handleColumnChange = (result: any) => {
    if (!result.destination) {
      return;
    }
    const list: any = Array.from(getData);
    const [removed] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, removed);
    localStorage.setItem("Backlog", JSON.stringify(list));
      setGetData(list);
  };


  useEffect(()=>{
    let fullData: any = localStorage.getItem("Backlog" || []);
    let newData = JSON.parse(fullData);

    setGetData(newData)
    console.log("newData",newData)

  },[setGetData])



   console.log("getData",getData)
   console.log("justCheck",justCheck)



  // const backlogAddtask = () => {
  //   setNewDataVal(true);
  //   if (backlogInputVal.length > 0) {
  //     localStorage.setItem("Backlog", JSON.stringify(backlogInputVal));
  //   }
  //   let fullData: any = localStorage.getItem("Backlog" || []);
  //   let newData = JSON.parse(fullData);
  //   if (newData == null) {
  //     setGetData([]);
  //   }

  //   else{
  //     if(backlogInputVal.length > 0){
  //       setGetData([...getData, newData]);
  //     }
  //   }
  //   setBacklogInputVal("");
  // };

  // useEffect(()=>{
  //   let fullData: any = localStorage.getItem("Backlog" || []);
  //   let newData = JSON.parse(fullData);
  //   setGetData([newData])
  // },[])

  return (
    <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-transparent">
      <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
        <div className="font-semibold">Backlog</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>

      <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section">
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
                            <div className="flex justify-between">{ele?.notes}<RxCross2 onClick={()=>deletFun(ele)} className='cursor-pointer'/></div>
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
            <div>
              <button
              
                className="border text-sm text-white p-1 bg-[#878FDC]"
                onClick={addTaskFun}
              >
                AddTask
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
