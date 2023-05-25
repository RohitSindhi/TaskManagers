import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlinePlusCircle } from "react-icons/ai"

const Complete = () => {
  return (
    <div className="w-[15vw] shadow-md rounded-md pl-2 pr-2 bg-[#F6F8FB]">
    <div className="flex justify-between items-center w-[14vw] pb-2 pt-2">
      <div className="font-semibold">Complete</div>
      <div>
        <BsThreeDotsVertical />
      </div>
    </div>

    <div className="max-h-[44vh] text-sm cursor-pointer overflow-scroll all-blogs-section">
      <div className="border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
        <div>Low Priority</div>
        <div>Company Website redesign</div>
        <div>icons</div>
      </div>
      <div className="border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
        <div>Low Priority</div>
        <div>Company Website redesign</div>
        <div>icons</div>
      </div>
      <div className="border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
        <div>Low Priority</div>
        <div>Company Website redesign</div>
        <div>icons</div>
      </div>
      <div className="border flex flex-col justify-between rounded-[4px] h-[12vh] bg-white mt-3 pl-2 pr-2">
        <div>Low Priority</div>
        <div>Company Website redesign</div>
        <div>icons</div>
      </div>
    </div>

    <div className="flex justify-center items-center text-[16px] gap-2 h-12">
      <div className="cursor-pointer">Add task</div>
      <div className="cursor-pointer">
        <AiOutlinePlusCircle />
      </div>
    </div>
  </div>
  )
}

export default Complete