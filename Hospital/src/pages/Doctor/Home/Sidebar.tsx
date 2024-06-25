import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: '250px', height: '100vh' }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-house-door-fill me-2"></i>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-person-fill me-2"></i>
                        Profile
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-file-earmark-fill me-2"></i>
                        Certificates
                    </a>
                </li>
                {/* Add more nav items as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
