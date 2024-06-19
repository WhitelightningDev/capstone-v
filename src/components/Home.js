import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        toast.success('Logout successful');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Welcome to the Home Page</h1>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
            <p className="lead">You are now logged in!</p>

            <div className="mt-5">
                <h2>JWT Authentication and Express</h2>
                <p>
                    JWT (JSON Web Token) authentication is a popular method for securing web applications. It involves the use of tokens that are issued to clients upon successful login. These tokens are then used to authenticate subsequent requests.
                </p>
                <p>
                    In this application, JWT tokens are generated upon user login and stored in the client's local storage. The token contains the user's ID and is signed with a secret key. When the client makes requests to protected routes, the token is included in the request headers, and the server verifies it to authenticate the user.
                </p>
                <p>
                    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is used in this application to handle routing, middleware, and HTTP requests.
                </p>
                <p>
                    In the backend, the following steps are performed:
                </p>
                <ol>
                    <li>The user sends a login request with their credentials (email and password).</li>
                    <li>The server verifies the credentials and, if valid, generates a JWT token.</li>
                    <li>The token is sent back to the client and stored in local storage.</li>
                    <li>For subsequent requests to protected routes, the token is included in the headers.</li>
                    <li>The server verifies the token and grants access if it is valid.</li>
                </ol>
                <h3>References</h3>
                <ul>
                    <li>
                        <a href="https://jwt.io/introduction/" target="_blank" rel="noopener noreferrer">JWT Introduction</a> - An overview of JSON Web Tokens.
                    </li>
                    <li>
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express Official Website</a> - Official documentation and guides for Express.js.
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization" target="_blank" rel="noopener noreferrer">MDN Web Docs: Authorization Header</a> - Explanation of the Authorization header used for passing tokens.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
