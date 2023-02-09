import React, { useState } from 'react'

const EventHandling = () => {

  const clicker = () => {
    alert('Now using function in events')
  };

  const [inputText, setInputText] = useState('');

  const [pageBg, setPageBg] = useState(null)



  return (
    <div style={{backgroundColor: pageBg, minHeight:'100vh'}}>
      <div className='container'>
        <h1 className="display-4 text-center mt-5">Event Handling</h1>
        <hr />
        <button className='btn btn-dark mt-4' onClick={() => { alert('You clicked that button') }}>On Click Event</button>

        <button className="btn btn-primary mt-4" onClick={clicker}>Using Function in Events</button>

        {/* <input type='text' className='form-control' onChange={(e) => {console.log(e.target.value)}}/>                                        e is just variable name */}

        <input type='text' className='form-control mt-4' onChange={(e) => { setInputText(e.target.value) }} />

        <h1>{inputText}</h1>
        {/* <img src={inputText} alt="" /> */}

        {/* <input type="color" className='form-control mt-4' onChange={(e) => {console.log(e.target.value);}} /> */}

        <input type="color" className='form-control mt-4' onChange={(e) => { setPageBg(e.target.value); }} />
        {/* <h1>{pageBg}</h1> */}

      </div>
    </div>
  )
}

export default EventHandling;