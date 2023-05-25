import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs"

const Review = () => {
  return (
    <div>
        <div className='flex justify-between items-center w-[15vw] border border-black'>
            <div>Review</div>
            <div><BsThreeDotsVertical/></div>
        </div>
        <div>
            Add task
        </div>
    </div>
  )
}

export default Review