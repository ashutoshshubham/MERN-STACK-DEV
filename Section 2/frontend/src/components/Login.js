import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div>

      <div className="container1">

        <form action="" className=''>

          <h2 className='text-center'>
            REACT REGISTRATION FORM
          </h2>

          <div className="entry">
            <label className="label" for="form5Example1">Name</label>
            <input type="text" id="form5Example1" className="input-field" />
          </div>

          <div className="entry">
            <label className="label" for="form5Example1">Contact</label>
            <input type="number" id="form5Example1" className="input-field" />
          </div>

          <div className="entry">
            <label className="label" for="form5Example1">Email</label>
            <input type="email" id="form5Example1" className="input-field" />
          </div>

          <div className="entry">
            <label className="label" for="form5Example1">Password</label>
            <input type="password" id="form5Example1" className="input-field" />
          </div>

          <div className="entry">
            <label className="label" for="form5Example1">Repeat Password</label>
            <input type="password" id="form5Example1" className="input-field" />
          </div>

          {/* <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">Phone</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form6Example4" className="form-control" />
            <label className="form-label" for="form6Example4">Address</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form5Example2" className="form-control" />
            <label className="form-label" for="form5Example2">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="registerPassword" className="form-control" />
            <label className="form-label" for="registerPassword">Password</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" className="form-control" />
            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
          </div> */}

          <button type="submit" className="btn btn-primary mt-3 btn1">Register</button>

        </form>
      </div>

    </div>
  )
}

export default Login