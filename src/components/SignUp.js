import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import signup from '../image/sign-up.jpg'
import validate from './validatelogic'
export default function SignUp() {
   
    return (
        <div>
            <div className='container'>
                <div className='signup bg-white rounded rounded-4 shadow'>
                    <div className='row mx-0 '>
                        <div className='col-md-6 px-0 img-section'>
                            <div className='signupimg'>
                                <img src={signup} alt='signup' title='Signup Form' className='rounded-start-3'></img>
                            </div>
                        </div>
                        <div className='col-md-6 px-0 '>
                            <form >
                                <div className="form-header my-3">
                                    <h3 className="text-center">Sign Up</h3>
                                </div>
                                <div className="input-group px-3 mb-3 gap-4 position-relative">
                                    <input type="text"  id='fname' className="form-control form-control-md  " placeholder="Enter First name" />
                                    <input type="text" id='lname' className="form-control form-control-md  " placeholder="Enter Last name" />
                                    <div className='errormsg position-absolute d-flex justify-content-between'>
                                        <span id='fname1'>*Required</span>
                                        <span id='lname1'>*Required</span>
                                    </div>
                                </div>

                                <div className="input-group px-3 mb-3 position-relative">
                                    <input type="email" id='email' className="form-control form-control-md  " placeholder="Enter Email Address" />
                                    <div className='errormsg position-absolute  d-flex justify-content-between'>
                                        <span id='email1'>*Required</span>
                                    </div>
                                </div>
                                <div className="input-group px-3 mb-3 position-relative">
                                    <input type="tel" id='tell' className="form-control form-control-md  " placeholder="Enter Phone number" />
                                    <div className='errormsg position-absolute  d-flex justify-content-between'>
                                        <span id='tell1'>*Required</span>
                                    </div>
                                </div>
                                <div className="input-group px-3 mb-3 align-items-center w-75">
                                    <label className='me-5'>DOB</label><input type='date' className='form-control px-2' placeholder='dob'></input>
                                </div>
                                <div className='d-flex px-3 mb-3'>
                                    <label className='me-4 '>Gender</label>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="male" checked />
                                        <label className="form-check-label me-3" htmlFor="radio1">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Female" />
                                        <label className="form-check-label" htmlFor="radio2">Female</label>
                                    </div>
                                </div>
                                <div className="input-group mb-3 px-3 position-relative">
                                    <input type="password" id='pswd' className="form-control form-control-md  " placeholder="Create Password" />
                                    <div className='errormsg position-absolute  d-flex justify-content-between'>
                                        <span id='pass1'>*Required</span>
                                    </div>
                                </div>
                                <div className="input-group mb-4 px-3 position-relative">
                                    <input type="password" id='cpswd' className="form-control form-control-md  " placeholder="Re-Enter Password" />
                                    <div className='errormsg position-absolute  d-flex justify-content-between'>
                                        <span id='cpass1'>*Required</span>
                                    </div>
                                </div>
                                <div className='w-75 mx-auto mb-2'>
                                    <button type='button' className='btn btn-primary w-100' onClick={validate}>Sign Up</button>
                                </div>
                                <div className='px-3 text-center mb-3'>
                                    <span>Already have an account <Link to='/signin'>Login here</Link></span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
