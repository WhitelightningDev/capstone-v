import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', { name, email, password });
            toast.success('Registration successful');
            localStorage.setItem('token', response.data.token); // Store token in local storage
            navigate('/home'); // Redirect to home page
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('User email already exists');
            } else {
                toast.error('Registration failed');
            }
            console.error(error);
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h1 className="card-title text-center mb-4">Register</h1>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter your name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Already have an account? <a href="/login">Login here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
