import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import Chart from './Chart';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Repository from '../../Assests/respiratory rate.jpg';
import Heart from "../../Assests/HeartBPM.png";
import Temprature from "../../Assests/temperature.png"
import Labresult from './Labresult';
import Patients from './Patients';
import PatientsDetail from './PatientsDetail'



function MainLayouts({}) {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };


  return (
    <main className="grid grid-cols-4 gap-4 p-24 h-full w-full">
      <aside className=" bg-white p-4 w-[22rem] rounded-3xl  flex-col">
        <div className=" flex gap-44 mb-2">
        <p className=' font-bold text-xl'>Patients</p>
         <IoMdSearch className=' text-xl' />
        </div>
        <Patients onPatientClick={handlePatientClick} />
      </aside>

      <div className="col-span-3 grid grid-cols-3 gap-14 h-full">
        <section className="bg-white p-4 rounded-3xl  col-span-2  ">
          <div>
          <h1 className=' font-bold ml-4 pt-4 text-xl'>Diagnosis History</h1>
          </div>
          <div className=' bg-[#f4f0fe] mt-4 flex gap-8 '>
            <div className=' flex flex-col gap-4'>
              <div className=' flex flex-row pt-8 gap-44'>
                <p className=' ml-5 text-xl font-bold '>Blood Pressure</p>
                <span className=' flex flex-row gap-3'>
                  <p>Last 6 months</p><IoIosArrowDown />
                </span>
              </div>
            <div className=' '>
              <Chart />
            </div>
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
          <div className=' flex-wrap gap-7 max-md:gap-20 pt-4 flex'>
              <div className=' bg-[#E0f3fa] w-[13rem] rounded-3xl'> 
                <div className=' ml-6 mt-5'>
                  <img className=' rounded-full' src={Repository} alt="" />
                </div>
                <div className=' ml-6 pt-2 '>
                  <h1 className=' text-sm'>Respiratory Rate</h1>
                  <p className=' font-bold text-2xl'>20 bpm</p>
                  <br />
                  <p className=' text-sm'>Normal</p>
                  <br />
                </div>
              </div>
              <div className=' bg-[#ffe6e9] w-[13rem] rounded-3xl'>
              <div className=' ml-6 mt-5'>
                  <img className=' rounded-full' src={Temprature} alt="" />
                </div>
                <div className=' ml-6 pt-2 '>
                  <h1 className=' text-sm'>Temperature</h1>
                  <p className=' font-bold text-2xl'>98.6<sup>o</sup>F</p>
                  <br />
                  <p className=' text-sm'>Normal</p>
                  <br />
                </div>
              </div>
              <div className=' bg-[#ffe6f1] w-[13rem] rounded-3xl'>
              <div className=' ml-6 mt-5'>
                  <img className=' rounded-full' src={Heart} alt="" />
                </div>
                <div className=' ml-6 pt-2 '>
                  <h1 className=' text-sm'>Heart Rate</h1>
                  <p className=' font-bold text-2xl'>78 bpm</p>
                  <br />
                  <div className=' flex gap-2'>
                    <IoIosArrowDown /><p className=' text-sm'>Lower Than Average</p>
                  </div>
                  <br />
                </div>
              </div>

            </div>
        </section>

        <section className="bg-white p-4 rounded-3xl   ">
          <div className=' '>
            <PatientsDetail patient={selectedPatient} />
          </div>
        </section>

        <section className="bg-white p-4 rounded-3xl col-span-2">
          <div className=''>
            <div>
            <h1 className=' font-bold ml-4 pt-4 text-xl'>Daignosis List</h1>
            </div>
            <div className=' bg-gray-50 rounded-full  h-8 p-5 m-7 flex items-center gap-40'>
              <p className=' text-sm '>Problem/Diagnosis</p>
              <p className=' text-sm w-1/2 '>Description</p>
              <p className=' text-sm w-1/2'>Status</p>
            </div>
            <div  className=' max-h-24 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-black scrollbar-thumb-rounded-lg'>
            <div className=' mt-2 ml-12 flex gap-3 justify-between   '>
              <p className=' text-sm w-1/4'>Hypertension</p>
              <p className=' text-sm w-1/2'>Chronic high blood pressure</p>
              <p className=' text-sm w-1/4 '>Under Observation</p>
            </div>
            <hr className=' mt-4' />
            <div className=' mt-3 ml-12 flex gap-3 justify-between  '>
              <p className=' text-sm w-1/4'>Type 2 Diabetes</p>
              <p className=' text-sm w-1/2'>Insulin resistance and elevated blood sugar</p>
              <p className=' text-sm w-1/4 '>Cured</p>
            </div>
            <hr className=' mt-4' />
            <div className=' mt-3 ml-12 flex gap-3 justify-between  '>
              <p className=' text-sm w-1/4'>Type 2 Diabetes</p>
              <p className=' text-sm w-1/2'>Insulin resistance and elevated blood sugar</p>
              <p className=' text-sm w-1/4 '>Cured</p>
            </div>
            <hr className=' mt-4' />
            <div className=' mt-3 ml-12 flex gap-3 justify-between  '>
              <p className=' text-sm w-1/4'>Asthma</p>
              <p className=' text-sm w-1/2'>Recurrent episodes of bronchial construction</p>
              <p className=' text-sm w-1/4 '>Inactive</p>
            </div>
            <hr className=' mt-4' />
            <div className=' mt-3 ml-12 flex gap-3 justify-between  '>
              <p className=' text-sm w-1/4'>Osteoarthristis</p>
              <p className=' text-sm w-1/2'>Degenerative joint disease</p>
              <p className=' text-sm w-1/4 '>Untreated</p>
            </div>
            <hr className=' mt-4' />
            <div className=' mt-3 ml-12 flex gap-3 justify-between  '>
              <p className=' text-sm w-1/4'>Allergic Rhinitis</p>
              <p className=' text-sm w-1/2'>Seasonal allergies causing nasal congestion</p>
              <p className=' text-sm w-1/4 '>Active</p>
            </div>
            <br />
            </div>
          </div>
        </section>

        <section className=' rounded-3xl bg-white'>
        <div>
          <Labresult/>
        </div>
        </section>
    </div>
  </main>
  )
}

export default MainLayouts
