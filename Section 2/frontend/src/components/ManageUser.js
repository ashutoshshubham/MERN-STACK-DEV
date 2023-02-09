import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);        //to bring data out of fetchUserData

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        // method : 'GET',                                        //here by default method is GET
        //no body and header is required
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserList(data);
    }


    //Effect Hook

    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])


    useEffect(() => {

        fetchUserData();

    }, [])


    //   fetchUserData();                    //200 in console


    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/' + id, {
            method : 'DELETE',
        });

        console.log(res.status)
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully')
        }

    }


    return (
        <div>
            <header className='bg-dark py-5 text-white'>
                <div className="container">
                    <p className='display-3 fw-bold'>User Manager</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae porro delectus deleniti voluptas provident inventore officiis pariatur aut laborum.</p>
                </div>
            </header>
            <section className='mt-5'>
                <div className="container">
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Status</th>
                                <th>Position</th>
                                <th colSpan={2} className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userList.map((user) => (
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                    alt=""
                                                    style={{ width: 45, height: 45 }}
                                                    className="rounded-circle"
                                                />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{user.username}</p>
                                                    <p className="text-muted mb-0">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{user._id}</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-success rounded-pill d-inline">
                                                Active
                                            </span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <Link to={'/updateuser/'+user._id} type="button" className="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </Link>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={() => {deleteUser(user._id)}}>
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }







                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    )
}

export default ManageUser