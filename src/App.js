import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Router components from react-router-dom
import ViewCredentials from './components/ViewCredentials'; // Import ViewCredentials component
import AddCredential from './components/AddCredential'; // Import AddCredential component
import UpdateCredential from './components/UpdateCredential'; // Import UpdateCredential component
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component
import AssignDivision from './components/AssignDivision'; // Import AssignDivision component
import Home from './components/Home'; // Import Home component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for displaying toast notifications
import 'react-toastify/dist/ReactToastify.css'; // CSS for toast notifications
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS for styling

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root path to login */}
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
          <Route path="/register" element={<Register />} /> {/* Route for Register component */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> {/* Route for Home component, protected */}
          <Route path="/credentials/view/:divisionId" element={<PrivateRoute><ViewCredentials /></PrivateRoute>} /> {/* Route for viewing credentials by divisionId, protected */}
          <Route path="/credentials/add/:repositoryId" element={<PrivateRoute><AddCredential /></PrivateRoute>} /> {/* Route for adding a credential by repositoryId, protected */}
          <Route path="/credentials/update/:repositoryId/:credentialId" element={<PrivateRoute><UpdateCredential /></PrivateRoute>} /> {/* Route for updating a credential by repositoryId and credentialId, protected */}
          <Route path="/assign-division" element={<PrivateRoute><AssignDivision /></PrivateRoute>} /> {/* Route for assigning a division, protected */}
        </Routes>
        <ToastContainer /> {/* Container for displaying toast notifications */}
      </div>
    </Router>
  );
}

export default App; // Export App component as default
