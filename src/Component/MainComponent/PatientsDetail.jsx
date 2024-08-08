import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PatientsDetail() {
  const { id } = useParams();
  const [PatientInfos, setPatientInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fedskillstest.coalitiontechnologies.workers.dev/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!patient) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{PatientInfos.name}</h1>
      <img src={PatientInfos.profile_picture} alt={PatientInfos.name} className="w-32 h-32 rounded-full mb-4" />
      <p><strong>Date of Birth:</strong> {PatientInfos.date_of_birth}</p>
      <p><strong>Gender:</strong> {PatientInfos.gender}</p>
      <p><strong>Insurance Provider:</strong> {PatientInfos.insurance_provider}</p>
      <p><strong>Contact Info:</strong> {PatientInfos.contact_info}</p>
      <p><strong>Emergency Contact:</strong> {PatientInfos.emergency_contact}</p>
    </div>
  );
}

export default PatientsDetail;