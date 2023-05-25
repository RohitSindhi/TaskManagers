import React,{useState} from 'react'
import { RiGroupLine } from 'react-icons/ri';
import { CgDatabase } from 'react-icons/cg';
import { MdInsertChart } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi2';


const Slidebar = () => {
    const [managers , setManagers]= useState(false)
    const [boards , setBoards]= useState(false)
    const [schedual , setSchedual]= useState(false)
    const [Reports , setReports]= useState(false)

    
  return (
    <div className='w-[8vw] h-[76.5vh] relative bottom-12 bg-white drop-shadow-lg'>
        <div className='h-[3rem] flex items-center justify-center font-semibold text-white w-[100%] bg-[#878FDC]'>

        <h1>hussle</h1>
        </div>
        <div className={managers  ? 'text-[#2a4e85] bg-[#ebecebec] cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':' cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setManagers(true);setBoards(false);setSchedual(false);setReports(false)}}>
            <RiGroupLine className='text-xl'/>
            <span className='font-semibold'>Managers</span>
        </div>
        <div className={boards  ? 'text-[#2a4e85] bg-[#ebecebec]  cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':' cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setBoards(true);setManagers(false);setSchedual(false);setReports(false)}}>
            <CgDatabase className='text-xl'/>
            <span className='font-semibold'>Boards</span>
        </div>
        <div className={schedual  ? 'text-[#2a4e85] bg-[#ebecebec]  cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':' cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center bg-white'} onClick={()=>{setSchedual(true);setBoards(false);setManagers(false);setReports(false)}}>
            <HiOutlineCalendar className='text-xl'/>
            <span className='font-semibold'>Schedual</span>
        </div>
        <div className={Reports  ? 'text-[#2a4e85] bg-[#ebecebec]  cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center': ' cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setReports(true);setSchedual(false);setBoards(false);setManagers(false);}}>
            <MdInsertChart className='text-xl'/>
            <span className='font-semibold'>Reports</span>
        </div>

    </div>
  )
}

export default Slidebar