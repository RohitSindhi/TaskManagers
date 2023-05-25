import React from 'react'
import { CgMail ,CgProfile} from 'react-icons/cg';
import { VscBellDot } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Style/Header.css'


const Header = () => {
  return (
    <div className='main-header-div w-[100%] h-[3rem] '>

        <div className='w-[100%] h-[3rem] flex justify-between items-center pr-[2rem]'>

            <div className='flex items-center'>
                <div><button className='bg-[#878FDC] h-[3rem] w-[7rem] font-semibold text-white'>Hussle</button></div>
                <div className='bg-transparent flex items-center pl-4'><AiOutlineSearch className='absolute top-[16px] left-[8.5rem] text-white'/><input  placeholder='Search'  className=' h-[3rem] w-[20rem] pl-[2rem] placeholder:text-white outline-none bg-transparent' type="text" /></div>
            </div>
            <div className='flex items-center gap-4'>
                <CgMail className='text-2xl'/>
                <button className='text-white border-x-2 h-[3rem] w-[3.5rem] items-center flex justify-center'>
                    
                <VscBellDot />
                </button>
                <p className='flex items-center gap-3'>name<CgProfile className='text-2xl'/></p>
            </div>
        </div>
    </div>
  )
}

export default Header