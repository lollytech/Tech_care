import React, { useState, useEffect } from 'react';
import Patientlist from './Patientlist';

function Patients({ onPatientClick }) {
  const [PatientInfos, setPatientInfo] = useState([]);
  const [error, setError] = useState(null);

  const username = 'coalition';
  const password = 'skills-test';
  const auth = btoa(`${username}:${password}`);

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`
    },
    redirect: 'follow'
  };

  useEffect(() => {
    console.log('Fetching data from API...');
    fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
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
    <div className="">
      <Patientlist 
        PatientInfos={PatientInfos} 
        onPatientClick={onPatientClick}  
      />
    </div>
  );
}

export default Patients;
