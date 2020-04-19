import React, { useState } from 'react'

import './main.css'

const AddJob = ({ addJob }) => {
  const [companyName, setCompanyName] = useState('')

  return (
    <div className='add-job'>
      <input
        placeholder='company name'
        type='text'
        onKeyUp={e => setCompanyName(e.target.value)}
      />
      <button onClick={() => console.log(addJob(companyName).toArray())}>
        apply
      </button>
    </div>
  )
}

export default AddJob
