import React from 'react';
import Sidebar from './Sidebar';

const LandingScreen = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Institute of Aeronautical Engineers</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default LandingScreen;
