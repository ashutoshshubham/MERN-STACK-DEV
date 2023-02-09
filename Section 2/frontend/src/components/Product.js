import { Formik } from 'formik'
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Product = () => {

    // const navigate = useNavigate();      
    const productSubmit = async (formdata) => {
        console.log(formdata)
        const res = await fetch('http://localhost:5000/product/add',{
            method : 'POST',
            body : JSON.stringify(formdata),                    //body because post method is used
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        console.log(res.status);

        if (res.status === 200){
            Swal.fire({
                icon : 'success',
                title : 'Added',
                text : 'Added Successfully' 
            })
            // navigate('/state');
        }

    }


    return (
        <div className='vh-100 d-flex align-items-center justify-content-center bg-primary'>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className='card'>
                    <div className="card-body">
                        <h1 className="text-center">Product Details</h1>

                        <Formik
                            initialValues={{ product_name: "",product_category: "", brand: "", color: "", price: "" }}
                            onSubmit={productSubmit}
                        >
                            {
                                ({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <label>Product Name</label>
                                        <input required type="text" className='form-control mb-3' name="product_name" onChange={handleChange} value={values.product_name} />

                                        <label>Product Category</label>
                                        <input required type="text" className='form-control mb-3' name="product_category" onChange={handleChange} value={values.product_category} />

                                        <label>Brand</label>
                                        <input required type="text" className='form-control mb-3' name="brand" onChange={handleChange} value={values.brand} />

                                        <label>Color</label>
                                        <input required type="text" className='form-control mb-3' name="color" onChange={handleChange} value={values.color} />

                                        <label>Price</label>
                                        <input required type="number" className='form-control mb-3' name="price" onChange={handleChange} value={values.price} />

                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                )
                            }
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product