import React from 'react'
import TechLogo from '../../Assests/TestLogo.jpg'
import { MdHomeFilled } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FiCreditCard } from "react-icons/fi";
import DrJose from '../../Assests/Senior Doctor.png'
import { IoSettingsSharp } from "react-icons/io5";
import { GrMoreVertical } from "react-icons/gr";

function Nav() {
  return (
      <div className='  w-full h-[6rem] flex bg-white rounded-full mt-8  p-4 justify-between gap-24 items-center max-w-[100rem]  '>
        
        <div className=' w-full  '>
          <img className='' src={TechLogo} alt="" />
        </div>

        <div className=' flex w-full gap-6'>
          <span className=' flex  gap-2 '>
            <div>
              <MdHomeFilled className=' text-xl' />
            </div>
            <div>
              <p className=' font-bold'> Overview</p>
            </div>
          </span>
       
          <div className=' flex  gap-2 bg-[#01f0d0] h-7 rounded-lg'>
            <RiGroupFill className=' text-xl' />
            <p className=' font-bold '>Patients</p>
          </div>
          <div className=' flex  gap-2'>
            <MdOutlineCalendarToday className=' text-xl' />
            <p className=' font-bold'>Schedule</p>
          </div>
          <div className=' flex  gap-2'>
            <FaRegMessage className=' text-xl' />
            <p className=' font-bold'>Message</p>
          </div>
          <div className=' flex  gap-2'>
            <FiCreditCard className=' text-xl' />
            <p className=' font-bold'>Transaction</p>
          </div>
         
        </div>
        <div className=' w-full gap-3 '>
          <div className=' flex  gap-2'>
            <img className= 'rounded-full' src={DrJose} alt="" />
            <span className=' border-r-2'>
            <p className=' font-bold'>Dr. Jose Simmons</p>
            <p className=' flex flex-col'>General Practitioner</p>
            </span>
            <div className=' flex '>
              <span className=''>
                <IoSettingsSharp className=' text-xl' />
              </span>
              <span>
                <GrMoreVertical className=' text-xl' />
              </span>
          </div>
          </div>
         
        </div> 
      
      </div>
  )
}

export default Nav
