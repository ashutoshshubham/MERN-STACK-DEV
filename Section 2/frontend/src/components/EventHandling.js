import React from 'react'

const EventHandling = () => {

    const clicker = () => {
        alert('Now using function in events')
    }



  return (
    <div className='container'>
        <h1 className="display-4 text-center mt-5">Event Handling</h1>
        <hr />
        <button className='btn btn-dark mt-4' onClick={() => {alert('You clicked that button')}}>On Click Event</button>

        <button className="btn btn-primary mt-4" onClick={clicker}>Using Function in Events</button>

    </div>
  )
}

export default EventHandling;