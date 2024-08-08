import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TfiMoreAlt } from "react-icons/tfi";

function Patients() {
  const [PatientInfos, setPatientInfo] = useState([]);
  const [error, setError] = useState(null);
  const username='coalition'

    const password ='skills-test'

    const auth = btoa(`${username}:${password}`)

const requestOptions = {
  method: 'GET',
  headers:{
    'Authorization':`Basic ${auth}`
  },
  redirect: 'follow'
};

  useEffect(() => {
    console.log('Fetching data from API...');
    fetch('https://fedskillstest.coalitiontechnologies.workers.dev/',requestOptions)
      .then(response => {
        console.log(response);
        
        if (!response.ok) {
            console.log('error 1');
          throw new Error('Network response was not ok');
          
        }
        console.log('error 2');
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); 
        setPatientInfo(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    
    <div className="flex flex-col gap-4 max-h-[52rem] overflow-y-auto ">
      {PatientInfos.length === 0 ? (
        <p>No patients found</p>
      ) : (
        PatientInfos.map(PatientInfo => (
          <div key={PatientInfo.id} className="flex items-center  p-2 rounded-lg">
            <img src={PatientInfo.profile_picture} alt={PatientInfo.name} className="w-12 h-12 rounded-full mr-4 " />
            <div className="flex-col">
                <div className=' flex ' >
                    <div >
                        <p className="font-bold text-sm ">{PatientInfo.name}</p>
                    </div>
                    <div>
                        <TfiMoreAlt className=' mt-3  ' />
                    </div>
                </div>
              <div className=' flex gap-5'>
              <p className="text-gray-600 text-sm">{PatientInfo.gender},</p>
              <p className="text-gray-600 text-sm">{PatientInfo.age} years old</p>
              </div>
              
            </div>
          </div>
        ))
      )}
    </div>
    
  );
}

export default Patients;