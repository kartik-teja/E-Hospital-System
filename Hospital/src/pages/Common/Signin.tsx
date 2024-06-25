import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';
import Navbar from './NavBar';

const Signin = () => {
    const [hoverDoctor, setHoverDoctor] = useState(false);
    const [hoverPatient, setHoverPatient] = useState(false);

    return (
        <>
            <Navbar />
            <div className={`overlay ${hoverDoctor || hoverPatient ? 'active' : ''}`}></div>
            <div className="container">
                <div className="row py-5 position-relative">
                    <div
                        className={`col-6 text-center ${hoverDoctor ? 'highlight' : ''}`}
                        onMouseEnter={() => setHoverDoctor(true)}
                        onMouseLeave={() => setHoverDoctor(false)}
                    >
                        {hoverDoctor ? (
                            <form className='w-75 p-3 border rounded bg-light mx-auto'>
                                <h4>Doctor Sign In</h4>
                                <div className="mb-3">
                                    <label htmlFor="doctor-username" className="form-label">Username</label>
                                    <input id="doctor-username" type="text" className="form-control" placeholder='Username' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="doctor-password" className="form-label">Password</label>
                                    <input id="doctor-password" type="password" className="form-control" placeholder='********' />
                                </div>
                            </form>
                        ) : (
                            <div className='h-auto'>Doctor Login text</div>
                        )}
                    </div>
                    <div
                        className={`col-6 text-center ${hoverPatient ? 'highlight' : ''}`}
                        onMouseEnter={() => setHoverPatient(true)}
                        onMouseLeave={() => setHoverPatient(false)}
                    >
                        {hoverPatient ? (
                            <form className='w-75 p-3 border rounded bg-light mx-auto'>
                                <h4>Patient Sign In</h4>
                                <div className="mb-3">
                                    <label htmlFor="patient-username" className="form-label">Username</label>
                                    <input id="patient-username" type="text" className="form-control" placeholder='Username' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patient-password" className="form-label">Password</label>
                                    <input id="patient-password" type="password" className="form-control" placeholder='********' />
                                </div>
                            </form>
                        ) : (
                            <div className='h-auto'>Patient Login text</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
