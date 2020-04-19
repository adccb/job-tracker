import React, { useState } from 'react'

import './main.css'

const buildEvent = name => ({ name, time: new Date().toISOString() })

const AddJobEvent = ({ job, addJobEvent, events, killModal }) => {
  const [eventName, setEventName] = useState('')

  return (
    <div className='add-job-event' onClick={killModal}>
      <div onClick={e => e.stopPropagation()}>
        <p>Add an event at {job.name}</p>
        <select onChange={e => setEventName(e.target.value)}>
          <option value=''>-- select --</option>
          {Object.keys(events).map(key => (
            <option key={key} value={key}>
              {events[key]}
            </option>
          ))}
        </select>

        <button
          onClick={() =>
            eventName !== '' &&
            addJobEvent(job._id, job.events.concat(buildEvent(eventName))) &&
            killModal()
          }
        >
          save
        </button>
      </div>
    </div>
  )
}

export default AddJobEvent
