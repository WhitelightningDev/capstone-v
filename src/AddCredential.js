import React, { useState } from 'react';  // Import React and useState hook for state management
import { useParams } from 'react-router-dom';  // Import useParams hook to access URL parameters
import axios from 'axios';  // Import axios for making HTTP requests
import { toast } from 'react-toastify';  // Import toast notification library
import 'react-toastify/dist/ReactToastify.css';  // CSS for toast notifications
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS for styling

const AddCredential = () => {
    const { repositoryId } = useParams();  // Get repositoryId from URL params using useParams hook
    const [name, setName] = useState('');  // State for storing credential name
    const [username, setUsername] = useState('');  // State for storing username

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            // Send POST request to add credential to specific repository
            const response = await axios.post(`/api/credential-repositories/${repositoryId}`, { name, username });
            toast.success('Credential added successfully');  // Notify user on success
            console.log(response.data);  // Log response data to console
        } catch (error) {
            toast.error('Add credential error');  // Notify user on error
            console.error(error);  // Log error to console
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
                        onChange={(e) => setName(e.target.value)}  // Update name state on input change
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  // Update username state on input change
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Credential</button>  {/* Submit button */}
            </form>
        </div>
    );
};

export default AddCredential;  // Export AddCredential component as default
