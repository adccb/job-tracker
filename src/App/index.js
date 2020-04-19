import React, { useState, useEffect } from 'react'

import AddJob from '../AddJob'
import BodyContainer from '../BodyContainer'
import DisplayJobs from '../DisplayJobs'
import './main.css'

const App = ({ addJob, addJobEvent, events, getJobs }) => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs().then(setJobs)
  }, [getJobs])

  return (
    <div className='app'>
      <AddJob addJob={addJob} />

      <BodyContainer>
        <DisplayJobs jobs={jobs} addJobEvent={addJobEvent} events={events} />
      </BodyContainer>
    </div>
  )
}

export default App
