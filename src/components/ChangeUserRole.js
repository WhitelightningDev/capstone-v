import React, { useState } from 'react';  // Import React and useState hook for state management
import axios from 'axios';  // Import axios for making HTTP requests
import { toast } from 'react-toastify';  // Import toast notification library

const AssignUserToDivision = () => {
    const [userId, setUserId] = useState('');  // State for storing user ID
    const [divisionId, setDivisionId] = useState('');  // State for storing division ID

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            // Send POST request to assign user to division
            const response = await axios.post(`/api/users/assign-division/${divisionId}/${userId}`);
            toast.success(`User assigned to division: ${response.data.division}`);  // Notify user on success
        } catch (error) {
            toast.error('Error assigning user to division');  // Notify user on error
        }
    };

    return (
        <div className="container mt-5">
            <h2>Assign User to Division</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userIdInput">User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userIdInput"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}  // Update userId state on input change
                        required  // Make input required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="divisionIdInput">Division ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="divisionIdInput"
                        value={divisionId}
                        onChange={(e) => setDivisionId(e.target.value)}  // Update divisionId state on input change
                        required  // Make input required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Assign</button>  {/* Submit button */}
            </form>
        </div>
    );
};

export default AssignUserToDivision;  // Export AssignUserToDivision component as default
