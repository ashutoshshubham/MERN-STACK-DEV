import React from 'react'
import './form.css'

const Form = () => {
    return (

        <>

            <div className="container1">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                        <form className='form'>
                            <h1 className='heading'>PROJECT 1 REGISTRATION FORM</h1>
                            <div>
                                <label className='entry-name'>Name</label>
                                <input type="text" className='input-field' />
                            </div>

                            <div>
                                <label className='entry-name'>Email</label>
                                <input type="email" className='input-field' />
                            </div>

                            <div>
                                <label className='entry-name'>Contact</label>
                                <input type="number" className='input-field' />
                            </div>

                            <div>
                                <label className='entry-name'>Password</label>
                                <input type="password" className='input-field' />
                            </div>

                            <button type="button" class="btn1">REGISTER</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form