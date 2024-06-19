 // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ViewCredentials from './components/ViewCredentials';
import AddCredential from './components/AddCredential';
import UpdateCredential from './components/UpdateCredential';
import Login from './components/Login';
import Register from './components/Register';
import AssignDivision from './components/AssignDivision';
import Home from './components/Home';
import Profile from './components/Profile'; // Import Profile component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> {/* Add route for Profile component */}
          <Route path="/credentials/view/:divisionId" element={<ViewCredentials />} />
          <Route path="/credentials/add/:repositoryId" element={<AddCredential />} />
          <Route path="/credentials/update/:repositoryId/:credentialId" element={<UpdateCredential />} />
          <Route path="/assign-division" element={<AssignDivision />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
