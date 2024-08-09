import React from 'react';
import { TfiMoreAlt } from "react-icons/tfi";

function PatientList({ PatientInfos, onPatientClick }) {
  return (
    <div className="flex flex-col gap-4 max-h-[52rem] overflow-y-auto">
      {PatientInfos.length === 0 ? (
        <p>No patients found</p>
      ) : (
        PatientInfos.map((PatientInfo) => (
          <div 
            key={PatientInfo.id} 
            className="flex items-center p-2 rounded-lg cursor-pointer"
            onClick={() => onPatientClick(PatientInfo)}
          >
            <img src={PatientInfo.profile_picture} alt={PatientInfo.name} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-col">
              <div className='flex'>
                <div>
                  <p className="font-bold text-sm">{PatientInfo.name}</p>
                </div>
                <div>
                  <TfiMoreAlt className='mt-3' />
                </div>
              </div>
              <div className='flex gap-5'>
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

export default PatientList;
