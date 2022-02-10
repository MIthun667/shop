import React from 'react';
import './Contact.css'



const Contact = () => {
    return (
        <div className="container bg-light shadow-lg p-3 mb-5 rounded justify-content-between">
            <h6 className='text-center py-4'>Contact Us</h6>
            <h1 className='text-center py-4'>Let's get in touch</h1>
            <div className=''>
                <div className="mb-3 my-2 ml-2 mr-2">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3 my-2 ml-2 mr-2">
                    <textarea className="form-control" placeholder='Messages' rows="3"></textarea>
                </div>
                <button className='btn btn-outline-dark mb-2 ml-2'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;
