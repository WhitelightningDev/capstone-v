import React from 'react';  // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components from react-router-dom
import ViewCredentials from './ViewCredentials';  // Import ViewCredentials component
import AddCredential from './AddCredential';  // Import AddCredential component
import UpdateCredential from './UpdateCredential';  // Import UpdateCredential component
import Login from './Login';  // Import Login component
import Register from './Register';  // Import Register component
import AssignDivision from './AssignDivision';  // Import AssignDivision component
import { ToastContainer } from 'react-toastify';  // Import ToastContainer for displaying toast notifications
import 'react-toastify/dist/ReactToastify.css';  // CSS for toast notifications
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS for styling

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/login" element={<Login />} />  {/* Route for Login component */}
          <Route path="/register" element={<Register />} />  {/* Route for Register component */}
          <Route path="/credentials/view/:divisionId" element={<ViewCredentials />} />  {/* Route for viewing credentials by divisionId */}
          <Route path="/credentials/add/:repositoryId" element={<AddCredential />} />  {/* Route for adding a credential by repositoryId */}
          <Route path="/credentials/update/:repositoryId/:credentialId" element={<UpdateCredential />} />  {/* Route for updating a credential by repositoryId and credentialId */}
          <Route path="/assign-division" element={<AssignDivision />} />  {/* Route for assigning a division */}
        </Routes>
        <ToastContainer />  {/* Container for displaying toast notifications */}
      </div>
    </Router>
  );
}

export default App;  // Export App component as default
