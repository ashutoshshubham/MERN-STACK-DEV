import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const ManageProduct = () => {

    const [productList, setProductList] = useState([]);

    const fetchProductData = async () => {
        const res = await fetch('http://localhost:5000/product/getall');
        console.log(res.status)

        const data = await res.json();
        console.log(data);
        setProductList(data);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    const deleteProduct = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/product/delete/' + id, {
            method : 'DELETE',
        });

        console.log(res.status)
        if(res.status === 200){
            fetchProductData();
            toast.success('Product Deleted Successfully')
        }
    }



  return (
    <div>
        <div>
            <header className='bg-dark py-5 text-white'>
                <div className="container">
                    <p className='display-3 fw-bold'>Product Manager</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae porro delectus deleniti voluptas provident inventore officiis pariatur aut laborum.</p>
                </div>
            </header>
            <section className='mt-5'>
                <div className="container">
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Product Name</th>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Color</th>
                                <th>Price</th>
                                <th colSpan={2} className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                productList.map((product) => (
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {/* <img
                                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                    alt=""
                                                    style={{ width: 45, height: 45 }}
                                                    className="rounded-circle"
                                                /> */}
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{product.product_name}</p>
                                                    <p className="text-muted mb-0">{product.product_category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{product._id}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{product.brand}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{product.color}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1"><b>₹</b> {product.price}</p>
                                        </td>
                                        {/* <td>
                                            <span className="badge badge-success rounded-pill d-inline">
                                                Active
                                            </span>
                                        </td> */}
                                        {/* <td>Senior</td> */}
                                        {/* <td>
                                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td> */}
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={() => {deleteProduct(product._id)}}>
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
    </div>
  )
}

export default ManageProduct