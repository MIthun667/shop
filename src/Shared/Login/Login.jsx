import React, { useState } from 'react';
import "./Login.css"


const Login = () => {

    const [ login, setLogin] = useState({})
    const handleOnChange = e =>{
        const field = e.target.type;
        const value = e.target.value;
        const newLoginData = {...login};
        newLoginData[field] = value;
        setLogin(newLoginData);
    }

    const handleOnSubmit = e =>{
        alert("Login Successfully");
        e.preventDeafult();
    }

    return (
        <div className="container  pt-5 ">
        <div className='shadow-lg p-3 mb-5 bg-body rounded d-flex justify-content-between'>
            <div className='img'>
                <img src='/photo/Login.png' alt="" height="400px" />
            </div>
            <div>
                <h1 className='lead fw-bolder text-center'>
                    Login
                </h1>
                <form className='login' onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"  onChange={handleOnChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-outline-dark">Login</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
