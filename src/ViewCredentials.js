import React, { useState, useEffect } from 'react';  // Import React and hooks for state and effect management
import { useParams } from 'react-router-dom';  // Import useParams for accessing URL parameters
import axios from 'axios';  // Import axios for making HTTP requests

const ViewCredentials = () => {
    const { divisionId } = useParams();  // Get divisionId from URL parameters
    const [credentials, setCredentials] = useState([]);  // State for storing list of credentials

    // useEffect hook to fetch credentials when component mounts or when divisionId changes
    useEffect(() => {
        const fetchCredentials = async () => {
            try {
                // Make GET request to fetch credentials for the specified division
                const response = await axios.get(`/api/credential-repositories/division/${divisionId}`);
                setCredentials(response.data);  // Update credentials state with fetched data
            } catch (error) {
                console.error('Error fetching credentials:', error);  // Log error to console
            }
        };

        fetchCredentials();  // Call the function to fetch credentials
    }, [divisionId]);  // Dependency array includes divisionId to re-fetch data when it changes

    return (
        <div className="container mt-5">
            <h1>Credentials List</h1>
            <div className="row">
                {/* Map over credentials array to render each credential in a card */}
                {credentials.map((credential) => (
                    <div className="col-md-4 mb-3" key={credential._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{credential.name}</h5>  {/* Display credential name */}
                                <p className="card-text">Division: {credential.division.name}</p>  {/* Display division name */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewCredentials;  // Export ViewCredentials component as default
