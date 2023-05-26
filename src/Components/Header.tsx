import React from 'react'
import { CgMail, CgProfile } from 'react-icons/cg';
import { VscBellDot } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Style/Header.css'

const SearchSection = () => {
    return (
        <div className='flex items-center'>

            <div className='bg-transparent flex items-center pl-3'><AiOutlineSearch className='relative left-[1rem] top-[1px] text-white' /><input placeholder='Search for task' className=' h-[3rem] w-[20rem] pl-[2rem] placeholder:text-white outline-none bg-transparent' type="text" /></div>
        </div>
    )
}
const ProfileSection = () => {
    return (
        <div className='flex items-center gap-4'>
            <CgMail className='text-2xl text-white cursor-pointer' />
            <button className='text-white border-x-2 h-[3rem] w-[3.5rem] items-center flex justify-center'>

                <VscBellDot />
            </button>
            <p className='flex items-center gap-3 text-white'>name<CgProfile className='text-3xl cursor-pointer' /></p>
        </div>
    )
}

const Header = () => {
    return (
        <div className='main-header-div w-[70vw]  h-[3rem]  '>

            <div className=' flex justify-between items-center pr-[2rem]'>
                <SearchSection />
                <ProfileSection />
            </div>
        </div>
    )
}

export default Header