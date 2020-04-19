import React from 'react'

const events = {
  applied: 'applied',
  phoneScreen: 'phone screen',
  rejected: 'rejected',
}

const JobSchema = {
  job: ['name', 'events'],
}

const Zango = ({ zango, children }) => {
  const db = new zango.Db('jobs', JobSchema)
  const jobs = db.collection('job')

  const addJob = name =>
    jobs.insert([
      {
        name,
        events: [{ name: events.applied, time: new Date().toISOString() }],
      },
    ])
  const addJobEvent = (id, events) =>
    jobs.update({ _id: { $eq: id } }, { events })
  const getJobs = () => jobs.find({}).toArray()

  return [
    React.cloneElement(children, {
      key: 'app',
      addJob,
      addJobEvent,
      events,
      getJobs,
    }),
  ]
}

export default Zango
