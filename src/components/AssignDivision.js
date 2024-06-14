import React, { useState, useEffect } from 'react';  // Import React and hooks (useState, useEffect) for state management and side effects
import axios from 'axios';  // Import axios for making HTTP requests
import { toast } from 'react-toastify';  // Import toast notification library

const AssignDivision = () => {
    const [users, setUsers] = useState([]);  // State for storing list of users
    const [divisions, setDivisions] = useState([]);  // State for storing list of divisions
    const [selectedUser, setSelectedUser] = useState('');  // State for storing the selected user
    const [selectedDivision, setSelectedDivision] = useState('');  // State for storing the selected division

    // useEffect hook to fetch users and divisions on component mount
    useEffect(() => {
        // Fetch users from API
        axios.get('/api/users')
            .then(response => setUsers(response.data))  // Update users state with response data
            .catch(error => console.error(error));  // Log error to console if request fails

        // Fetch divisions from API
        axios.get('/api/divisions')
            .then(response => setDivisions(response.data))  // Update divisions state with response data
            .catch(error => console.error(error));  // Log error to console if request fails
    }, []);  // Empty dependency array to run only once on component mount

    // Function to handle assigning user to division
    const handleAssign = () => {
        // Send POST request to assign user to division
        axios.post('/api/users/assign-division', { userId: selectedUser, divisionId: selectedDivision })
            .then(() => toast.success('User assigned to division'))  // Notify user on success
            .catch(() => toast.error('Error assigning user to division'));  // Notify user on error
    };

    return (
        <div className="container mt-5">
            <h2>Assign User to Division</h2>
            <div className="form-group">
                <label htmlFor="userSelect">Select User</label>
                <select
                    id="userSelect"
                    className="form-control"
                    onChange={e => setSelectedUser(e.target.value)}  // Update selectedUser state on change
                    value={selectedUser}
                >
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.email}</option>  // Render user options
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="divisionSelect">Select Division</label>
                <select
                    id="divisionSelect"
                    className="form-control"
                    onChange={e => setSelectedDivision(e.target.value)}  // Update selectedDivision state on change
                    value={selectedDivision}
                >
                    <option value="">Select Division</option>
                    {divisions.map(division => (
                        <option key={division._id} value={division._id}>{division.name}</option>  // Render division options
                    ))}
                </select>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleAssign}>Assign</button>  {/* Button to trigger handleAssign function */}
        </div>
    );
};

export default AssignDivision;  // Export AssignDivision component as default
