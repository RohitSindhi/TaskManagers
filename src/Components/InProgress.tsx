import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs"

const InProgress = () => {
  return (
    <div>
    <div className='flex justify-between items-center w-[15vw] border border-black'>
        <div>InPredress</div>
        <div><BsThreeDotsVertical/></div>
    </div>
    <div>
        Add task
    </div>
</div>
  )
}

export default InProgress