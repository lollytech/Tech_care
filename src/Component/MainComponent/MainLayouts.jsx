import React from 'react'
import { IoMdSearch } from "react-icons/io";
import Chart from './Chart';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function MainLayouts() {
  return (
    <main className="grid grid-cols-4 gap-4 p-24 h-full w-full">
      <aside className="col-span-1 bg-white p-4 w-[20rem] h-full flex gap-44">
        <p className=' font-bold text-xl'>Patients</p> <IoMdSearch className=' text-xl' />
      </aside>
      <div className="col-span-3 grid grid-cols-3 gap-14 h-full w-full">
        <section className="bg-white p-4 border col-span-2  ">
          <div>
          <h1 className=' font-bold ml-4 pt-4 text-xl'>Daignosis History</h1>
          </div>
          <div className=' bg-[#f4f0fe] mt-4 flex gap-8 '>
            <div className=' flex gap-4'>
            <p className=' ml-5 pt-4'>Blood Pressure</p>
            <p>Last 6 months</p><IoIosArrowDown />
            <Chart />
            </div>
            <div className=' pt-8 '>
              <div className=' flex gap-2 '>
                <div className=' bg-[#E66FD2] h-3 w-3 rounded-full '></div>
                <p className=' font-bold'>Systolic</p>
              </div>
              <div>
                <h1 className=' text-xl font-bold'>160</h1>
              </div>
              <div className=' flex gap-2'>
              <IoIosArrowUp /><p>Higher Than Average</p>
              </div>
              <div className=' font-bold pt-4 text-xl'>
              <hr />
            </div>
            <div className=' pt-6'>
            <div className=' flex gap-2'>
                <div className=' bg-[#8c6fe6] h-3 w-3 rounded-full '></div>
                <p className=' font-bold'>Diastolic</p>
              </div>
              <div>
                <h1 className=' text-xl font-bold'>78</h1>
              </div>
              <div className=' flex gap-2'>
              <IoIosArrowDown /><p>Lower Than Average</p>
              </div>
            </div>
            </div>
          </div>
          <div className=' flex-wrap gap-20 pt-4 flex'>
              <div className=' bg-[#E0f3fa] w-[13rem] h-[13rem] rounded-3xl'> fgag</div>
              <div className=' bg-[#0c3e50] w-[13rem] h-[13rem] rounded-3xl'></div>
              <div className=' bg-[#E0f3fa] w-[13rem] h-[13rem] rounded-3xl'></div>

            </div>
        </section>
        <section className="bg-gray-100 p-4 border ">Section 2</section>
        <section className="bg-gray-100 p-4 border col-span-2">Section 3</section>
        <section className="bg-gray-100 p-4 border">Section 4</section>
    </div>
  </main>
  )
}

export default MainLayouts
