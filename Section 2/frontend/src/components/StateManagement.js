import React, { useState } from 'react'

const StateManagement = () => {
    let count = 10;

    const [likes, setLikes] = useState(20);

    const [comment, setComment] = useState(4);

    const [share, setShare] = useState(1)
    

    const counter = () => {
      console.log('counting');  
        count ++;
        console.log(count);
    };

    const LikesCounter = () => {
        // likes ++                         //this is wrong way
        setLikes(likes + 1)                 //this is right way
        // console.log(likes)
    }

    const commentCounter = () => {
        setComment(comment + 1)
    }

    const shareCounter = () => {
        setShare(share + 1)
    }

  return (
    <div className='container'>
        <h1 className='text-center display-4'>State Management</h1>
        <hr />

        <h1>{count}</h1>
        <h1>{likes}</h1>

        <button className="btn btn-success" onClick={counter}>Lets Count</button>
        <button className="btn btn-danger mt-3" onClick={LikesCounter}>Lets Count Again</button>

        <div className="card mt-4">
            <div className="card-header">
                <h3><i class="fa fa-user-circle" aria-hidden="true"></i> Ashutosh</h3>
                <p className="text-muted">1 January 2023</p>
            </div>
            <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt08e92b76edbfae54/638abf512f74eb654f428179/Val_Banner_Sage_Chamber_Harbor_1920x1080.jpg?auto=webp&disable=upscale&width=774" alt="" className='img-fluid'/>
            <div className="card-footer">
                {likes} Likes &nbsp; {comment} Comment &nbsp; {share} Shares
                <hr />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' onClick={LikesCounter}><i class="fas fa-thumbs-up"></i>&nbsp; Like</button>
                    <button className='btn btn-primary' onClick={commentCounter}><i class="fas fa-comment"></i>&nbsp; Comment</button>
                    <button className='btn btn-info' onClick={shareCounter}><i class="fas fa-share"></i>&nbsp; Share</button>
                </div>
                <hr />
            </div>
        </div>

    </div>
  )
}

export default StateManagement