import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs"

const BackLog = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div>Backlog</div>
            <div><BsThreeDotsVertical/></div>
        </div>
        <div>
            Add task
        </div>
    </div>
  )
}

export default BackLog