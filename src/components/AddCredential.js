import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCredential = () => {
    const { repositoryId } = useParams(); // Get repositoryId from URL params using useParams hook
    const [name, setName] = useState(''); // State for storing credential name
    const [username, setUsername] = useState(''); // State for storing username
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Ensure the authorization token is set in the headers
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            
            // Send POST request to add credential to specific repository
            const response = await axios.post(`/api/credentials/${repositoryId}`, { name, username }, config);
            toast.success('Credential added successfully'); // Notify user on success
            console.log(response.data); // Log response data to console

            // After successfully adding credential, navigate to home page
            navigate('/home');
        } catch (error) {
            toast.error('Add credential error'); // Notify user on error
            console.error('Error adding credential:', error.response ? error.response.data : error.message); // Log error to console
        }
    };

    return (
        <div className="container mt-5">
            <h1>Add Credential</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Update name state on input change
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Credential</button> {/* Submit button */}
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/home')}>Back to Home</button> {/* Back to Home button */}
            </form>
        </div>
    );
};

export default AddCredential;
