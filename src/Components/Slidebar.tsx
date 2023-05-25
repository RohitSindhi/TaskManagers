import React from 'react'
import { RiGroupLine } from 'react-icons/ri';
import { CgDatabase } from 'react-icons/cg';
import { MdInsertChart } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi2';


const Slidebar = () => {
  return (
    <div className='w-[8vw] h-[76.5vh] relative bottom-12 bg-white drop-shadow-lg'>
        <div className='h-[3rem] flex items-center justify-center font-semibold text-white w-[100%] bg-[#878FDC]'>

        <h1>hussle</h1>
        </div>
        <div className='w-[100%] h-[10vh] mt-[1rem] flex flex-col items-center'>
            <RiGroupLine/>
            <span>Managers</span>
        </div>
        <div className='w-[100%] h-[10vh] flex flex-col items-center'>
            <CgDatabase/>
            <span>Boards</span>
        </div>
        <div className='w-[100%] h-[10vh] flex flex-col items-center'>
            <HiOutlineCalendar/>
            <span>schedual</span>
        </div>
        <div className='w-[100%] h-[10vh] flex flex-col items-center'>
            <MdInsertChart/>
            <span>Reports</span>
        </div>

    </div>
  )
}

export default Slidebar