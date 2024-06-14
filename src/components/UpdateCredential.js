import React, { useState, useEffect } from 'react';  // Import React and hooks for state and effect management
import { useParams } from 'react-router-dom';  // Import useParams for accessing URL parameters
import axios from 'axios';  // Import axios for making HTTP requests
import { toast } from 'react-toastify';  // Import toast notification library

const UpdateCredential = () => {
    const { repositoryId, credentialId } = useParams();  // Get repositoryId and credentialId from URL parameters
    const [name, setName] = useState('');  // State for storing name input
    const [username, setUsername] = useState('');  // State for storing username input
    const [users, setUsers] = useState([]);  // State for storing list of users
    const [selectedUser, setSelectedUser] = useState('');  // State for storing selected user ID

    // Fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    // Function to fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');  // Fetch users from API
            setUsers(response.data);  // Assuming response.data is an array of users
        } catch (error) {
            console.error('Failed to fetch users:', error);  // Log error to console
            toast.error('Failed to fetch users');  // Show error toast notification
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            // Send PUT request to update the credential with new data
            const response = await axios.put(`/api/credential-repositories/${repositoryId}/${credentialId}`, {
                name,
                username,
                userId: selectedUser  // Include selected user ID in the update request
            });
            toast.success('Credential updated successfully');  // Show success toast notification
            console.log(response.data);  // Log response data to console
        } catch (error) {
            toast.error('Failed to update credential');  // Show error toast notification
            console.error('Update credential error:', error);  // Log error to console
        }
    };

    return (
        <div>
            <h1>Update Credential</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}  // Update name state on input change
                    required  // Make input required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}  // Update username state on input change
                    required  // Make input required
                />
                <div>
                    <label>Select User</label>
                    {/* Update selected user state on change */}
                    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required>
                        <option value="">Select User</option>
                        {users.map(user => (
                            <option key={user._id} value={user._id}>{user.email}</option>  // Render user options
                        ))}
                    </select>
                </div>
                <button type="submit">Update Credential</button> 
            </form>
        </div>
    );
};

export default UpdateCredential;  // Export UpdateCredential component as default
