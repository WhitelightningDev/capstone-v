import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">My App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/credentials/view/1">View Credentials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/credentials/add/1">Add Credential</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/assign-division">Assign Division</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card shadow">
                            <div className="card-body">
                                <h1 className="card-title text-center mb-4">Welcome to My App</h1>
                                <p className="card-text text-center">You are now logged in!</p>
                                {/* Additional content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
