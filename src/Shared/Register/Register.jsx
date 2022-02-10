import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='container'>
            <div className=' my-5 d-flex shadow-lg p-3 mb-5 bg-body rounded'>
                <div>
                    <img src="/photo/admin-login.jpg" alt="" />
                </div>
                <div className="form">
                    <h1 className='text-center lead fw-bolder py-4'>Register</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" placeholder="Full Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                    <p>Already register? <NavLink to={'/login'}>Sign in here...</NavLink></p>
                    <button className="btn btn-outline-dark">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
