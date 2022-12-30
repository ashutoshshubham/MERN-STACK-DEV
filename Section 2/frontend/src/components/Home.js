// first letter of components should be capital
// here 'H' of home is capital

// change language mode to javascript react


// 'rafce' then press enter       it will give syntax of below code

// everything should be inside div tag



import React from 'react'

import './Home.css'            // './' if file is in same folder, '../' if file is not in same folder

const Home = () => {
  return (
    <div>
        <h1 className='myheading' style={{backgroundColor:'yellow', color:'black', marginTop:30}}>Home Component</h1>
    </div>

  )
}

export default Home;



// marginTop: 30  or marginTop: '30px'   both are same