import React, { useState } from 'react'

import { last } from '../util'
import AddJobEvent from '../AddJobEvent'
import './main.css'

const DisplayJobs = ({ jobs, addJobEvent, events }) => {
  const [editing, setEditing] = useState(null)

  return (
    <div className='display-jobs'>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>most recent event</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {jobs.map(job => {
            const event = last(job.events)

            return (
              <tr key={job._id}>
                <td>{job.name}</td>
                <td>
                  {event.name} on {new Date(event.time).toDateString()}
                </td>
                <td onClick={() => setEditing(job)}>+</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {editing && (
        <AddJobEvent
          job={editing}
          events={events}
          addJobEvent={addJobEvent}
          killModal={() => setEditing(null)}
        />
      )}
    </div>
  )
}

export default DisplayJobs
