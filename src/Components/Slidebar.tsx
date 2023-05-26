import React,{useEffect, useState} from 'react'
import { CgDatabase } from 'react-icons/cg';
import { MdGroup, MdInsertChart } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { AiOutlineSetting } from 'react-icons/ai';


const Slidebar = () => {
    const [managers , setManagers]= useState(false)
    const [boards , setBoards]= useState(false)
    const [schedual , setSchedual]= useState(false)
    const [Reports , setReports]= useState(false)
    const [setting , setSetting]= useState(false)


    useEffect(()=>{
        setBoards(true)
    },[])
  return (
    <div className='w-[8vw] h-[76.1vh] relative bottom-12 bg-white drop-shadow-lg'>
        <div className='h-[3rem] flex items-center justify-center font-semibold text-white w-[100%] bg-[#878FDC]'>

        <h1>hussle</h1>
        </div>
        <div className={managers  ? 'text-[#2a4e85] border-l-2 border-blue-400 cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':'border-l-2 border-white cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setManagers(true);setBoards(false);setSchedual(false);setReports(false);setSetting(false)}}>
            <MdGroup className='text-xl'/>
            <span className='font-semibold text-sm'>Managers</span>
        </div>
        <div className={boards  ? 'text-[#2a4e85] border-l-2 border-blue-400 cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':'border-l-2 border-white text-[#807e7e] cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setBoards(true);setManagers(false);setSchedual(false);setReports(false);setSetting(false)}}>
            <CgDatabase className='text-xl'/>
            <span className='font-semibold text-sm'>Boards</span>
        </div>
        <div className={schedual  ? 'text-[#2a4e85] border-l-2 border-blue-400  cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center':'border-l-2 border-white text-[#807e7e] cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center bg-white'} onClick={()=>{setSchedual(true);setBoards(false);setManagers(false);setReports(false);setSetting(false)}}>
            <HiOutlineCalendar className='text-xl'/>
            <span className='font-semibold text-sm'>Schedual</span>
        </div>
        <div className={Reports  ? 'text-[#2a4e85] border-l-2 border-blue-400 cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center': 'border-l-2 border-white text-[#807e7e] cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setReports(true);setSchedual(false);setBoards(false);setManagers(false);setSetting(false)}}>
            <MdInsertChart className='text-xl'/>
            <span className='font-semibold text-sm'>Reports</span>
        </div>
        <div className={setting  ? 'mt-[9.5rem] text-[#2a4e85] border-l-2 border-blue-400  cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center': 'border-l-2 text-[#807e7e] border-white mt-[9.5rem] cursor-pointer justify-center w-[100%] h-[10vh] flex flex-col items-center'} onClick={()=>{setSetting(true);setSchedual(false);setBoards(false);setManagers(false);setReports(false)}}>
            <AiOutlineSetting className='text-xl'/>
            <span className='font-semibold text-sm'>Setting</span>
        </div>

    </div>
  )
}

export default Slidebar