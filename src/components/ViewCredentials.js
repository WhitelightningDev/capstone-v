import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewCredentials = () => {
    const { divisionId } = useParams();
    const [credentials, setCredentials] = useState([]);

    useEffect(() => {
        const fetchCredentials = async () => {
            try {
                const response = await axios.get(`/api/credential-repositories/division/${divisionId}`);
                setCredentials(response.data);
            } catch (error) {
                console.error('Error fetching credentials:', error);
            }
        };

        fetchCredentials();
    }, [divisionId]);

    // Credentials to display
    const displayCredentials = [
        { name: 'Admin User', email: 'admin@example.com', password: 'admin123' },
        { name: 'News Management User', email: 'news@example.com', password: 'news123' },
        { name: 'Software Reviews User', email: 'software@example.com', password: 'software123' },
        { name: 'Hardware Reviews User', email: 'hardware@example.com', password: 'hardware123' }
    ];

    return (
        <div className="container mt-5">
            <h1>Credentials List</h1>
            <div className="row">
                {/* Map over credentials array from API */}
                {credentials.map((credential) => (
                    <div className="col-md-4 mb-3" key={credential._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{credential.name}</h5>
                                <p className="card-text">Division: {credential.division.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Display hardcoded credentials */}
                {displayCredentials.map((credential, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{credential.name}</h5>
                                <p className="card-text">Email: {credential.email}</p>
                                <p className="card-text">Password: {credential.password}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewCredentials;
