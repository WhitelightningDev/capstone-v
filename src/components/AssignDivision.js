import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { toast } from 'react-toastify';

const AssignDivision = () => {
    const [users, setUsers] = useState([]);          // State for storing list of users
    const [divisions] = useState([                  // Hardcoded list of divisions
        { _id: '1', name: 'News Management' },
        { _id: '2', name: 'Software Reviews' },
        { _id: '3', name: 'Hardware Reviews' },
        { _id: '4', name: 'Opinion Publishing' }
    ]);
    const [selectedUser, setSelectedUser] = useState('');        // State for storing the selected user
    const [selectedDivision, setSelectedDivision] = useState('');  // State for storing the selected division

    useEffect(() => {
        // Fetch users from API
        axios.get('/api/users')
            .then(response => {
                console.log(response.data); // Log fetched users
                setUsers(response.data);
            })
            .catch(error => console.error(error)); // Log any fetch error
    }, []);
    // Empty dependency array to run only once on component mount

    // Simulating logged in user (you may replace this with actual logged in user data)
    const loggedInUser = {
        _id: '123', // Replace with actual user ID
        email: 'currentuser@example.com' // Replace with actual user email
    };

    // Function to handle assigning user to division
    const handleAssign = () => {
        // Ensure both user and division are selected
        if (!selectedUser || !selectedDivision) {
            toast.error('Please select both a user and a division');
            return;
        }

        // Send POST request to assign user to division
        axios.post(`/api/users/assign-division/${selectedDivision}/${selectedUser}`)
            .then(() => {
                toast.success('User assigned to division');
                // Optionally reset selectedUser and selectedDivision after successful assignment
                setSelectedUser('');
                setSelectedDivision('');
            })
            .catch(() => toast.error('Error assigning user to division'));
    };

    return (
        <div className="container mt-5">
            <h2>Assign User to Division</h2>
            <div className="form-group">
                <label htmlFor="userSelect">Select User</label>
                <select
                    id="userSelect"
                    className="form-control"
                    onChange={e => setSelectedUser(e.target.value)}
                    value={selectedUser}
                >
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.email}</option>
                    ))}
                    {/* Include the logged in user in the dropdown */}
                    <option key={loggedInUser._id} value={loggedInUser._id}>{loggedInUser.email}</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="divisionSelect">Select Division</label>
                <select
                    id="divisionSelect"
                    className="form-control"
                    onChange={e => setSelectedDivision(e.target.value)}
                    value={selectedDivision}
                >
                    <option value="">Select Division</option>
                    {divisions.map(division => (
                        <option key={division._id} value={division._id}>{division.name}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleAssign}>Assign</button>

            {/* Back button */}
            <Link to="/Home" className="btn btn-secondary mt-3 ml-2">Back</Link>
        </div>
    );
};

export default AssignDivision;
