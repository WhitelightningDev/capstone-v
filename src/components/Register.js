import React, { useState } from 'react';  // Import React and useState hook for state management
import axios from 'axios';  // Import axios for making HTTP requests
import { toast } from 'react-toastify';  // Import toast notification library
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS for styling

const Register = () => {
    const [name, setName] = useState('');  // State for storing name input
    const [email, setEmail] = useState('');  // State for storing email input
    const [password, setPassword] = useState('');  // State for storing password input
    const [role, setRole] = useState('Newsmanagement');  // State for storing selected role, default is 'Newsmanagement'

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            // Send POST request to register endpoint with name, email, password, and role
            const response = await axios.post('/api/auth/register', { name, email, password, role });
            toast.success('Registration successful');  // Show success toast notification
            console.log(response.data);  // Log response data to console
        } catch (error) {
            toast.error('Registration failed');  // Show error toast notification
            console.error(error);  // Log error to console
        }
    };

    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}  // Update name state on input change
                        required  // Make input required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
                        required  // Make input required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Update password state on input change
                        required  // Make input required
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="form-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}  // Update role state on select change
                        required  // Make select required
                    >
                        <option value="Newsmanagement">Newsmanagement</option>
                        <option value="Software reviews">Software reviews</option>
                        <option value="Hardware reviews">Hardware reviews</option>
                        <option value="Opinion publishing">Opinion publishing</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>  {/* Submit button */}
            </form>
        </div>
    );
};

export default Register;  // Export Register component as default
