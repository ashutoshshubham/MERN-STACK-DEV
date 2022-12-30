import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div>
      {/* <div className="container2 text-center">
            <h1>Hello</h1>
            <p>Welcome to my first simple project on REACT</p>
        </div> */}
      <div className="card1">
        <div className="image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className='image' />
        </div>
        <div className="content">
          <h1>Hello There, </h1>
          <p>Welcome to my First practice project on REACT</p>
        </div>
      </div>
    </div>
  )
}

export default Home