import React, { useState, useEffect } from 'react';
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbGenderFemme } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInsurance } from "react-icons/ai";

function PatientsDetail({patient}) {
  
  if (!patient) {
    return <p>Select patient...</p>;
  }

  return (
    <div className="p-4 items-center ">
      <div className=' flex justify-center align-middle mt-1 '>
        <img src={patient.profile_picture} alt={patient.name} 
        className="w-[12rem] h-[12rem] rounded-full mb-4" />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">{patient.name}</h1>
      </div>
     <div className=' flex gap-5 ml-5 items-center  '>
        <div className='  bg-gray-300 h-[2rem] w-[2rem] items-center justify-center flex rounded-full'>
          <MdOutlineCalendarToday className=' text-xl' />
        </div>
        <div>
          <p className=' text-sm'>Date of Birth</p>
          <p className=' font-bold text-sm'>{patient.date_of_birth}</p>
        </div>
     </div>
      <br />
      <div className=' flex gap-5 ml-5 items-center  '>
        <div className='  bg-gray-300 h-[2rem] w-[2rem] items-center justify-center flex rounded-full'>
          <TbGenderFemme className=' text-xl' />
        </div>
        <div>
          <p className=' text-sm'>Gender</p>
          <p className=' font-bold text-sm'>{patient.gender}</p>
        </div>
     </div>
     <br />
      <div className=' flex gap-5 ml-5 items-center  '>
        <div className='  bg-gray-300 h-[2rem] w-[2rem] items-center justify-center flex rounded-full'>
          <BsTelephone className=' text-xl' />
        </div>
        <div>
          <p className=' text-sm'>Contact Info</p>
          <p className=' font-bold text-sm'>{patient.phone_number}</p>
        </div>
     </div>
     <br />
      <div className=' flex gap-5 ml-5 items-center  '>
        <div className='  bg-gray-300 h-[2rem] w-[2rem] items-center justify-center flex rounded-full'>
          <BsTelephone className=' text-xl' />
        </div>
        <div>
          <p className=' text-sm'>Emergency Contact </p>
          <p className=' font-bold text-sm'>{patient.emergency_contact}</p>
        </div>
     </div>
     <br />
      <div className=' flex gap-5 ml-5 items-center  '>
        <div className='  bg-gray-300 h-[2rem] w-[2rem] items-center justify-center flex rounded-full'>
          <AiOutlineInsurance className=' text-xl' />
        </div>
        <div>
          <p className=' text-sm'>Insurance Provider</p>
          <p className=' font-bold text-sm'>{patient.insurance_type}</p>
        </div>
     </div>
      
      

     
    
     
    </div>
  );
}

export default PatientsDetail;