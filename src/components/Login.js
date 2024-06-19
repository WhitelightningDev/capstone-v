import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            toast.success('Login successful');
            localStorage.setItem('token', response.data.token); // Store token in local storage
            navigate('/home'); // Redirect to home page
        } catch (error) {
            toast.error('Login failed');
            console.error(error);
        }
    };

    const handleDemoLogin = async () => {
        try {
            const response = await axios.post('/api/auth/demo-login');
            toast.success('Demo login successful');
            localStorage.setItem('token', response.data.token); // Store token in local storage
            navigate('/home'); // Redirect to home page
        } catch (error) {
            toast.error('Demo login failed');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h1 className="card-title text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
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
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <button type="button" className="btn btn-secondary w-100 mt-2" onClick={handleDemoLogin}>Demo Login</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
