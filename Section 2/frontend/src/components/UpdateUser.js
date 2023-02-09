import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'



const UpdateUser = () => {

    const {id} = useParams();
    // console.log(id);
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const getUserByid = async () => {
      setLoading(true);
        const res = await fetch('http://localhost:5000/user/getbyid/' + id);
        console.log(res.status);

        if (res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserData(data);
            setLoading(false);
        }
    }

    useEffect(() => {
      getUserByid();
    }, []);            
    
    const updateSubmit = async (formdata) => {
      console.log(formdata)

      const res = await fetch('http://localhost:5000/user/update/'+id, {
        method : 'PUT',
        body : JSON.stringify(formdata),
        headers : {"Content-Type" : "application/json"},
      })

      console.log(res.status);
      if (res.status === 200){
        toast.success('User Updated Successfully');
        navigate('/manageuser')
      }


    }





    const showUpdateForm = () => {
      if (!loading && userData){
        return (
          <div className='card mt-5'>
                <div className="card-body">
                    <h1 className="text-center">Signup</h1>
                    
                    <Formik
                        initialValues={userData}
                        onSubmit = { updateSubmit } >
                        
                            {
                                ({values, handleChange, handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <label>Email</label>
                                        <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                                        <label>Password</label>
                                        <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                                        <label>Username</label>
                                        <input required type="text" className='form-control mb-3' name="username" onChange={handleChange} value={values.username} />

                                        <label>Age</label>
                                        <input required type="number" className='form-control mb-3' name="age" onChange={handleChange} value={values.age} />

                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                )
                            }
                        </Formik>

                </div>
            </div>
        )
      }
    }





  return (
    <div>
      <div className="container">
        {showUpdateForm()}
      </div>
    </div>
  )
}

export default UpdateUser