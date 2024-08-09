import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md';

function Labresult() {
    const labResults = [
        { id: 1, name: 'Blood Test' },
        { id: 2, name: 'CT Scans' },
        { id: 3, name: 'Radiology Reports' },
        { id: 4, name: 'X-Rays' },
        { id: 5, name: 'Urine Test' },
    ]
  return (
    <div>
      <section className="p-4 border">
      <div className='bg-white '>
        <div>
          <h1 className='font-bold ml-4 pt-4 text-xl'>Lab Results</h1>
        </div>
        <div className="h-32 overflow-y-auto">
          {labResults.map((result) => (
            <div key={result.id} className='h-8 p-3 m-3 flex items-center justify-between'>
              <p className='text-sm'>{result.name}</p>
              <MdOutlineFileUpload className='font-bold text-2xl' />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Labresult