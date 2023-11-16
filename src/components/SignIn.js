import React from 'react'
import { Link } from 'react-router-dom'
import signup from '../image/sign-up.jpg'

export default function SignIn() {
    return (
        <>
        <form>
            <div className='container'>
                <div className='signin bg-white rounded rounded-4 shadow'>
                    <div className='row mx-0'>
                        <div className='col-md-6 px-0 img-section'>
                            <div className='signinimg'>
                                <img src={signup} alt='signup' title='SignIn Here' className='rounded-start-3'></img>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <div className="form-header my-3">
                                    <h3 className="text-center">Sign In</h3>
                                </div>
                                <div className="input-group px-3 mb-3 position-relative">
                                    <input type="email"   className="form-control form-control-md  " placeholder="Enter Email Address" />
                                   
                                </div>
                                <div className="input-group mb-2 px-3 position-relative">
                                    <input type="password" className="form-control form-control-md  " placeholder="Enter Password" />
                                  
                                </div>
                                <div className="input-group justify-content-between mb-3 px-3">
                                    <div className="form-check  p-0">
                                        <input type="checkbox" id="form-check" />
                                        <label htmlFor="form-check" className="ms-2 text-secondary "><small>Remember me</small></label>
                                    </div>
                                    <div className="forgot">
                                        <small><Link to= ''>Forgot Password?</Link></small>
                                    </div>

                                </div>

                                <div className='w-75 mx-auto mb-3'>
                                    <button type='button' className='btn btn-lg btn-primary w-100'>Sign In</button>
                                </div>

                                <div className="input-group justify-content-center mb-3">
                                    <label>Don't have an account ? <Link to='/'>Sign up</Link></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
