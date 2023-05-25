import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlinePlusCircle } from "react-icons/ai"

const BackLog = () => {
  return (
    <div className='border border-black pl-2 pr-2 bg-[#F6F8FB]'>
        <div className='flex justify-between items-center w-[15vw] pt-2'>
            <div className='font-semibold'>Backlog</div>
            <div><BsThreeDotsVertical/></div>
        </div>
        <div className='border flex flex-col justify-between border-black h-[12vh] bg-white mt-3 pl-2 pr-2'>
            <div>Low Priority</div>
            <div>Company Website redesign</div>
            <div>
                icons
            </div>
        </div>
        <div className='flex justify-center items-center text-[16px] gap-3 h-12'>
            <div>
                Add task
            </div>
            <div>
                <AiOutlinePlusCircle/>
            </div>
        </div>
    </div>
  )
}

export default BackLog